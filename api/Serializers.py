from rest_framework import serializers
from .models import Activity, Photo, Task, UserMode, Learning, Food, Travel, MyAlbum


class ActivitySerializer(serializers.ModelSerializer):
    image = serializers.SerializerMethodField()

    class Meta:
        model = Activity
        fields = ['id', 'title', 'description', 'image', 'user']

    def get_image(self, obj):
        return self.context['request'].build_absolute_uri(obj.image.url)


class ActivityWriteSerializer(serializers.ModelSerializer):
   # image = serializers.SerializerMethodField()

    class Meta:
        model = Activity
        fields = ['id', 'title', 'description', 'image', 'user']

    # def get_image(self, obj):
     #   return self.context['request'].build_absolute_uri(obj.image.url)


class PhotoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Photo
        fields = ['id', 'image', 'activity',]


class TaskSerializer(serializers.ModelSerializer):
    class Meta:
        model = Task
        fields = ['id', 'goals', 'title', 'description', 'user']


class UserModeSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserMode
        fields = ['id', 'mood', 'music', 'reason', 'user']


class LearningSerializer(serializers.ModelSerializer):
    image = serializers.SerializerMethodField()

    class Meta:
        model = Learning
        fields = ['id', 'title', 'description', 'image', 'user']

    def get_image(self, obj):
        return self.context['request'].build_absolute_uri(obj.image.url)


class LearningWriteSerializer(serializers.ModelSerializer):
   # image = serializers.SerializerMethodField()

    class Meta:
        model = Learning
        fields = ['id', 'title', 'description', 'image', 'user']

    # def get_image(self, obj):
     #   return self.context['request'].build_absolute_uri(obj.image.url)


class FoodSerializer(serializers.ModelSerializer):
    image = serializers.SerializerMethodField()

    class Meta:
        model = Food
        fields = ['id', 'title', 'user', 'description', 'image']

    def get_image(self, obj):
        return self.context['request'].build_absolute_uri(obj.image.url)


class FoodWriteSerializer(serializers.ModelSerializer):
   # image = serializers.SerializerMethodField()

    class Meta:
        model = Food
        fields = ['id', 'title', 'user', 'description', 'image']

    # def get_image(self, obj):
     #   return self.context['request'].build_absolute_uri(obj.image.url)


class TravelSerializer(serializers.ModelSerializer):
    image = serializers.SerializerMethodField()

    class Meta:
        model = Travel
        fields = ['id', 'user', 'title', 'description', 'image']

    def get_image(self, obj):
        return self.context['request'].build_absolute_uri(obj.image.url)


class TravelWriteSerializer(serializers.ModelSerializer):
   # image = serializers.SerializerMethodField()

    class Meta:
        model = Travel
        fields = ['id', 'user', 'title', 'description', 'image']

    # def get_image(self, obj):
       # return self.context['request'].build_absolute_uri(obj.image.url)


class MyAlbumWriteSerializer(serializers.ModelSerializer):
    # image = serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = MyAlbum
        fields = ['id', 'user', 'album_type', 'image']

    # def get_image(self, obj):
    #     return self.context['request'].build_absolute_uri(obj.image.url)


class MyAlbumSerializer(serializers.ModelSerializer):
    image = serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = MyAlbum
        fields = ['id', 'user', 'album_type', 'image']

    def get_image(self, obj):
        return self.context['request'].build_absolute_uri(obj.image.url)
