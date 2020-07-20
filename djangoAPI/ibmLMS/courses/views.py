from rest_framework import viewsets, views
from .models import Courses, Classes, Documents
from .serializers import CoursesSerializer, ClassSerializer, DocumentSerializer

from ibmUsers.models import Student, Teacher

from courses.permissions import ClassesStudentPermission, ClassesTeacherPermission
from rest_framework.permissions import IsAuthenticated
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from django.http import FileResponse
from django.core.exceptions import ObjectDoesNotExist
from rest_framework.request import Request
import json


# Create your views here.
class CoursesApiViewSet(viewsets.ModelViewSet):
    permission_classes = [ClassesTeacherPermission, ClassesStudentPermission]
    queryset = Courses.objects.all()
    serializer_class = CoursesSerializer


class ClassesApiViewSet(viewsets.ModelViewSet):
    permission_classes = [ClassesTeacherPermission, ClassesStudentPermission]
    queryset = Classes.objects.all()
    serializer_class = ClassSerializer


class DocumentApiViewSet(viewsets.ModelViewSet):
    permission_classes = [IsAuthenticated]
    queryset = Documents.objects.all()
    serializer_class = DocumentSerializer


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def getUserClasses(request):
    try:
        user = request.user
        student_found, student = check_student(user)
        if student_found:
            query = Classes.objects.filter(students=student)
            transform = ClassSerializer(query, many=True)
            data = transform.data
            return Response(status=200, data=data)
        teacher_found, teacher = check_teacher(user)
        if teacher_found:
            query = Classes.objects.filter(teachers=teacher)
            transform = ClassSerializer(query, many=True)
            data = transform.data
            return Response(status=200, data=data)
        else:
            return return_error_response_dict(400 , 'user is neither teacher nor student')
    except Exception as e:
        return return_error_response_dict(500 , 'internal server error')


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def getClassDocumentNames(request):
    try:
        data = request.data
        class_id = data['class_id']
        query = Documents.objects.filter(part_class=class_id)
        transform = DocumentSerializer(query, many=True)
        data = transform.data
        return Response(status=200, data=data)
    except KeyError as e:
        return return_error_response_dict(400,'class_id is not present in request')
    except Exception as e:
        return return_error_response_dict(500 , 'internal server error')


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def getDocument(request):
    try:
        data = request.data
        document_id = data['document_id']
        file = Documents.objects.get(document_id=document_id).document.open()
        return FileResponse(file, as_attachment=True , status=200)
    except ObjectDoesNotExist as e:
        return Response(status=400, data=json.dumps({}))


def return_error_response_dict(status, error_message):
    return Response(status=status, data=json.dumps({'error': error_message}))


def check_student(user):
    try:
        student = Student.objects.get(user=user)
        return True, student
    except ObjectDoesNotExist as e:
        return False, None


def check_teacher(user):
    try:
        teacher = Teacher.objects.get(user=user)
        return True, teacher
    except ObjectDoesNotExist as e:
        return False, None
