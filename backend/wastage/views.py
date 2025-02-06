from rest_framework import permissions, viewsets

from wastage.models import Wastage
from wastage.serializers import WastageSerializer


# Create your views here.
class WastageViewSet(viewsets.ModelViewSet):
    queryset = Wastage.objects.all()
    serializer_class = WastageSerializer
    permission_classes = [permissions.IsAuthenticated]