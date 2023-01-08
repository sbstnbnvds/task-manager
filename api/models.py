from django.db import models

# Create your models here.

class Task(models.Model):
    body = models.TextField(null=True, blank=False)
    created = models.DateTimeField(auto_now_add=True)
    due_date = models.DateField(null=True, blank=True)

    def __str__(self):
        return self.body[0:20]