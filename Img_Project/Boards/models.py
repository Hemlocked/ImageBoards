from django.db import models

# Create your models here.
class BoardModel(models.Model):
    Name=models.CharField(max_length=30)
    Description=models.TextField()
    Image=models.ImageField(upload_to='pics')
    PostedDate=models.DateField()
    