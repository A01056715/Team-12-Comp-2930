from django.shortcuts import render, redirect
from authen.models import Conquered
from django.http import HttpResponse
from authen.views import home
import json
from country.models import Question
from authen.models import Conquered


# Create your views here.
def antarctica(request):
    context = {'Question': 'china question' }
    # context = json.dumps(context)
    return render(request, 'antarctica/antarctica.html', context)

def china(request):
    return render(request, 'china/china.html')

def canada(request):
    return render(request, 'canada/canada.html')

def india(request):
    return render(request, 'india/india.html')

def turkey(request):
    return render(request, 'turkey/turkey.html')

def brazil(request):
    return render(request, 'brazil/brazil.html')

def update_score(request):
    if request.method == 'POST':
        conquered = Conquered.objects.get()
        user_score = request.POST['user_score']
        username = request.POST['username']
        country_id = request.POST['country_id']
        response_data = {}
        if user_score == 100: 
            conquered.country_id = country_id
            conquered.user_id = username
            message = 'update successful'
    return HttpResponse(message)

