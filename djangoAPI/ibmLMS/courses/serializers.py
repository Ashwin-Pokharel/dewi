from rest_framework.serializers import ModelSerializer
from .models import Courses


class CoursesSerializer(ModelSerializer):
    class Meta:
        model = Courses
        fields = ['course_id', 'name', 'start_date', 'end_date']