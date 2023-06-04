from django.db import models

# Create your models here.
class Post(models.Model):
    rasmi = models.ImageField(upload_to='static/image', default="")
    nomi = models.CharField(max_length=150)
    turi = models.TextField(max_length=100, default="")
    qisqacha = models.TextField(default="")
    toliq = models.TextField(default="")

