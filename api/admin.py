from django.contrib import admin
from .models import Activity, Photo, Task, UserMode, Learning, Food, Travel, MyAlbum

# Register your models here.


@admin.register(Activity)
class ActivityAdmin(admin.ModelAdmin):
    list_display = ['id', 'title', 'description', 'image', 'task_date', 'user']


@admin.register(Photo)
class PhotoAdmin(admin.ModelAdmin):
    list_display = ['id', 'image', 'activity',]


@admin.register(Task)
class TaskAdmin(admin.ModelAdmin):
    list_display = ['id', 'goals', 'title', 'description', 'user']


@admin.register(UserMode)
class UserModeAdmin(admin.ModelAdmin):
    list_display = ['id', 'mood', 'music', 'reason', 'user']


@admin.register(Learning)
class LearningAdmin(admin.ModelAdmin):
    list_display = ['id', 'title', 'description', 'image', 'user']


@admin.register(Food)
class FoodAdmin(admin.ModelAdmin):
    list_display = ['id', 'title', 'user', 'description', 'image']


@admin.register(Travel)
class TravelAdmin(admin.ModelAdmin):
    list_display = ['id', 'user', 'title', 'description', 'image']


@admin.register(MyAlbum)
class MyAlbumAdmin(admin.ModelAdmin):
    list_display = ['id', 'user', 'album_type', 'image']
