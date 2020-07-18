from rest_framework.views import APIView, csrf_exempt
from rest_framework.decorators import permission_classes
from rest_framework import viewsets
from rest_framework.viewsets import ModelViewSet
from rest_framework.views import APIView
from .serializers import CoursesSerializer , ClassSerializer
from .models import Courses , Classes
from django.utils.timezone import now
from rest_framework.response import Response
import json


# Create your views here.
class CoursesApiViewSet(viewsets.ModelViewSet):
    queryset = Courses.objects.all()
    serializer_class = CoursesSerializer


class ClassesApiViewSet(viewsets.ModelViewSet):
    queryset = Classes.objects.all()
    serializer_class = ClassSerializer
