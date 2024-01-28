from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home'),
    path('about', views.about, name='about'),
    path('library', views.library, name='library'),
    path('library/thanks', views.library_thanks, name='library_thanks')
]