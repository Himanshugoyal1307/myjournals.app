from django.shortcuts import render
from rest_framework.views import APIView
from .Serializers import ActivitySerializer, PhotoSerializer, TaskSerializer, LearningWriteSerializer, ActivityWriteSerializer, UserModeSerializer, FoodWriteSerializer, LearningSerializer, FoodSerializer, TravelSerializer, TravelWriteSerializer, MyAlbumSerializer, MyAlbumWriteSerializer
from .models import Activity, Photo, Task, UserMode, Learning, Food, Travel, MyAlbum
from rest_framework.generics import ListAPIView, CreateAPIView, DestroyAPIView, RetrieveAPIView
from rest_framework.response import Response
from rest_framework import status
from django.contrib.auth.models import User
from rest_framework.permissions import IsAuthenticated


class ActivityApi(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request, pk=None, format=None):
        id = pk
        if id is not None:
            act = Activity.objects.get(id=id)
            serializer = ActivitySerializer(act)
            return Response(serializer.data)

        act = Activity.objects.filter(user=request.user)
        serializer = ActivitySerializer(
            act, context={'request': request}, many=True)
        return Response(serializer.data)

    def post(self, request, format=None):

        serializer = ActivityWriteSerializer(data=request.data)

        if serializer.is_valid():
            serializer.save(user=request.user)
            return Response({'msg': 'data created'}, status=status.HTTP_201_CREATED)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def put(self, request, pk, format=None):
        id = pk
        act = Activity.objects.get(pk=id)
        serializer = ActivityWriteSerializer(act, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({'msg': 'data updated'})
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def patch(self, request, pk, format=None):
        id = pk
        act = Activity.objects.get(pk=id)
        serializer = ActivityWriteSerializer(
            act, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response({'msg': 'partial data updated'})
        return Response(serializer.errors)

    def delete(self, request, pk, format=None):
        id = pk
        act = Activity.objects.get(pk=id)
        act.delete()
        return Response({'msg': 'data deleted'})


class TaskApi(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request, pk=None, format=None):
        id = pk
        if id is not None:
            act = Task.objects.get(id=id)
            serializer = TaskSerializer(act)
            return Response(serializer.data)

        act = Task.objects.filter(user=request.user)
        serializer = TaskSerializer(act, many=True)
        return Response(serializer.data)

    def post(self, request, format=None):
        serializer = TaskSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(user=request.user)
            return Response({'msg': 'data created'}, status=status.HTTP_201_CREATED)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def put(self, request, pk, format=None):
        id = pk
        act = Task.objects.get(pk=id)
        serializer = TaskSerializer(act, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({'msg': 'data updated'})
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def patch(self, request, pk, format=None):
        id = pk
        act = Task.objects.get(pk=id)
        serializer = TaskSerializer(act, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response({'msg': 'partial data updated'})
        return Response(serializer.errors)

    def delete(self, request, pk, format=None):
        id = pk
        act = Task.objects.get(pk=id)
        act.delete()
        return Response({'msg': 'data deleted'})


class UserModeApi(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request, pk=None, format=None):
        id = pk
        if id is not None:
            act = UserMode.objects.get(id=id)
            serializer = UserModeSerializer(act)
            return Response(serializer.data)

        act = UserMode.objects.filter(user=request.user)
        serializer = UserModeSerializer(act, many=True)
        return Response(serializer.data)

    def post(self, request, format=None):
        serializer = UserModeSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(user=request.user)
            return Response({'msg': 'data created'}, status=status.HTTP_201_CREATED)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def put(self, request, pk, format=None):
        id = pk
        act = UserMode.objects.get(pk=id)
        serializer = UserModeSerializer(act, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({'msg': 'data updated'})
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def patch(self, request, pk, format=None):
        id = pk
        act = UserMode.objects.get(pk=id)
        serializer = UserModeSerializer(act, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response({'msg': 'partial data updated'})
        return Response(serializer.errors)

    def delete(self, request, pk, format=None):
        id = pk
        act = UserMode.objects.get(pk=id)
        act.delete()
        return Response({'msg': 'data deleted'})


class LearningApi(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request, pk=None, format=None):
        id = pk
        if id is not None:
            act = Learning.objects.get(id=id)
            serializer = LearningSerializer(act)
            return Response(serializer.data)

        act = Learning.objects.filter(user=request.user)
        serializer = LearningSerializer(
            act, context={'request': request}, many=True)
        return Response(serializer.data)

    def post(self, request, format=None):
        serializer = LearningWriteSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(user=request.user)
            return Response({'msg': 'data created'}, status=status.HTTP_201_CREATED)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def put(self, request, pk, format=None):
        id = pk
        act = Learning.objects.get(pk=id)
        serializer = LearningWriteSerializer(act, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({'msg': 'data updated'})
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def patch(self, request, pk, format=None):
        id = pk
        act = Learning.objects.get(pk=id)
        serializer = LearningWriteSerializer(
            act, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response({'msg': 'partial data updated'})
        return Response(serializer.errors)

    def delete(self, request, pk, format=None):
        id = pk
        act = Learning.objects.get(pk=id)
        act.delete()
        return Response({'msg': 'data deleted'})


class FoodApi(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request, pk=None, format=None):
        id = pk
        if id is not None:
            act = Food.objects.get(id=id)
            serializer = FoodSerializer(act)
            return Response(serializer.data)

        act = Food.objects.filter(user=request.user)
        serializer = FoodSerializer(
            act,  context={'request': request}, many=True)
        return Response(serializer.data)

    def post(self, request, format=None):
        serializer = FoodWriteSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(user=request.user)
            return Response({'msg': 'data created'}, status=status.HTTP_201_CREATED)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def put(self, request, pk, format=None):
        id = pk
        act = Food.objects.get(pk=id)
        serializer = FoodWriteSerializer(act, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({'msg': 'data updated'})
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def patch(self, request, pk, format=None):
        id = pk
        act = Food.objects.get(pk=id)
        serializer = FoodWriteSerializer(act, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response({'msg': 'partial data updated'})
        return Response(serializer.errors)

    def delete(self, request, pk, format=None):
        id = pk
        act = Food.objects.get(pk=id)
        act.delete()
        return Response({'msg': 'data deleted'})


class TravelApi(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request, pk=None, format=None):
        id = pk
        if id is not None:
            act = Travel.objects.get(id=id)
            serializer = TravelSerializer(act)
            return Response(serializer.data)

        act = Travel.objects.filter(user=request.user)
        serializer = TravelSerializer(
            act, context={'request': request}, many=True)
        return Response(serializer.data)

    def post(self, request, format=None):
        serializer = TravelWriteSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(user=request.user)
            return Response({'msg': 'data created'}, status=status.HTTP_201_CREATED)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def put(self, request, pk, format=None):
        id = pk
        act = Travel.objects.get(pk=id)
        serializer = TravelWriteSerializer(act, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({'msg': 'data updated'})
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def patch(self, request, pk, format=None):
        id = pk
        act = Travel.objects.get(pk=id)
        serializer = TravelWriteSerializer(
            act, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response({'msg': 'partial data updated'})
        return Response(serializer.errors)

    def delete(self, request, pk, format=None):
        id = pk
        act = Travel.objects.get(pk=id)
        act.delete()
        return Response({'msg': 'data deleted'})


class MyAlbumApi(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request, pk=None, format=None):
        id = pk
        if id is not None:
            act = MyAlbum.objects.get(id=id)
            serializer = MyAlbumSerializer(act)
            return Response(serializer.data)

        act = MyAlbum.objects.filter(user=request.user)
        serializer = MyAlbumSerializer(
            act,  context={'request': request}, many=True)
        return Response(serializer.data)

    def post(self, request, format=None):
        serializer = MyAlbumWriteSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(user=request.user)
            return Response({'msg': 'data created'}, status=status.HTTP_201_CREATED)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def put(self, request, pk, format=None):
        id = pk
        act = MyAlbum.objects.get(pk=id)
        serializer = MyAlbumWriteSerializer(act, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({'msg': 'data updated'})
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def patch(self, request, pk, format=None):
        id = pk
        act = MyAlbum.objects.get(pk=id)
        serializer = MyAlbumWriteSerializer(
            act, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response({'msg': 'partial data updated'})
        return Response(serializer.errors)

    def delete(self, request, pk, format=None):
        id = pk
        act = MyAlbum.objects.get(pk=id)
        act.delete()
        return Response({'msg': 'data deleted'})
