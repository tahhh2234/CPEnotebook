from django.shortcuts import render
from app_notebooks.models import Notebook
from django.http import HttpResponseRedirect
from django.urls import reverse
from app_general.forms import LibraryForm, LibraryModelForm
from .models import Library

# Create your views here.
def home(request):
    return render(request, 'app_general/home.html')

def about(request):
    return render(request, 'app_general/about.html')

def library(request):
    if request.method == 'POST':
        form = LibraryModelForm(request.POST)
        if form.is_valid():
            form.save()
            return HttpResponseRedirect(reverse('library_thanks'))
    else:
        form = LibraryModelForm()
    context = {'form': form}
    return render(request, 'app_general/library_form.html', context)

def library_thanks(request):
    return render(request, 'app_general/library_thanks.html')