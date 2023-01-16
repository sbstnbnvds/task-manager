from . import views
from django.urls import path

urlpatterns = [
    path('', views.PrimeraView, name='tasks')    
]