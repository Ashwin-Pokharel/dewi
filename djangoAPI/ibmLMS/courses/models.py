from djongo import models
import uuid
from ibmUsers.models import Student, Teacher
from ibmLMS import ibmCustomStorage
from django.utils.timezone import datetime
from ibmLMS import settings
import secrets

from django.db.models.signals import pre_delete
from django.dispatch.dispatcher import receiver


# Create your models here.

class Courses(models.Model):
    course_id = models.UUIDField(primary_key=True, blank=False, default=uuid.uuid4, editable=False)
    course_code = models.PositiveSmallIntegerField(unique=True)
    name = models.CharField(blank=False, max_length=200, verbose_name="course name")
    start_date = models.DateTimeField(auto_now=False, verbose_name="start date")
    end_date = models.DateTimeField(auto_now=False, verbose_name="end date")

    def __str__(self):
        return self.name


class Classes(models.Model):
    class_id = models.UUIDField(primary_key=True, blank=False, default=uuid.uuid4, editable=False)
    section_id = models.PositiveSmallIntegerField(verbose_name="class section ID", blank=False)
    start_time = models.TimeField(auto_now=False, blank=False, verbose_name="class start time")
    end_time = models.TimeField(auto_now=False, blank=False, verbose_name="class end time")
    course_part = models.ForeignKey(to='Courses', on_delete=models.CASCADE, verbose_name='Course part')

    students = models.ArrayReferenceField(
        to=Student,
        on_delete=models.CASCADE
    )

    teachers = models.ArrayReferenceField(
        to=Teacher,
        on_delete=models.CASCADE
    )

    def __str__(self):
        return str(self.course_part) + '_' + str(self.section_id)


class Documents(models.Model):
    document_id = models.UUIDField(primary_key=True, blank=False, default=uuid.uuid4, editable=False)
    part_class = models.ForeignKey(to='Classes', on_delete=models.CASCADE)
    name = models.CharField(max_length=300, blank=False, verbose_name='document name')
    available_at = models.DateTimeField(verbose_name='document available start date')
    available_until = models.DateTimeField(verbose_name='document available end date')
    document = models.FileField(storage=ibmCustomStorage.IbmStorage())

    def __str__(self):
        return "{0}_{1}".format(str(self.part_class), self.name)

    def get_file_name(self):
        return self.document.name


@receiver(pre_delete, sender=Documents)
def document_delete(sender, instance, **kwargs):
    instance.document.delete(instance.document.name)