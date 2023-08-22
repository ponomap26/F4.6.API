from django.contrib.auth.models import User
from django.shortcuts import render
import django_filters
# Create your views here.
from rest_framework import generics, viewsets
from .import serializers
from .models import Receipts, Tag


class UserList(generics.ListAPIView):
    queryset = User.objects.all()
    serializer_class = serializers.UserSerializer

class TagList(viewsets.ModelViewSet):
    queryset = Tag.objects.all()
    serializer_class = serializers.TagSerializer
    filter_backends = [django_filters.rest_framework.DjangoFilterBackend]
    search_fields = ['name']


class ReceiptsList(viewsets.ModelViewSet):
    queryset = Receipts.objects.all()
    serializer_class = serializers.ReceiptsSerializer
    filter_backends = [django_filters.rest_framework.DjangoFilterBackend]
    search_fields = ['title']


# class ReceiptsDetail(generics.RetrieveUpdateDestroyAPIView):
#     queryset = Receipts.objects.all()
#     serializer_class = serializers.ReceiptsSerializer
#     filter_backends = [django_filters.rest_framework.DjangoFilterBackend]
