from rest_framework import serializers

from wastage.models import Wastage


class WastageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Wastage
        fields = '__all__'