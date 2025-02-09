from django.db import models


class Container(models.Model):
    name = models.CharField(max_length=255)
    name_ru = models.CharField(max_length=255)
    name_ee = models.CharField(max_length=255)
    description = models.TextField()
    description_ru = models.TextField()
    description_ee = models.TextField()
    volume = models.DecimalField(max_digits=20, decimal_places=2)
    max_volume = models.DecimalField(max_digits=20, decimal_places=2)
    price_extra_volume = models.DecimalField(max_digits=10, decimal_places=2)
    price_extra_mileage = models.DecimalField(max_digits=10, decimal_places=2)
    included_weight = models.DecimalField(max_digits=20, decimal_places=2)
    max_weight = models.DecimalField(max_digits=20, decimal_places=2)
    included_days = models.IntegerField()
    price_extra_day = models.DecimalField(max_digits=10, decimal_places=2)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    price_extra_weight = models.DecimalField(max_digits=10, decimal_places=2)
    wastage = models.ForeignKey("wastage.Wastage", on_delete=models.CASCADE)

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = "Контейнер"
        verbose_name_plural = "Контейнера"

    @property
    def max_extra_weight(self):
        return self.max_weight - self.included_weight
