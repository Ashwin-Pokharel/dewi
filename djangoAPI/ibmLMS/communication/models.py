from djongo import models
from courses.models import Classes
import datetime


class Notification(models.Model):
    content = models.CharField(max_length=1000, blank=False)
    class_part = models.ForeignKey(to=Classes, blank=False)
    sent_date = models.DateTimeField(default=datetime)

# Create your models here.
