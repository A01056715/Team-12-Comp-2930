from django.shortcuts import render, render_to_response
from django.contrib.auth.decorators import login_required
from django.views.decorators.cache import never_cache
from django.template import RequestContext
import random

# Array that stores different titles for the user to have on their profile
title = ['Noble', 'Armorer', 'Armorer', 'Warrior', 'Merchant']

# Create your views here.
def login(request):
    return render(request, 'authen/login.html')

# Function that renders the splash page
def splash(request):
    return render(request, 'authen/splash.html')

# Renders the profile page only if the user is logged in
# Also sends a random occupation for fun
@login_required
def profile(request):
    randomTitle = random.choice(title);
    return render(request, 'authen/profile.html', {'title': randomTitle})

# Renders the Globe page only if the user is logged in
@login_required
def home(request):
    return render(request, 'authen/home.html')

# Renders the aboutus page only if the user is logged in
def aboutus(request):
    return render(request, 'authen/aboutus.html')

def howtoplay(request):
    return render(request, 'authen/howtoplay.html')

def view_404(request, exception):
    return render(request, 'authen/404.html', status = 404)
