from djongo import models
import uuid
from ibmUsers.models import Student, Teacher
from ibmLMS import ibmCustomStorage


# Create your models here.

class Classes(models.Model):
    class_id = models.UUIDField(primary_key=True, default=uuid.uuid4(), editable=False, null=False, blank=False)
    section_num = models.IntegerField(unique=True, blank=False, verbose_name='section id')
    start_time = models.TimeField(verbose_name='start time', auto_now=False, blank=True)
    end_time = models.TimeField(verbose_name='end time', auto_now=False, blank=True)
    instructors = models.ArrayReferenceField(
        to=Teacher,
        on_delete=models.CASCADE,
    )
    students = models.ArrayReferenceField(
        to=Student,
        on_delete=models.CASCADE,
    )


class Courses(models.Model):
    course_id = models.UUIDField(primary_key=True , default=uuid.uuid4() , editable=False , null=False , blank=False),
    name = models.CharField(max_length=300 , blank=False , null=False , verbose_name='course name')
    start_date = models.DateTimeField(verbose_name='start date')
    end_date = models.DateTimeField(verbose_name='end date')
    classes = models.ArrayReferenceField(
        to=Classes,
        on_delete=models.CASCADE
    )


class Documents(models.Model):
    part_class = models.ForeignKey(to= Classes , on_delete=models.CASCADE)
    name = models.CharField(max_length=300 , blank=False , null=False , verbose_name='document name')
    available_at = models.DateTimeField(verbose_name='document available start')
    available_until = models.DateTimeField(verbose_name='document available end')
    document = models.FileField(verbose_name= 'uploaded document' , storage=ibmCustomStorage.IbmStorage())











