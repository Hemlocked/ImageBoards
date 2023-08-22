from django.shortcuts import render
from rest_framework.generics import ListAPIView,CreateAPIView
from .models import BoardModel
from .serializer import BoardSerializer
# Create your views here.

class ListBoards(ListAPIView):
    queryset=BoardModel.objects.all()
    serializer_class=BoardSerializer

class CreateBoard(CreateAPIView):
    queryset=BoardModel.objects.all()
    serializer_class=BoardSerializer