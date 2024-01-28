from django.http.response import HttpResponse
from django.shortcuts import render

all_notebooks = [
    {'id': "261218", 'title': "Algorithms for Computer Engineers", "chapters": 24, "is_maths": False},
    {'id': "261332", 'title': "Data and Computer Communications", "chapters": 11, "is_maths": False},
    {'id': "261208", 'title': "Numerical Computation for Engineers", "chapters": 13, "is_maths": True},
    {'id': "261200", 'title': "Object-Oriented Programming", "chapters": 20, "is_maths": True}
]

# Create your views here.
def notebooks(request):
    context = {'notebooks': all_notebooks}
    return render(request, 'app_notebooks/notebooks.html', context)

def notebook(request, notebook_id):
    one_notebook = None
    try:
        one_notebook = [n for n in all_notebooks if n['id'] == notebook_id][0]
    except IndexError:
        print('ไม่พบรายวิชานี้')
    context = { 'notebook': one_notebook }
    return render(request, 'app_notebooks/notebook.html', context)