from django.shortcuts import render, redirect
from rest_framework import generics
from doctor.models import Doctor,Template
from .serializers import DoctorSerializer,TemplateSerializer
from rest_framework.permissions import AllowAny
# Create your views here.

class DoctorAPIView(generics.ListCreateAPIView):
    queryset = Doctor.objects.all()
    serializer_class = DoctorSerializer
    permission_classes = [AllowAny]


class TemplateAPIView(generics.ListCreateAPIView):
    queryset = Template.objects.all()
    serializer_class = TemplateSerializer
    permission_classes = [AllowAny]


class TemplateCreateView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Template.objects.all()
    serializer_class = TemplateSerializer
    permission_classes = [AllowAny]


class DoctorCreateView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Doctor.objects.all()
    serializer_class = DoctorSerializer
    permission_classes = [AllowAny]