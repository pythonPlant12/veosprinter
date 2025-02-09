from django.db import models


# Create your models here.
class Order(models.Model):
    created_at = models.DateTimeField(auto_now_add=True)
    start_date = models.DateField()
    start_time = models.TimeField()
    end_date = models.DateField()
    end_time = models.TimeField()
    included_days = models.IntegerField()
    price_extra_day = models.DecimalField(max_digits=10, decimal_places=2)
    total_price_extra_day = models.DecimalField(max_digits=10, decimal_places=2)
    total_days = models.IntegerField()
    address = models.CharField(max_length=500)
    wastage = models.ForeignKey("wastage.Wastage", on_delete=models.CASCADE)
    container = models.ForeignKey("container.Container", on_delete=models.CASCADE)
    description = models.CharField(max_length=3000, null=True)
    extra_km = models.DecimalField(max_digits=10, decimal_places=2)
    price_extra_km = models.DecimalField(max_digits=10, decimal_places=2)
    total_price_extra_km = models.DecimalField(max_digits=10, decimal_places=2)
    included_weight = models.DecimalField(max_digits=10, decimal_places=2)
    extra_weight = models.DecimalField(max_digits=10, decimal_places=2)
    total_weight = models.DecimalField(max_digits=10, decimal_places=2)
    price_extra_weight = models.DecimalField(max_digits=10, decimal_places=2)
    total_price_extra_weight = models.DecimalField(max_digits=10, decimal_places=2)
    volume = models.DecimalField(max_digits=10, decimal_places=2)
    price_no_vat = models.DecimalField(max_digits=10, decimal_places=2)
    vat = models.DecimalField(max_digits=10, decimal_places=2)
    total_price = models.DecimalField(max_digits=10, decimal_places=2)
    customer = models.ForeignKey(
        "customer.Customer", on_delete=models.DO_NOTHING
    )  # TODO: Cambiar cuando haya modelo

    def __str__(self):
        return str(self.customer) + " " + str(self.start_date)

    class Meta:
        verbose_name = "Заказ"
        verbose_name_plural = "Заказы"
