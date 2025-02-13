<script setup lang="ts">
import { BookUser, CreditCard, Truck } from "lucide-vue-next";

import {
  Stepper,
  StepperIndicator,
  StepperItem,
  StepperSeparator,
  StepperTitle,
  StepperTrigger,
} from "@/components/ui/stepper";

import ContactForm from "~/components/order/contact-form.vue";
import PaymentForm from "~/components/order/payment-form.vue";
import type { ContainerData } from "~/types/container";
import type { ContactData, OrderData, OrderDataForApi } from "~/types/order";

const { t } = useI18n();
const orderFormData = ref(null);
const currentStep = ref(1);
const runtimeConfig = useRuntimeConfig();
let containerData: ContainerData[] = [];
let selectedContainer: ContainerData = null;
const formData = ref(null);
const orderData = ref({});
let currentAddress = null;
const loadingData = ref(false);
let combinedData: Partial<OrderData, ContactData> = null;
let orderDataForApi: OrderDataForApi = null;

function handleContainerSubmit(data) {
  currentStep.value = 2;
}

async function handleContactSubmit(data) {
  combinedData = { ...orderData.value, ...data, ...selectedContainer };
  orderDataForApi = createOrderDataForApi(combinedData);
  console.log(orderDataForApi);
  await sendOrderDataToApi();
  currentStep.value = 3;
}
async function sendOrderDataToApi() {
  try {
    const response = await $fetch("/api/order/create_order", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: orderDataForApi,
    });
    console.log("response for saving orderData from api: ", response);
  } catch (error) {
    console.error("Error sending order data to API:", error);
  }
}

function createOrderDataForApi(combinedData) {
  console.log("combinedData", combinedData);
  return {
    start_date: combinedData.start_date,
    start_time: combinedData.start_time,
    end_date: combinedData.end_date,
    end_time: combinedData.end_time,
    included_days: combinedData.included_days,
    price_extra_day: combinedData.price_extra_day,
    total_price_extra_day: combinedData.total_price_extra_day,
    total_days: combinedData.total_days,
    address: combinedData.address,
    wastage: combinedData.wastage,
    container: combinedData.id,
    description: combinedData.description,
    extra_km: combinedData.extra_mileage?.toFixed(2),
    price_extra_km: Number(combinedData.price_extra_mileage),
    total_price_extra_km: combinedData.total_price_extra_mileage?.toFixed(2),
    included_weight: combinedData.included_weight,
    extra_weight: combinedData.extra_weight,
    total_weight: combinedData.total_weight,
    price_extra_weight: Number(combinedData.price_extra_weight),
    total_price_extra_weight: combinedData.total_price_extra_weight,
    volume: combinedData.volume,
    price_no_vat: combinedData.price_no_vat?.toFixed(2),
    vat: combinedData.vat?.toFixed(2),
    total_price: combinedData.price_total?.toFixed(2),
    customer: {
      name: combinedData.name,
      surname: combinedData.surname,
      email: combinedData.email,
      phone: combinedData.phone,
    },
    extra_weight: combinedData.extra_weight,
  };
}
async function handleFormData(data) {
  loadingData.value = true;
  formData.value = data[0];
  containerData = data.length > 1 ? data[1].value : [];
  selectedContainer = containerData.find(
    (container) => container?.id === Number(formData.value?.container),
  );
  if (selectedContainer && currentAddress) {
    orderData.value = await getOrderData();
  } else {
    orderData.value = {};
  }
  loadingData.value = false;
}
const { calculateDistance, distance, isInTallinn } = useDistanceCalculator();

async function handleAddressData(address) {
  loadingData.value = true;
  if (address) {
    await calculateDistance(address);
    currentAddress = address;
    if (selectedContainer) {
      orderData.value = await getOrderData();
    } else {
      orderData.value = {};
    }
    console.log("distance.value", distance.value);
    console.log("is in Tallinn:", isInTallinn.value);
  } else {
    currentAddress = null;
  }
  loadingData.value = false;
}

