from django.contrib import admin
from app_general.models import Library

# Register your models here.

class LibraryAdmin(admin.ModelAdmin):
    list_display = ['name', 'email', 'status']
    search_fields = ['name', 'email']
    list_filter = ['status']

admin.site.register(Library, LibraryAdmin)