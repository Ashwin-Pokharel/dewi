from rest_framework.serializers import ModelSerializer
from .models import Courses , Classes , Documents


class CoursesSerializer(ModelSerializer):
    class Meta:
        model = Courses
        fields = ['course_id', 'name', 'start_date', 'end_date']


class ClassesSerializer(ModelSerializer):
    class Meta:
        model = Classes
        fields = ['class_id', 'course_part', 'section_num', 'start_time' , 'end_time', 'instructors', 'students']


class DocumentsSerializer(ModelSerializer):
    class Meta:
        model = Documents
        fields = ['document_id' , 'part_class' , 'name' , 'available_at' , 'available_until' , 'document']