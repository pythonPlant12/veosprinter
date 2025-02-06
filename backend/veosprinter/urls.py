from django.contrib import admin
from django.urls import path, include
from rest_framework.routers import DefaultRouter

from wastage import views

router = DefaultRouter()
router.register('wastage', views.WastageViewSet, basename='wastage')

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/v1/', include(router.urls)),
    # path('', include('wastage.urls')),
]

urlpatterns += router.urls

# if settings.DEBUG:
#     urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)