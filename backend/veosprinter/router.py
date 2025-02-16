from rest_framework.routers import DefaultRouter

from container.views import ContainerViewSet
from offer.views import OfferViewSet
from order.views import OrderViewSet
from wastage.views import WastageViewSet

router = DefaultRouter()
router.register("wastage", WastageViewSet, basename="wastage")
router.register("container", ContainerViewSet, basename="container")
router.register("order", OrderViewSet, basename="order")
router.register("special-offers", OfferViewSet, basename="special-offers")
