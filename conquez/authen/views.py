from django.shortcuts import render
from django.contrib.auth.decorators import login_required
from django.views.decorators.cache import never_cache

# Create your views here.
def login(request):
    return render(request, 'authen/login.html')
  
@login_required
def splash(request):
    return render(request, 'authen/splash.html')

def home(request):
    return render(request, 'authen/home.html')