from django.urls import path 
from . import views

urlpatterns = [
    path('', views.notebooks, name='notebooks'),
    path('<str:notebook_id>', views.notebook, name='notebook')
]