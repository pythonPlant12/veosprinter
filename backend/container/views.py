from rest_framework import viewsets

from container.models import Container
from container.serializers import ContainerSerializer


class ContainerViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Container.objects.all()
    serializer_class = ContainerSerializer
    filterset_fields = ["wastage"]
