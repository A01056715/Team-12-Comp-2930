from django.shortcuts import render

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