from django.contrib import admin
from django.urls import path , include
from django.conf.urls import url
from rest_framework import routers
from .views import CoursesApiViewSet , ClassesApiViewSet

router = routers.SimpleRouter()
router.register('courses', CoursesApiViewSet , basename='courses')
router.register('classes' , ClassesApiViewSet , basename='courses')

urlpatterns=router.urls
