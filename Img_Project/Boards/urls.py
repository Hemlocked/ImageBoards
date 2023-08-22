from django.urls import path
from .views import ListBoards,CreateBoard
urlpatterns=[
    path('ListBoards/',ListBoards.as_view()),
    path('CreateBoard/',CreateBoard.as_view()),
]