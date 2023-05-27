from rest_framework.response import Response
from .models import Task
from .serializers import TaskSerializer


def getTasks(request):
  tasks = Task.objects.all().order_by('created')
  serializer = TaskSerializer(tasks, many=True)
  return Response(serializer.data)

def getSingleTask(request, pk):
  task = Task.objects.get(id=pk)
  serializer = TaskSerializer(task, many=False)
  return Response(serializer.data)

def deleteTask(request, pk):
  task = Task.objects.get(id=pk)
  task.delete()
  return Response('Task ' + pk + ' deleted successfully')

def postTask(request):
  task = request.data
  task = Note.objects.create(
      body=data['body']
  )
  serializer = TaskSerializer(task, many=False)
  return Response(serializer.data)

def updateTask(request, pk):
  data = request.data
  task = Task.objects.get(id=pk)
  serializer = TaskSerializer(instance=task, data=data)
  
  if serializer.is_valid():
    serializer.save()
  
  return serializer.data


