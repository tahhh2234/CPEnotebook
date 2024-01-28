from django.http.response import HttpResponse
from django.shortcuts import render
from app_notebooks.models import Notebook

# Create your views here.
def home(request):
    return render(request, 'app_general/home.html')

def about(request):
    return render(request, 'app_general/about.html')

def library(request):
    all_notebooks = Notebook.objects.order_by('-is_maths')
    context = {'notebooks': all_notebooks}
    return render(request, 'app_general/library_form.html', context)

def library_thanks(request):
    return render(request, 'app_general/library_thanks.html')