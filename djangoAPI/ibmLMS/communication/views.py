from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from twilio.rest import Client


# Create your views here.

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def sendMessage(request):
    pass
