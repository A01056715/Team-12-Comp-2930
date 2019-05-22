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
@login_required
def aboutus(request):
    return render(request, 'authen/aboutus.html')

# Renders the how to play (instruction) page if the user is logged in
@login_required
def howtoplay(request):
    return render(request, 'authen/howtoplay.html')

<<<<<<< HEAD
# Renders the Customized 404 page when the url is not found
def view_404(request, exceptionpy):
    return render(request, 'authen/404.html', status=404)

# Renders the customized 500 page when there is a server error
def view_500(request):
    return render(request, 'authen/500.html', status=500)
=======
def view_404(request, exception):
    return render(request, 'authen/404.html', status = 404)
>>>>>>> 2c82fe5e9970f6e791ded64bf59034711b038a9f
