from django.shortcuts import render
from django.contrib.auth.decorators import login_required
from django.views.decorators.cache import never_cache

# Create your views here.
def login(request):
    return render(request, 'authen/login.html')

def splash(request):
    return render(request, 'authen/splash.html')

def profile(request):
    return render(request, 'authen/profile.html')

@login_required
def home(request):
    return render(request, 'authen/home.html')


