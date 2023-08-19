from django.conf.urls.static import static
from django.contrib import admin

from django.urls import path, include

from django.conf import settings
from django.views.generic import TemplateView
from rest_framework import routers
from rest_framework.schemas import get_schema_view

from api.views import ReceiptsList

router = routers.DefaultRouter()
router.register(r'api', ReceiptsList)


urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include(router.urls)),
    path('redoc/', TemplateView.as_view(
            template_name='redoc.html',
            extra_context={'schema_url':'openapi-schema'}
        ), name='redoc'),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
