from django.shortcuts import render, redirect, render_to_response
from authen.models import Conquered
from django.http import HttpResponse
from authen.views import home
import json
from country.models import Question
from authen.models import Conquered
from country.models import Country
from django.views.decorators.csrf import csrf_exempt


# Create your views here.
def antarctica(request):
    context = {'Question': 'china question' }
    # context = json.dumps(context)
    return render(request, 'antarctica/antarctica.html', context)

def china(request):
        country = Country.objects.filter(name="China")
        question1 = Question.objects.filter(id=1)
        question2 = Question.objects.filter(id=2)
        question3 = Question.objects.filter(id=3)
        question4 = Question.objects.filter(id=4)
        return render(request, 'china/china.html', { 'country': country, 'question1': question1, 'question2': question2, 'question3': question3, 'question4': question4 })

def canada(request):
        country_id = Country.objects.filter(id=4)
        question1 = Question.objects.filter(question_id=13)
        question2 = Question.objects.filter(question_id=14)
        question3 = Question.objects.filter(question_id=15)
        question4 = Question.objects.filter(question_id=16)
        return render(request, 'canada/canada.html', { 'country_id': country_id, 'question1': question1, 'question2': question2, 'question3': question3, 'question4': question4 })

def india(request):
        country_id = Country.objects.filter(id=3)
        question1 = Question.objects.filter(question_id=9)
        question2 = Question.objects.filter(question_id=10)
        question3 = Question.objects.filter(question_id=11)
        question4 = Question.objects.filter(question_id=12)
        return render(request, 'india/india.html', { 'country_id': country_id, 'question1': question1, 'question2': question2, 'question3': question3, 'question4': question4 })

def turkey(request):
        country_id = Country.objects.filter(id=5)
        question1 = Question.objects.filter(question_id=17)
        question2 = Question.objects.filter(question_id=18)
        question3 = Question.objects.filter(question_id=19)
        question4 = Question.objects.filter(question_id=20)
        return render(request, 'turkey/turkey.html', { 'country_id': country_id, 'question1': question1, 'question2': question2, 'question3': question3, 'question4': question4 })

def brazil(request):
        country_id = Country.objects.filter(id=2)
        question1 = Question.objects.filter(question_id=5)
        question2 = Question.objects.filter(question_id=6)
        question3 = Question.objects.filter(question_id=7)
        question4 = Question.objects.filter(question_id=8)
        return render(request, 'brazil/brazil.html', { 'country_id': country_id, 'question1': question1, 'question2': question2, 'question3': question3, 'question4': question4 })

@csrf_exempt
def update_score(request):
    if request.method == 'POST':
        conquered = Conquered.objects.get()
        user_score = request.GET['user_score']
        response_data = {}
        if user_score == 100: 
            conquered.country_id = request.GET['country_id']
            conquered.user_id = request.user_id
            conquered.save()
        return HttpResponse('Successful')

    else:
        return HttpResponse('Failure')
