from django.db import models

# Create your models here.
class Question(models.Model):
    #Question
    question = models.CharField(max_length=200, default="")
    #Explanation
    explanation = models.CharField(max_length=300, default="")



