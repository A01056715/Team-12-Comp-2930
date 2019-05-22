from django.db import models

# Models for the Country and Question for the question
class Country(models.Model):
    name = models.CharField(max_length=100, null=True, blank=True)

    def __str__(self):
        return self.name

class Question(models.Model):
    question = models.CharField(max_length=100)
    country = models.ForeignKey(Country, on_delete=models.CASCADE)
    choice1 = models.CharField(max_length=50)
    choice2 = models.CharField(max_length=50)
    choice3 = models.CharField(max_length=50)
    choice4 = models.CharField(max_length=50)
    answer = models.CharField(max_length=50)

    def __str__(self):
        return self.question

