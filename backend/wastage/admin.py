from django.contrib import admin
from wastage.models import Wastage

class WastageAdmin(admin.ModelAdmin):
    list_display = ['name', 'description']
    search_fields = ['name', 'description']
    list_filter = ['name', 'description']
    list_per_page = 10
    ordering = ['name']

admin.site.register(Wastage, WastageAdmin)