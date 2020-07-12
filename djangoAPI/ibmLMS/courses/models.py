from djongo import models
import uuid
from ibmUsers.models import Student, Teacher
from ibmLMS import ibmCustomStorage
from django.utils.timezone import datetime
from ibmLMS import settings


# Create your models here.

class Courses(models.Model):
    course_id = models.UUIDField(primary_key=True, default=uuid.uuid4().int, editable=False, null=False, blank=False),
    name = models.CharField(max_length=300, blank=False, null=False, verbose_name='course name')
    start_date = models.DateTimeField(verbose_name='start date')
    end_date = models.DateTimeField(verbose_name='end date')

    def __str__(self):
        return self.name


class Classes(models.Model):
    class_id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False, null=False, blank=False)
    course_part = models.ForeignKey(to=Courses, on_delete=models.CASCADE)
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

    def __str__(self):
        return self.course_part.__str__() +'_' +str(self.section_num)


class Documents(models.Model):
    document_id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False, null=False, blank=False)
    part_class = models.ForeignKey(to=Classes, on_delete=models.CASCADE)
    name = models.CharField(max_length=300, blank=False, null=False, verbose_name='document name')
    available_at = models.DateTimeField(verbose_name='document available start')
    available_until = models.DateTimeField(verbose_name='document available end')
    document = models.FileField(verbose_name='uploaded document', storage=ibmCustomStorage.IbmStorage())

    def __str__(self):
        return self.part_class.__str__()+ '_'+ self.name





