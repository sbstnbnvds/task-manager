from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import Task
from .serializers import TaskSerializer

# Create your views here.

@api_view(['GET'])
def MainView(request):
    tasks = Task.objects.all()
    serializer = TaskSerializer(tasks, many=True)
    json_dict = {'uno': 'elnumerouno', 'dos': 'elnumerodos'}
    return Response(serializer.data)