from decimal import Decimal

from rest_framework import viewsets, status
from rest_framework.decorators import action
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.response import Response

from container.models import Container
from customer.models import Customer
from customer.serializers import CustomerSerializer
from order.models import Order
from order.serializers import OrderSerializer
from utils.convert_api_date import convert_to_datetime, convert_to_date


# Create your views here.
class OrderViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Order.objects.all()
    serializer_class = OrderSerializer
    permission_classes = [IsAuthenticated]

    @action(detail=False, methods=["POST"], permission_classes=[AllowAny])
    def calculate_order(self, request):
        """
        Calculates the total price of an order
        """
        try:
            form_data = request.data.get("formData")
            selected_container = Container.objects.get(id=form_data["container"])
            if selected_container:
                is_in_tallinn = request.data.get("isInTallinn")
                extra_km = request.data.get("extraKm")
                order_data = self.get_order_data(
                    form_data, selected_container, is_in_tallinn, extra_km
                )
                return Response(order_data, status=status.HTTP_200_OK)
            else:
                return Response("Bad request", status=status.HTTP_400_BAD_REQUEST)
        except Exception as e:
            return Response(
                {"error": "{}".format(e.args[0])}, status=status.HTTP_400_BAD_REQUEST
            )

    @action(detail=False, methods=["POST"], permission_classes=[IsAuthenticated])
    def create_order(self, request):
        order_data = self.request.data
        customer_data = order_data.get("customer")
        order_data["start_date"] = convert_to_date(order_data.get("start_date"))
        order_data["end_date"] = convert_to_date(order_data.get("end_date"))

        client = Customer.objects.filter(email=customer_data.get("email")).first()
        if not client:
            customer_serializer = CustomerSerializer(data=customer_data)
            if customer_serializer.is_valid():
                client = customer_serializer.save()
            else:
                return Response(
                    customer_serializer.errors, status=status.HTTP_400_BAD_REQUEST
                )

        order_data["customer"] = client.pk
        order_serializer = OrderSerializer(data=order_data)
        if order_serializer.is_valid():
            order_serializer.save()
        else:
            return Response(order_serializer.errors, status=status.HTTP_400_BAD_REQUEST)

        return Response("Order created", status=status.HTTP_200_OK)

    def get_order_data(self, order_data, selected_container, is_in_tallinn, extra_km):
        """
        Calculates the price of container based on weight, distance and volume
        """
        # Calculate total price of extra weight
        extra_weight = self.calculate_extra_weight(
            order_data.get("weight"), selected_container.included_weight
        )
        total_price_extra_weight = self.calculate_total_price_extra_weight(
            extra_weight, selected_container.price_extra_weight
        )

        # Calculate distance and price of extra distance
        if is_in_tallinn:
            total_price_extra_km = 0
        else:
            total_price_extra_km = Decimal(extra_km) * Decimal(
                selected_container.price_extra_mileage
            )

        # Calculate extra days and price
        total_price_extra_days = self.calculate_extra_days(
            order_data, selected_container
        )

        # Calculate total price
        total_price = self.calculate_total_price(
            selected_container.price,
            total_price_extra_weight,
            total_price_extra_km,
            total_price_extra_days,
        )

        price_no_vat = self.calculate_price_no_vat(total_price)
        order_data = {
            "name": selected_container.name,
            "name_ru": selected_container.name_ru,
            "name_ee": selected_container.name_ee,
            "description": selected_container.description,
            "description_ee": selected_container.description_ee,
            "description_ru": selected_container.description_ru,
            "price": selected_container.price,
            "included_weight": selected_container.included_weight,
            "extra_weight": extra_weight,
            "total_weight": order_data.get("weight"),
            "price_extra_weight": selected_container.price_extra_weight,
            "total_price_extra_weight": total_price_extra_weight,
            "extra_mileage": extra_km,
            "price_extra_mileage": selected_container.price_extra_mileage,
            "total_price_extra_mileage": total_price_extra_km,
            "included_days": selected_container.included_days,
            "price_extra_day": selected_container.price_extra_day,
            "total_price_extra_day": total_price_extra_days,
            "total_days": 4,
            "start_date": order_data.get("dateFrom"),
            "end_date": order_data.get("dateTo"),
            "start_time": order_data.get("timeFrom"),
            "end_time": order_data.get("timeTo"),
            "address": order_data.get("address"),
            "price_no_vat": price_no_vat,
            "vat": price_no_vat * Decimal("0.21"),
            "price_total": price_no_vat * Decimal("1.21"),
        }
        return order_data

    def calculate_extra_weight(self, weight, included_weight):
        """
        Calculates the extra weight of the container
        """
        return weight - included_weight if weight > included_weight else 0

    def calculate_total_price_extra_weight(self, extra_weight, price_extra_weight):
        """
        Calculates the total price of the extra weight
        """
        return extra_weight * price_extra_weight

    def calculate_total_price(
        self,
        container_price,
        total_price_extra_weight,
        total_price_extra_km,
        total_price_extra_days,
    ):
        """
        Calculates the total price of the container
        """
        return (
            container_price
            + total_price_extra_weight
            + total_price_extra_km
            + total_price_extra_days
        )

    def calculate_price_no_vat(self, total_price):
        """
        Calculates the price of the container without VAT
        """
        return total_price / Decimal("1.21")

    def calculate_extra_days(self, order_data, selected_container):
        """
        Calculates the extra days and price
        """
        start_date_api = order_data.get("dateFrom")
        end_date_api = order_data.get("dateTo")
        if start_date_api and end_date_api:
            start_date = convert_to_datetime(start_date_api)
            end_date = convert_to_datetime(end_date_api)
            total_days = (end_date - start_date).days
            extra_days = total_days - selected_container.included_days
            return (
                extra_days * selected_container.price_extra_day if extra_days > 0 else 0
            )
        else:
            return 0
