from django.shortcuts import render, render_to_response
from django.contrib.auth.decorators import login_required
from django.views.decorators.cache import never_cache
from django.template import RequestContext

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

def aboutus(request):
    return render(request, 'authen/aboutus.html')

def howtoplay(request):
    return render(request, 'authen/howtoplay.html')

def handler404(request, *args, **argv):
    response = render_to_response('authen/404.html', {}, context_instance=RequestContext(request))
    response.status_code = 404
    return response


