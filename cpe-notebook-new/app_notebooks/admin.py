from django.contrib import admin
from app_notebooks.models import Notebook

# Register your models here.

class NotebookAdmin(admin.ModelAdmin):
    list_display = ['title', 'code', 'chapters', 'is_maths']
    search_fields = ['title' , 'code']
    list_filter = ['is_maths']

admin.site.register(Notebook, NotebookAdmin)