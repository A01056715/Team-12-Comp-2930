from django.shortcuts import render, redirect, render_to_response
import json
from country.models import Question, Country
from authen.models import Conquered
from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt


# Create your views here.
def antarctica(request):
    return render(request, 'antarctica/antarctica.html')


def china(request):
    question1 = Question.objects.filter(id=1)
    question2 = Question.objects.filter(id=2)
    question3 = Question.objects.filter(id=3)
    question4 = Question.objects.filter(id=4)
    return render_to_response('china/china.html', {'question1': question1, 'question2': question2, 'question3': question3, 'question4': question4})


def canada(request):
    question1 = Question.objects.filter(id=13)
    question2 = Question.objects.filter(id=14)
    question3 = Question.objects.filter(id=15)
    question4 = Question.objects.filter(id=16)
    return render(request, 'canada/canada.html', {'question1': question1, 'question2': question2, 'question3': question3, 'question4': question4})


def india(request):
    question1 = Question.objects.filter(id=9)
    question2 = Question.objects.filter(id=10)
    question3 = Question.objects.filter(id=11)
    question4 = Question.objects.filter(id=12)
    return render(request, 'india/india.html', {'question1': question1, 'question2': question2, 'question3': question3, 'question4': question4})


def turkey(request):
    question1 = Question.objects.filter(id=17)
    question2 = Question.objects.filter(id=18)
    question3 = Question.objects.filter(id=19)
    question4 = Question.objects.filter(id=20)
    return render(request, 'turkey/turkey.html', {'question1': question1, 'question2': question2, 'question3': question3, 'question4': question4})


def brazil(request):
    question1 = Question.objects.filter(id=5)
    question2 = Question.objects.filter(id=6)
    question3 = Question.objects.filter(id=7)
    question4 = Question.objects.filter(id=8)
    return render(request, 'brazil/brazil.html', {'question1': question1, 'question2': question2, 'question3': question3, 'question4': question4})

# def update_score(request):
#      if request.method == 'POST':
#         return HttpResponse("Success!")
# #         user = request.user
# #         score = request.POST.get('pk',None)
# #         conquered = Conquered.objects.get(pk=country_id)
# #         user_score = request.GET['user_score']
# #         response_data = {}
# #         if user_score == 100:
# #             conquered.country_id = request.GET['country_id']
# #             conquered.user_id = request.user_id
# #             conquered.save()
# #         return HttpResponse('Successful')

# #     else:
# #         return HttpResponse('Failure')