async function getOrderData() {
  // Fetch order data
  try {
    await new Promise((resolve) => setTimeout(resolve, 500));
    console.log("formData.value", formData.value);
    const orderData = await $fetch(
      `${runtimeConfig.public.api}/order/calculate_order/`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: {
          formData: formData.value,
          selectedContainer: selectedContainer,
          isInTallinn: isInTallinn.value,
          extraKm: distance.value,
        },
      },
    );
    console.log("orderData from getOrderData", orderData);
    return orderData;
  } catch (error) {
    console.error("Error fetching order data:", error);
  }
}

const steps = [
  {
    step: 1,
    title: t("order.request"),
    description: "Add your address here",
    icon: BookUser,
  },
  {
    step: 2,
    title: t("order.contact"),
    description: "Set your preferred shipping method",
    icon: Truck,
  },
  {
    step: 3,
    title: t("order.payment"),
    description: "Confirm your order",
    icon: CreditCard,
  },
];
</script>

<template>
  <div class="max-w-full md:max-w-[1400px] mx-auto md:px-12 mt-12">
    <div>
      <p class="text-center text-2xl my-8">
        {{ t("order.form.makeYourOrder") }}
      </p>
    </div>
    <div class="flex flex-col lg:flex-row gap-12 justify-center">
      <div
        class="calculator w-full lg:w-2/3 relative"
        :class="{ 'w-full justify-center': currentStep === 3 }"
      >
        <Stepper v-model="currentStep" class="w-[380px] mx-auto md:w-full">
          <StepperItem
            v-for="item in steps"
            :key="item.step"
            :disabled="true"
            class="basis-1/3 flex justify-self-center gap-12 sm:gap-16 md:ml-20 mx-auto ml-6 sm:ml-12"
            :step="item.step"
          >
            <StepperTrigger class="m-0 p-0">
              <StepperIndicator>
                <component :is="item.icon" class="w-4 h-4" />
              </StepperIndicator>
              <div class="flex flex-col">
                <StepperTitle class="text-xs">
                  {{ item.title }}
                </StepperTitle>
              </div>
            </StepperTrigger>
            <StepperSeparator
              v-if="item.step !== steps[steps.length - 1].step"
              class="w-full h-px hidden md:block"
            />
          </StepperItem>
        </Stepper>

        <Transition
          mode="out-in"
          enter-active-class="transition-all duration-300 ease-in-out"
          enter-from-class="opacity-0 translate-x-6"
          enter-to-class="opacity-100 translate-x-0"
          leave-active-class="transition-all duration-300 ease-in-out"
          leave-from-class="opacity-100 translate-x-0"
          leave-to-class="opacity-0 -translate-x-6"
        >
          <!-- Conditional rendering based on current step -->
          <div v-if="currentStep === 1">
            <order-form
              @container-order="handleContainerSubmit"
              @form-data="handleFormData"
              @address-data="handleAddressData"
            />
          </div>
          <div v-else-if="currentStep === 2">
            <contact-form @contact-order="handleContactSubmit" />
          </div>
          <div
            v-else-if="currentStep === 3"
            class="flex mx-auto justify-center mt-10"
          >
            <order-summary
              :t="t"
              :order-data="orderData"
              :loading-data="loadingData"
            />

            <!--<payment-form-->
            <!--  :order-data="orderFormData"-->
            <!--  @submit-payment="-->
            <!--    (data) => {-->
            <!--      // Handle payment form submission-->
            <!--    }-->
            <!--  "-->
            <!--/>-->
          </div>
        </Transition>
      </div>
      <div v-if="currentStep !== 3">
        <Separator class="" orientation="vertical" />
      </div>
      <div
        v-if="currentStep !== 3"
        class="price w-full lg:w-1/3 flex justify-center"
      >
        <order-summary
          :t="t"
          :order-data="orderData"
          :loading-data="loadingData"
        />
      </div>
    </div>
  </div>
</template>
