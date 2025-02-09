from django.contrib import admin


class ModelAdmin(admin.ModelAdmin):
    class Media:
        css = {"all": ("admin/css/custom.css",)}
