from django.contrib import admin

from container.models import Container
from veosprinter.admin import ModelAdmin


@admin.register(Container)
class ContainerAdmin(ModelAdmin):
    search_fields = [
        field.name for field in Container._meta.fields if field.name != "wastage"
    ]
    list_filter = [field.name for field in Container._meta.fields]
    list_display = [
        field.name for field in Container._meta.fields if field.name != "id"
    ]
