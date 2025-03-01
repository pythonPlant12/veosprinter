# Generated by Django 4.2 on 2025-02-08 10:01

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("container", "0005_container_max_volume_container_price_extra_volume"),
    ]

    operations = [
        migrations.AddField(
            model_name="container",
            name="included_days",
            field=models.IntegerField(default=3),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name="container",
            name="price_extra_day",
            field=models.DecimalField(decimal_places=2, default=5.0, max_digits=10),
            preserve_default=False,
        ),
    ]
