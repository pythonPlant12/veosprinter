from django.db import models

# Create your models here.
class Wastage(models.Model):
    name = models.CharField(max_length=250)
    description = models.TextField()

    class Meta:
        verbose_name = 'Wastage'
        verbose_name_plural = 'Wastages'