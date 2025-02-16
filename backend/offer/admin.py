from veosprinter.admin import ModelAdmin


from django.contrib import admin
from .models import Offer


@admin.register(Offer)
class OfferAdmin(ModelAdmin):
    list_display = ["wastage", "container"]  # Fields to display in the list view
    list_filter = ["wastage", "container"]  # Add filters if needed
    search_fields = ["wastage__name", "container__name"]
