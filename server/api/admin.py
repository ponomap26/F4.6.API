from django.contrib import admin

# Register your models here.
from .models import Receipts, Tag

admin.site.register(Tag)
admin.site.register(Receipts)
