from django.shortcuts import render
from rest_framework import viewsets

from offer.models import Offer
from offer.serializers import OfferSerializer


# Create your views here.
class OfferViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Offer.objects.all()
    serializer_class = OfferSerializer
