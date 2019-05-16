from django.shortcuts import render, redirect
from authen.models import Conquered
from django.http import HttpResponse
from authen.views import home
import json

# Create your views here.
def antarctica(request):
    return render(request, 'antarctica/antarctica.html')

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

def get_score(request):
    if request.method == 'GET':
        user_score = request.GET.get('the_score')
        country_id = request.GET.get('country_id')
        response_data = {}
        if user_score == "100": 
            if country_id == 1:
                conquered = Conquered(country_id=1, user_id=request.user)
                conquered.save()

            elif country_id == 2:
                conquered = Conquered(country_id=2, user_id=request.user)
                conquered.save()

            elif country_id == 3:
                conquered = Conquered(country_id=3, user_id=request.user)
                conquered.save()

            elif country_id == 4:
                conquered = Conquered(country_id=4, user_id=request.user)
                conquered.save()

            elif country_id == 5:
                conquered = Conquered(country_id=5, user_id=request.user)
                conquered.save()

            response_data['result'] = 'Successfully Conquered'

        return HttpResponse(
            json.dumps(response_data),
            content_type="applcication/json"
        )
    
    else:
        return HttpResponse(
            json.dumps({"nothing to see": "this isn't happening"}),
            content_type="application/json "           
        )
    return redirect('home')

