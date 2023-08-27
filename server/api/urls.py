from sys import path
from django.conf.urls.static import static
from django.urls import include
from rest_framework import routers

from api.views import ReceiptsList
from server import settings

router = routers.DefaultRouter()
router.register(r'api', ReceiptsList)
urlpatterns = [
    path('', include(router.urls)),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)