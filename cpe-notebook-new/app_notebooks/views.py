from django.http.response import HttpResponse
from django.shortcuts import render
from .models import Notebook

all_notebooks = [
    {'id': "261218", 'title': "Algorithms for Computer Engineers", "chapters": 24, "is_maths": False},
    {'id': "261332", 'title': "Data and Computer Communications", "chapters": 11, "is_maths": False},
    {'id': "261208", 'title': "Numerical Computation for Engineers", "chapters": 13, "is_maths": True},
    {'id': "261200", 'title': "Object-Oriented Programming", "chapters": 20, "is_maths": True}
]

# Create your views here.
def notebooks(request):
    all_notebooks = Notebook.objects.order_by('code')
    context = {'notebooks': all_notebooks}
    return render(request, 'app_notebooks/notebooks.html', context)

def notebook(request, notebook_id):
    one_notebook = None
    try:
        one_notebook = Notebook.objects.get(id=notebook_id)
    except:
        print('ไม่พบรายวิชานี้')
    context = { 'notebook': one_notebook }
    return render(request, 'app_notebooks/notebook.html', context)