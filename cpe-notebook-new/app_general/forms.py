from django import forms
from django.db.models.base import Model
from app_notebooks.models import Notebook
from .models import Library

class NotebookMultipleChoiceField(forms.ModelMultipleChoiceField):
    def label_from_instance(self, obj):
        return obj.title

class LibraryForm(forms.Form):
    name = forms.CharField(max_length='128', required=True, label='ชื่อ-นามสกุล')
    email = forms.EmailField(max_length='128', required=True, label='อีเมล')
    notebook_set = NotebookMultipleChoiceField(
        queryset=Notebook.objects.order_by('-is_maths'), 
        required=True, 
        label='รายวิชา',
        widget=forms.CheckboxSelectMultiple
    )

class LibraryModelForm(forms.ModelForm):
    notebook_set = NotebookMultipleChoiceField(
        queryset=Notebook.objects.order_by('-is_maths'), 
        required=True, 
        label='รายวิชา',
        widget=forms.CheckboxSelectMultiple
    )

    class Meta:
        model = Library
        fields = ['name', 'email', 'notebook_set']
        labels = {
            'name': 'ชื่อ-นามสกุล',
            'email': 'อีเมล',
            'notebook_set': 'รายวิชา'
        }