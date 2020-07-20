from abc import ABC, ABCMeta

from rest_framework.serializers import ModelSerializer , Serializer , HyperlinkedModelSerializer
from rest_framework import serializers
from .models import Courses , Classes , Documents
from  ibmUsers.serializers import teacherSerializer , studentSerializer


class CoursesSerializer(ModelSerializer):
    class Meta:
        model = Courses
        fields = ['course_id', 'course_code', 'name', 'start_date', 'end_date']


class ClassSerializer(Serializer):
    class_id = serializers.CharField()
    section_id = serializers.IntegerField()
    start_time = serializers.TimeField()
    end_time = serializers.TimeField()
    course_part = CoursesSerializer()


class DocumentSerializer(ModelSerializer):
    document = serializers.SerializerMethodField()

    class Meta:
        model= Documents
        fields = ['document_id' , 'part_class' , 'name', 'available_at' , 'available_until', 'document']

    def get_document(self , obj):
        return obj.document.name
