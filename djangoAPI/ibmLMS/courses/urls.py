from django.contrib import admin
from django.urls import path , include
from django.conf.urls import url
from rest_framework import routers
from .views import CoursesApiViewSet, ClassesApiViewSet, getUserClasses, getClassDocumentNames, getDocument
urlpatterns = [
    path('get_classes', getUserClasses),
    path('get_document_names', getClassDocumentNames),
    path('get_document', getDocument )
]

router = routers.SimpleRouter()
router.register('courses', CoursesApiViewSet , basename='courses')
router.register('classes', ClassesApiViewSet , basename='classes')
urlpatterns += router.urls
