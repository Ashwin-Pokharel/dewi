from rest_framework.serializers import ModelSerializer , Serializer , HyperlinkedModelSerializer
from rest_framework import serializers
from .models import Courses , Classes
from  ibmUsers.serializers import userSerializer , teacherSerializer , studentSerializer


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
    students = studentSerializer(many=True)
    teachers = teacherSerializer(many=True)


