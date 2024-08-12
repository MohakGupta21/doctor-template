from uuid import uuid4
from django.db import models
from django import forms
from django.core.validators import MinValueValidator, MaxValueValidator

# Create your models here.
class Doctor(models.Model):
    def __str__(self):
        return self.name
    name = models.CharField(max_length=100)
    contact_no = models.CharField(max_length=10, unique=True)
    license_no = models.CharField(max_length=10, unique=True)
    field = models.CharField(max_length=100)
    degree = models.CharField(max_length=100)
    info = models.TextField(null=True, blank=True)

class Template(models.Model):
    doctor = models.ForeignKey(Doctor, on_delete=models.CASCADE)

    patient_name = models.CharField(max_length=100)
    patient_age = models.PositiveIntegerField(default=1, validators=[MinValueValidator(1),MaxValueValidator(130)])
    patient_gender = models.CharField(max_length=10)
    medication_name = models.CharField(max_length=100)
    medication_dosage = models.PositiveIntegerField(default=1, validators=[MinValueValidator(5)])
    medication_frequency = models.PositiveIntegerField(default=1, validators=[MinValueValidator(1), MaxValueValidator(5)])
    duration = models.PositiveIntegerField(default=1,validators=[MinValueValidator(1)])
    instructions = models.TextField(null=True, blank=True)
    date = models.DateField()
    random_id = models.CharField(max_length=10, unique=True, editable=False,default=uuid4)

    def __str__(self):
        return f"Template: {random_id}"


