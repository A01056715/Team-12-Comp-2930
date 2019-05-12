from django.shortcuts import render
from .models import Question 

# Create your views here.
def base(request):
    questions = Question.objects
    return render(request, 'canada/canada.html', {'questions': questions})