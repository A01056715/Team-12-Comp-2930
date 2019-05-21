from django.shortcuts import render, render_to_response
from django.contrib.auth.decorators import login_required
from django.views.decorators.cache import never_cache
from django.template import RequestContext
import random

title = ['Noble', 'Armorer', 'Armorer', 'Warrior', 'Merchant']

# Create your views here.
def login(request):
    return render(request, 'authen/login.html')

def splash(request):
    return render(request, 'authen/splash.html')

def profile(request):
    randomTitle = random.choice(title);
    return render(request, 'authen/profile.html', {'title': randomTitle})

@login_required
def home(request):
    return render(request, 'authen/home.html')

def aboutus(request):
    return render(request, 'authen/aboutus.html')

def howtoplay(request):
    return render(request, 'authen/howtoplay.html')

def view_404(request, exceptionpy):
    return render(request, 'authen/404.html', status=404)

def view_500(request):
    return render(request, 'authen/500.html', status=500)
