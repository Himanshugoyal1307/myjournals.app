from django.urls import path
from api import views


urlpatterns = [
    path('Activity/<int:pk>/', views.ActivityApi.as_view()),
    path('Activity/', views.ActivityApi.as_view()),
    path('Task/<int:pk>/', views.TaskApi.as_view()),
    path('Task/', views.TaskApi.as_view()),
    path('UserMode/<int:pk>/', views.UserModeApi.as_view()),
    path('UserMode/', views.UserModeApi.as_view()),
    path('Food/', views.FoodApi.as_view()),
    path('Food/<int:pk>/', views.FoodApi.as_view()),
    path('Travel/<int:pk>/', views.TravelApi.as_view()),
    path('Travel/', views.TravelApi.as_view()),
    path('Learning/', views.LearningApi.as_view()),
    path('Learning/<int:pk>/', views.LearningApi.as_view()),


    path('MyAlbum/', views.MyAlbumApi.as_view()),
    path('MyAlbum/<int:pk>/', views.MyAlbumApi.as_view()),
]
