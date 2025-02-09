from django.contrib import admin

from customer.models import Customer
from order.models import Order
from veosprinter.admin import ModelAdmin


class OrderInline(admin.TabularInline):
    model = Order
    extra = 0
    ordering = ("-created_at",)
    can_delete = False
    max_num = 0

    def get_readonly_fields(self, request, obj=None):
        # Get all field names from the model
        return [field.name for field in self.model._meta.fields]

    def has_add_permission(self, request, obj=None):
        return False


# Register your models here.
@admin.register(Customer)
class CustomerAdmin(ModelAdmin):
    inlines = [OrderInline]
    list_display = (
        "name",
        "phone",
        "email",
        "created_at",
    )
    search_fields = (
        "name",
        "phone",
        "email",
    )
    list_filter = ("name",)
    ordering = ("name",)
    fieldsets = (
        (
            "Основная информация",
            {
                "fields": (
                    "name",
                    "phone",
                    "email",
                )
            },
        ),
    )
    readonly_fields = ("created_at",)
