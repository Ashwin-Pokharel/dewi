from rest_framework.views import APIView , csrf_exempt
from rest_framework.decorators import permission_classes
from rest_framework.viewsets import ModelViewSet
from .models import Courses
from django.utils.timezone import now


# Create your views here.
class CoursesApiView(ModelViewSet):
    def get_queryset(self):
        print("queryset")
