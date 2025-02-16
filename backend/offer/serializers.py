from rest_framework import serializers

from offer.models import Offer


class OfferSerializer(serializers.ModelSerializer):
    available_container_sizes = serializers.SerializerMethodField()
    wastage_name_ru = serializers.SerializerMethodField()
    wastage_name_ee = serializers.SerializerMethodField()
    wastage_name = serializers.SerializerMethodField()
    included_days = serializers.SerializerMethodField()
    extra_price_day = serializers.SerializerMethodField()
    included_weight = serializers.SerializerMethodField()
    extra_price_weight = serializers.SerializerMethodField()
    price = serializers.SerializerMethodField()

    class Meta:
        model = Offer
        fields = [
            "wastage",
            "container",
            "available_container_sizes",
            "wastage_name_ru",
            "wastage_name_ee",
            "wastage_name",
            "included_days",
            "extra_price_day",
            "included_weight",
            "extra_price_weight",
            "price",
        ]

    def get_available_container_sizes(self, obj):
        return obj.wastage.container_set.all().values_list("max_volume", flat=True)

    def get_wastage_name_ru(self, obj):
        return obj.wastage.name_ru

    def get_wastage_name_ee(self, obj):
        return obj.wastage.name_ee

    def get_wastage_name(self, obj):
        return obj.wastage.name

    def get_included_days(self, obj):
        return obj.container.included_days

    def get_extra_price_day(self, obj):
        return obj.container.price_extra_day

    def get_included_weight(self, obj):
        return obj.container.included_weight

    def get_extra_price_weight(self, obj):
        return obj.container.price_extra_weight

    def get_price(self, obj):
        return obj.container.price
