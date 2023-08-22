from rest_framework import serializers
from django import forms
from .models import BoardModel
class BoardSerializer(serializers.ModelSerializer):
    class Meta:
        model=BoardModel
        fields=['Name','Description','Image','PostedDate']