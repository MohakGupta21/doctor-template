from django.urls import path
from .views import DoctorAPIView,TemplateAPIView,TemplateCreateView,DoctorCreateView

urlpatterns = [
    path('doctors',DoctorAPIView.as_view()),
    path('templates',TemplateAPIView.as_view()),
    path('template/<int:pk>',TemplateCreateView.as_view(),name='template-read-create'),
    path('doctor/<int:pk>',DoctorCreateView.as_view(),name='doctor-read-create'),
]
