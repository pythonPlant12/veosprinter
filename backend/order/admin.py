from django.contrib import admin
from django.db import models
from django import forms
from django.contrib.admin import DateFieldListFilter, SimpleListFilter

from order.models import Order
from veosprinter.admin import ModelAdmin


class StartDatePickerFilter(SimpleListFilter):
    template = "admin/start_date_range_filter.html"
    title = "Начало заказа"
    parameter_name = "start_date"

    def lookups(self, request, model_admin):
        return ((None, None),)

    def queryset(self, request, queryset):
        # Only add our filter condition to the existing queryset
        if self.value() is not None:
            return queryset.filter(start_date__gte=self.value())
        # Return the unchanged queryset if no value
        return queryset


class EndDatePickerFilter(SimpleListFilter):
    template = "admin/end_date_range_filter.html"
    title = "Конец заказа"
    parameter_name = "end_date"

    def lookups(self, request, model_admin):
        return ((None, None),)

    def queryset(self, request, queryset):
        # Only add our filter condition to the existing queryset
        if self.value() is not None:
            return queryset.filter(end_date__lte=self.value())
        # Return the unchanged queryset if no value
        return queryset


@admin.register(Order)
class OrderAdmin(ModelAdmin):
    list_display = (
        "customer",
        "address",
        "wastage",
        "container",
        "start_date",
        "start_time",
        "end_date",
        "end_time",
        "created_at",
        "price_no_vat",
        "vat",
        "total_price",
    )
    search_fields = (
        "customer__name",
        "address",
        "wastage__name_ru",
        "container__name_ru",
        "start_date",
        "start_time",
        "end_date",
        "end_time",
        "created_at",
        "price_no_vat",
        "vat",
        "total_price",
    )

    list_per_page = 10
    list_max_show_all = 100

    formfield_overrides = {
        models.DateField: {"widget": forms.DateInput(attrs={"type": "date"})},
        models.TimeField: {"widget": forms.TimeInput(attrs={"type": "time"})},
        models.DateTimeField: {
            "widget": forms.DateTimeInput(attrs={"type": "datetime-local"})
        },
    }

    # Update list_filter to include both date fields with calendar filter
    list_filter = [
        ("start_date", DateFieldListFilter),
        ("end_date", DateFieldListFilter),
        StartDatePickerFilter,
        EndDatePickerFilter,
    ]

    def formfield_for_dbfield(self, db_field, **kwargs):
        if db_field.name == "description":
            kwargs["widget"] = forms.Textarea(attrs={"rows": 6, "cols": 80})
        if db_field.name == "address":
            kwargs["widget"] = forms.Textarea(attrs={"rows": 2, "cols": 80})
        return super().formfield_for_dbfield(db_field, **kwargs)

    class Media:
        css = {
            "all": (
                "admin/css/widgets.css",
                "admin/css/date_range_filter.css",
            )
        }
        js = (
            "admin/js/calendar.js",
            "admin/js/admin/DateTimeShortcuts.js",
        )
