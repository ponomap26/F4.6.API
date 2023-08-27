

from django.urls import path,  re_path

from drf_yasg import openapi
from rest_framework.schemas import get_schema_view

from api import admin



schema_view = get_schema_view(
    openapi.Info(
        title="Snippets API",
        default_version='v1',
        description="Test description",

    ),
    public=True,

)

urlpatterns = [
    path('admin/', admin.site.urls),
    re_path(r'^swagger(?P\.json|\.yaml)$', schema_view.without_ui(cache_timeout=0), name='schema-json'),
    path('swagger/', schema_view.with_ui('swagger', cache_timeout=0), name='schema-swagger-ui'),
    path('redoc/', schema_view.with_ui('redoc', cache_timeout=0), name='schema-redoc'),

]

