from django.conf.urls.static import static
from django.contrib import admin
from django.template.defaulttags import url

from django.urls import path, include

from django.conf import settings
from django.views.generic import TemplateView
from rest_framework import routers, permissions
from rest_framework.schemas import get_schema_view, openapi

from api.views import ReceiptsList

router = routers.DefaultRouter()
router.register(r'api', ReceiptsList)

urlpatterns = [
    path('openapi', get_schema_view(
        title="Your Project",
        description="API for all things …"
    ), name='openapi-schema'),
    path('admin/', admin.site.urls),
    path('', include(router.urls)),

]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
