<template>
  <div class="md:w-full">
    <Card
      class="bg-zinc-50 dark:bg-zinc-900 shadow-xl md:w-full"
      :class="cn('w-[380px]', $attrs.class ?? '')"
    >
      <CardHeader class="w-full">
        <CardTitle class="text-center text-red-900 dark:text-red-700"
          >{{ $t("order.summary.title") }}
        </CardTitle>
      </CardHeader>
      <CardContent class="grid gap-4 pb-0">
        <div
          class="flex items-center space-x-4 rounded-md border p-4 border-red-900 mb-4"
        >
          <div v-if="orderData.name" class="flex-1 space-y-1">
            <p class="text-sm font-bold">
              {{ $t("order.summary.container") }}
            </p>
            <Separator />
            <p class="text-sm font-medium text-neutral-700">
              {{
                $i18n.locale === "ru"
                  ? orderData?.name_ru
                  : $i18n.locale === "et"
                    ? orderData?.name_ee
                    : orderData?.name
              }}
            </p>
            <p class="text-sm font-medium text-neutral-500">
              {{
                $i18n.locale === "ru"
                  ? orderData?.description_ru
                  : $i18n.locale === "et"
                    ? orderData?.description_ee
                    : orderData?.description
              }}
            </p>
            <p class="text-right font-bold">
              {{ orderData?.price?.toFixed(2) }} €
            </p>
          </div>
          <div v-else>
            <p class="text-sm font-bold">
              {{ $t("order.form.selectNecessaryInfo") }}
            </p>
          </div>
        </div>
        <!-- Additional -->
        <div v-if="orderData.name">
          <div class="p-4 mb-4 items-start pb-4 border rounded-md">
            <!-- Kilometers -->
            <div class="mb-4">
              <p class="text-sm font-bold">{{ $t("order.form.address") }}</p>
              <p class="text-sm text-neutral-500">
                {{ orderData?.address }}
              </p>
            </div>
            <div
              v-if="orderData.total_price_extra_mileage > 1"
              class="flex justify-between space-y-1"
            >
              <div>
                <p class="text-sm font-bold">
                  {{ $t("order.summary.mileage") }}
                </p>
                <p class="text-sm text-neutral-500">
                  + {{ orderData?.extra_mileage.toFixed(2) }} km
                </p>
                <p class="text-xs text-neutral-400">
                  {{ $t("order.summary.notIncludedMileage") }}
                </p>
              </div>
              <div>
                <p class="text-right font-bold min-w-max">
                  + {{ orderData?.total_price_extra_mileage?.toFixed(2) }} €
                </p>
              </div>
            </div>
            <div v-else class="space-y-1">
              <p class="text-sm font-bold">
                {{ $t("order.summary.mileage") }}
              </p>
              <p class="text-sm text-muted-foreground">
                {{ $t("order.summary.includedMileage") }}
              </p>
            </div>

            <!-- Additional Weight -->
            <div class="space-y-1 mt-4">
              <div v-if="orderData.extra_weight" class="flex justify-between">
                <div>
                  <p class="text-sm font-bold">
                    {{ $t("order.summary.additionalWeight") }}
                  </p>
                  <p class="text-sm text-muted-foreground">
                    + {{ orderData?.extra_weight }}t
                  </p>
                </div>
                <div class="">
                  <p class="text-right font-bold">
                    + {{ orderData?.total_price_extra_weight.toFixed(2) }} €
                  </p>
                </div>
              </div>
              <div v-else>
                <p class="text-sm font-bold">
                  {{ $t("order.summary.weight") }}
                </p>
                <p class="text-sm text-neutral-500">
                  {{ $t("order.summary.includedWeight") }}
                </p>
              </div>
            </div>
            <!-- Rental Period -->
            <div
              v-if="
                (orderData.start_date && orderData.start_time) ||
                (orderData.end_date && orderData.end_time)
              "
              class="mt-4 flex justify-between"
            >
              <div>
                <p class="text-sm font-bold">
                  {{ $t("order.summary.rentalPeriod") }}
                </p>
                <p
                  v-if="orderData?.total_price_extra_day < 1"
                  class="text-sm text-muted-foreground"
                >
                  {{ $t("order.summary.includedDays") }}
                </p>
                <p
                  v-if="orderData.start_date && orderData.start_time"
                  class="text-sm text-muted-foreground"
                >
                  <span>{{ $t("order.summary.dateFrom") }}: </span
                  ><span class="font-bold">
                    {{ formatCustomDate(orderData?.start_date) }}
                  </span>
                  -
                  <span>{{ orderData.start_time }}</span>
                </p>
                <p
                  v-if="orderData.end_date && orderData.end_time"
                  class="text-sm text-muted-foreground"
                >
                  {{ $t("order.summary.dateTo") }}:
                  <span class="font-bold">
                    {{ formatCustomDate(orderData?.end_date) }}
                  </span>
                  -
                  <span>{{ orderData.end_time }}</span>
                </p>
              </div>
              <div class="">
                <p
                  v-if="orderData?.total_price_extra_day > 1"
                  class="text-right font-bold"
                >
                  + {{ orderData?.total_price_extra_day.toFixed(2) }} €
                </p>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
      <Separator class="bg-gray-200" />
      <CardFooter v-if="orderData.name" class="pb-0">
        <div class="p-4 mb-4 items-start pb-4 w-full">
          <!-- Total price no taxes -->
          <div class="flex justify-between space-y-1">
            <div class="self-end">
              <p class="text-sm font-bold">
                {{ $t("order.summary.rentalPrice") }}
              </p>
            </div>
            <div>
              <p class="text-right font-bold">
                {{ orderData?.price_no_vat.toFixed(2) }} €
              </p>
            </div>
          </div>
          <!-- Taxes -->
          <div class="flex justify-between mt-1">
            <div class="self-end">
              <p class="text-sm font-bold">
                {{ $t("order.summary.taxes") }}
              </p>
            </div>
            <div class="">
              <p class="text-right font-bold">
                {{ orderData?.vat.toFixed(2) }} €
              </p>
            </div>
          </div>
          <!-- Total price with taxes -->
          <div class="flex justify-between mt-1">
            <div class="self-end">
              <p class="text-md font-bold text-red-900 dark:text-red-700">
                {{ $t("order.summary.finalPrice") }}
              </p>
            </div>
            <div class="">
              <p
                class="text-right font-bold text-red-900 dark:text-red-700 text-xl"
              >
                {{ orderData?.price_total.toFixed(2) }} €
              </p>
            </div>
          </div>
          <Button
            class="bg-primary w-full mt-6 text-white px-20 py-2 rounded-lg hover:bg-red-800 disabled:opacity-80 disabled:hover:bg-primary"
            disabled="true"
          >
            <div v-if="loadingData">
              <ReloadIcon class="w-4 h-4 mr-2 animate-spin" />
            </div>
            <div v-else>
              {{ $t("indexMainButton") }}
            </div>
          </Button>
        </div>
      </CardFooter>
    </Card>
  </div>
</template>
<script setup lang="ts">
import { cn } from "@/lib/utils";
import type { OrderData } from "~/types/order";
import { formatCustomDate } from "~/utils/formatOrderDate";
import { ReloadIcon } from "@radix-icons/vue";
defineProps<{
  orderData: OrderData;
  loadingData: boolean;
}>();
</script>
<style></style>
