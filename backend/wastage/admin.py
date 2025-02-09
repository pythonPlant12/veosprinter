from django.contrib import admin

from container.models import Container
from veosprinter.admin import ModelAdmin
from wastage.models import Wastage


class ContainerInline(
    admin.TabularInline
):  # or admin.StackedInline if you prefer a different layout
    model = Container
    extra = 1  # Number of empty forms to display
    fields = [field.name for field in Container._meta.fields if field.name != "id"]


class WastageAdmin(ModelAdmin):
    inlines = [ContainerInline]

    list_display = ["name", "description"]
    search_fields = ["name", "description"]
    list_filter = ["name", "description"]
    list_per_page = 10
    ordering = ["name"]


admin.site.register(Wastage, WastageAdmin)
