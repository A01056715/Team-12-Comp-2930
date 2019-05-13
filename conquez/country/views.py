from django.shortcuts import render

# Create your views here.
def antarctica(request):
    return render(request, 'antarctica/antarctica.html')

def china(request):
    return render(request, 'china/china.html')