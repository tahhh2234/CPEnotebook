from django.http.response import HttpResponse
from django.shortcuts import render

# Create your views here.
def notebooks(request):
    return render(request, 'app_notebooks/notebooks.html')

def notebook(request, notebook_id):
    return render(request, 'app_notebooks/notebook.html', context={'notebook_id': notebook_id})