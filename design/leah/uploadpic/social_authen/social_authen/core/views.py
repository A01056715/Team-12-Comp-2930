from django.shortcuts import render
from django.contrib.auth.decorators import login_required
from django.contrib.auth.models import User
from django.core.files.storage import FileSystemStorage


# Create your views here.
def login(request):
  return render(request, 'login.html')
  
@login_required
def home(request):
  return render(request, 'home.html')

# def custom_login(request):
#   if request.user.is_authenticated():
#     return HttpResponseRedirect(...)
#   else:
#     return login(request)

def upload(request):
  if request.method == 'POST':
    uploaded_file = request.FILES['document']
    fs = FileSystemStorage()
    filename = fs.save(uploaded_file.name, uploaded_file)
  return render(request,'user.html')

# def simple_upload(request):
#     if request.method == 'POST' and request.FILES['myfile']:
#         myfile = request.FILES['myfile']
#         fs = FileSystemStorage()
#         filename = fs.save(myfile.name, myfile)
#         uploaded_file_url = fs.url(filename)
#         return render(request, 'core/simple_upload.html', {
#             'uploaded_file_url': uploaded_file_url
#         })
#     return render(request, 'core/simple_upload.html')

