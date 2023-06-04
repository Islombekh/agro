from django.shortcuts import render
from api.serializers import PostSerializers
from agroapp.models import Post
from rest_framework import generics
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from rest_framework import viewsets
from django_filters.rest_framework import DjangoFilterBackend



class PostViewSet(viewsets.ModelViewSet):
     permission_classes = [IsAuthenticatedOrReadOnly]
     queryset = Post.objects.all()
     serializer_class = PostSerializers
     filter_backends = [DjangoFilterBackend]
     filterset_fields = ['turi', 'nomi']




# class PostListAPIView(generics.ListCreateAPIView):
#     permission_classes = [
#         IsAuthenticatedOrReadOnly,
#     ]
#     queryset = Post.objects.all()
#     serializer_class = PostSerializers

#
# class PostDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
#     queryset = Post.objects.all()
#     serializer_class = PostSerializers
#
#
#


