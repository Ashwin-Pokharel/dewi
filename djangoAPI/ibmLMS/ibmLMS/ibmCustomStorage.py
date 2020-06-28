from abc import ABCMeta

from django.core.files import File
from django.core.files.temp import NamedTemporaryFile
from django.core.files.uploadedfile import InMemoryUploadedFile , TemporaryUploadedFile
from django.core.files.storage import Storage
from . import settings
from decouple import config as envconfig
import ibm_boto3
from ibm_botocore.client import Config, ClientCreator, ClientError
import tempfile
from django.utils.deconstruct import deconstructible
from django.core.management.utils import get_random_string


def transform(content):
    if type(content) == TemporaryUploadedFile:
        return content
    temp_file = NamedTemporaryFile(delete=False)
    for block in content.chunks():
        # If no more file then stop
        if not block:
            break
        # Write image block to temporary file
        temp_file.write(block)

    temp_file.flush()
    return temp_file


@deconstructible
class IbmStorage(Storage):
    cos = None

    def __init__(self, option=None):
        super();
        if not option:
            option = settings.DEFAULT_FILE_STORAGE
        self.cos = ibm_boto3.client(
            "s3",
            ibm_api_key_id=envconfig('COS_API_KEY_ID'),
            ibm_service_instance_id=envconfig('COS_INSTANCE_CRN'),
            config=Config(signature_version='oauth'),
            endpoint_url=envconfig('COS_ENDPOINT'),
        )

    def _save(self, name, content):
        try:
            new_file = transform(content)
            print(new_file.name)
            with open(new_file.name, "rb") as f:
                self.cos.upload_fileobj(f, envconfig("COS_BUCKET_IBM"), name)
            new_file.close()
        except FileNotFoundError:
            raise FileNotFoundError
        except Exception as e:
            print(Exception, e)
            raise Exception

    def _open(self, name, mode="rb"):
        return File(name)

    def path(self, name):
        raise NotImplementedError("not available ")

    def exists(self, name):
        try:
            self.cos.get_object(Bucket=envconfig("COS_BUCKET_IBM"), Key=name)
            return True
        except ClientError as e:
            if e.response['Error']['Code'] == "404":
                print("object not found", e)
                return False
            else:
                print(e)
                return False

    def delete(self, name):
        if self.exists(name):
            return True
        return False

    def get_available_name(self, name, max_length=None):
        return self.get_valid_name(name)

    def get_valid_name(self, name):
        if not self.exists(name):
            return name
        else:
            return name + get_random_string(7)

    def listdir(self, path):
        raise NotImplementedError

    def size(self, name):
        raise NotImplementedError

    def url(self, name):
        raise NotImplementedError
