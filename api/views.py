from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .utils import getTasks, getSingleTask, deleteTask, postTask, updateTask

# Create your views here.

@api_view(['GET', 'POST'])
def MainView(request):
    if request.method == 'GET':
        return getTasks(request)
    if request.method == 'POST':
        return postTask(request)


@api_view(['GET', 'PUT', 'DELETE'])
def TaskView(request, pk):
    if request.method == 'GET':
        return getSingleTask(request, pk)
    if request.method == 'DELETE':
        return deleteTask(request, pk)
    if request.method == 'PUT':
        return updateTask(request, pk)