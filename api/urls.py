from . import views
from django.urls import path

urlpatterns = [
    path('', views.MainView, name='tasks'),
    path('<str:pk>/', views.TaskView, name="task"),
]