from django.db import models
from django.utils import timezone
from django.contrib.auth.models import User

# Create your models here.


class Base(models.Model):
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        abstract = True


class Activity(Base):
    user = models.ForeignKey(User, on_delete=models.CASCADE, null=True)
    title = models.CharField(max_length=200)
    description = models.CharField(max_length=10000)
    image = models.ImageField(upload_to='activeimages', blank=True, null=True)
    task_date = models.DateTimeField(
        default=timezone.now(), blank=True, null=True)


class Photo (Base):
    activity = models.ForeignKey("Activity", on_delete=models.CASCADE)
    image = models.ImageField(upload_to='images', blank=True, null=True)


class Task (Base):
    user = models.ForeignKey(User, on_delete=models.CASCADE, null=True)
    goals = models.CharField(max_length=500, choices=(
        ('weekly', 'weekly'), ('daily', 'daily'), ('short', 'short'), ('long', 'long')))
    title = models.CharField(max_length=5000, blank=True, null=True)
    description = models.CharField(max_length=10000, blank=True, null=True)


class UserMode(Base):
    user = models.ForeignKey(User, on_delete=models.CASCADE, null=True)
    mood = models.CharField(max_length=200, choices=(('Happy', 'Happy'), ('sad', 'sad'), ('fear', 'fear'), (
        'anger', 'anger'), ('surprise', 'surprise'), ('shyness', 'shyness'), ('guilt', 'guilt'), ('shame', 'shame')))
    reason = models.CharField(max_length=10000, blank=True, null=True)
    music = models.CharField(max_length=100, blank=True, null=True)


class Learning(Base):
    user = models.ForeignKey(User, on_delete=models.CASCADE, null=True)
    title = models.CharField(max_length=4000)
    description = models.CharField(max_length=100000)
    image = models.ImageField(upload_to='learnimages', blank=True, null=True)


class Food(Base):
    user = models.ForeignKey(User, on_delete=models.CASCADE, null=True)
    title = models.CharField(max_length=4000)
    description = models.CharField(max_length=100000)
    image = models.ImageField(upload_to='foodimages', blank=True, null=True)


class Travel(Base):
    user = models.ForeignKey(User, on_delete=models.CASCADE, null=True)
    title = models.CharField(max_length=4000)
    description = models.CharField(max_length=100000)
    image = models.ImageField(upload_to='travelimages', blank=True, null=True)


class MyAlbum(Base):
    user = models.ForeignKey(User, on_delete=models.CASCADE, null=True)
    album_type = models.CharField(max_length=20, choices=(
        ('family photo', 'family photo'), ('random photo', 'random photo'), ('myphoto', 'myphoto')))
    image = models.ImageField(upload_to='myimages', blank=True, null=True)
