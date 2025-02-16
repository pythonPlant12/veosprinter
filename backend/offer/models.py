from django.db import models


# Create your models here.
class Offer(models.Model):
    wastage = models.ForeignKey("wastage.Wastage", on_delete=models.CASCADE)
    container = models.ForeignKey("container.Container", on_delete=models.CASCADE)

    class Meta:
        verbose_name = "Горячие предложения"
        verbose_name_plural = "Горячие предложения"
