from rest_framework import viewsets

from wastage.models import Wastage
from wastage.serializers import WastageSerializer


# Create your views here.
class WastageViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Wastage.objects.all()
    serializer_class = WastageSerializer
