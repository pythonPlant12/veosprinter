from django.db import models


# Create your models here.
class Wastage(models.Model):
    name = models.CharField(max_length=255)
    name_ru = models.CharField(max_length=255)
    name_ee = models.CharField(max_length=255)
    description = models.TextField()

    def __str__(self):
        return self.name_ru

    class Meta:
        verbose_name = "Отходы"
        verbose_name_plural = "Отходы"
