<template>
  <div>
    <Card
      :class="cn('w-[380px]', $attrs.class ?? '')"
      class="mx-auto md:w-full mt-8 p-6 relative pb-24 shadow-lg min-h-[550px]"
    >
      <form @submit.prevent="onSubmit">
        <!-- Selection of Address -->
        <FormField v-slot="{ errorMessage, componentField }" name="address">
          <FormItem>
            <FormLabel class="ml-2"
              >{{ $t("order.form.estonianAddressLabel") }}
            </FormLabel>
            <FormControl>
              <Input
                id="address-input"
                :model-value="formData.address"
                v-bind="componentField"
                :placeholder="t('order.form.estonianAddressInput')"
                @update:model-value="(val) => setFieldValue('address', val)"
              />
            </FormControl>
            <FormMessage class="ml-2">{{ errorMessage }}</FormMessage>
          </FormItem>
        </FormField>

        <!-- Selection of type of wastage -->
        <FormField v-slot="{ errorMessage, componentField }" name="wastage">
          <FormItem class="mt-4">
            <FormLabel class="ml-2"
              >{{ $t("order.form.typeOfWasteLabel") }}
            </FormLabel>
            <Select
              :model-value="formData.wastage"
              v-bind="componentField"
              @update:model-value="(val) => setFieldValue('wastage', val)"
            >
              <FormControl>
                <SelectTrigger>
                  <SelectValue
                    :placeholder="t('order.form.typeOfWasteInput')"
                  />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                <SelectGroup>
                  <SelectItem
                    v-for="wastage in wastageData"
                    :key="wastage.id"
                    :value="wastage?.id?.toString()"
                  >
                    {{
                      $i18n.locale === "ru"
                        ? wastage.name_ru
                        : $i18n.locale === "et"
                          ? wastage.name_ee
                          : wastage.name
                    }}
                  </SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            <FormMessage class="ml-2">{{ errorMessage }}</FormMessage>
          </FormItem>
        </FormField>

        <!-- Selection of container -->
        <FormField v-slot="{ errorMessage, componentField }" name="container">
          <FormItem class="mt-4">
            <FormLabel class="ml-2">{{ $t("order.form.container") }}</FormLabel>
            <Select
              :model-value="formData.container"
              v-bind="componentField"
              :disabled="!containerData.length > 0"
              @update:model-value="handleContainerChange"
            >
              <FormControl>
                <SelectTrigger>
                  <SelectValue :placeholder="t('order.form.selectContainer')" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                <SelectGroup>
                  <SelectItem
                    v-for="(container, index) in containerData"
                    :key="container.id || index"
                    :value="String(container.id || index)"
                  >
                    {{
                      $i18n.locale === "ru"
                        ? container.name_ru
                        : $i18n.locale === "et"
                          ? container.name_ee
                          : container.name
                    }}²
                  </SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            <FormMessage class="ml-2">{{ errorMessage }}</FormMessage>
          </FormItem>
        </FormField>

        <!-- Section of weight and volume choose -->
        <div class="flex gap-4">
          <div>
            <!-- Selection of volume -->
            <p class="mt-4 ml-2 text-sm mb-2">
              {{ $t("order.form.chooseVolume") }}
            </p>
            <FormField v-slot="{ errorMessage, componentField }" name="volume">
              <FormItem>
                <NumberField
                  v-bind="componentField"
                  id="age"
                  :disabled="!formData.container"
                  :step="1"
                  :default-value="9"
                  :min="0"
                  :max="15"
                >
                  <NumberFieldContent>
                    <NumberFieldDecrement />
                    <NumberFieldInput
                      class="click pointer-events-none"
                      tabindex="-1"
                    />
                    <NumberFieldIncrement />
                  </NumberFieldContent>
                </NumberField>
                <FormMessage class="ml-2">{{ errorMessage }}</FormMessage>
              </FormItem>
            </FormField>
          </div>
          <div>
            <!-- Selection of weight -->
            <p class="mt-4 ml-2 text-sm mb-2">
              {{ $t("order.form.chooseWeight") }}
            </p>
            <FormField v-slot="{ errorMessage, componentField }" name="weight">
              <FormItem>
                <NumberField
                  v-bind="componentField"
                  id="age"
                  :default-value="Number(selectedContainer?.included_weight)"
                  :min="Number(0)"
                  :max="Number(selectedContainer?.max_weight)"
                  :disabled="!formData.container"
                  @update:model-value="
                    (val) => setFieldValue('weight', Number(val))
                  "
                >
                  <NumberFieldContent>
                    <NumberFieldDecrement />
                    <NumberFieldInput
                      class="click pointer-events-none"
                      tabindex="-1"
                    />
                    <NumberFieldIncrement />
                  </NumberFieldContent>
                </NumberField>
                <FormMessage class="ml-2">{{ errorMessage }}</FormMessage>
              </FormItem>
            </FormField>
          </div>
        </div>
        <!-- Selection of date and time for beginning -->
        <p class="mt-4 ml-2 text-sm mb-2">
          {{ $t("order.form.chooseDateAndTimeFrom") }}
        </p>
        <div class="flex gap-4">
          <!-- Selection of date -->
          <FormField v-slot="{ errorMessage, componentField }" name="dateFrom">
            <FormItem>
              <Popover>
                <PopoverTrigger as-child>
                  <FormControl>
                    <Button
                      variant="outline"
                      :class="
                        cn(
                          'md:w-[190px] w-[157px] ps-3 text-start font-normal',
                          !formData.dateFrom && 'text-muted-foreground',
                        )
                      "
                    >
                      <span>{{
                        formData.dateFrom
                          ? format(new Date(formData.dateFrom), "dd/MM/yyyy")
                          : $t("order.form.date")
                      }}</span>
                      <CalendarIcon class="ms-auto h-4 w-4 opacity-50" />
                    </Button>
                    <input v-bind="componentField" hidden >
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent class="w-auto p-0">
                  <Calendar
                    v-model:placeholder="placeholder"
                    :model-value="formData.dateFrom"
                    calendar-label="Start date"
                    initial-focus
                    :min-value="today(getLocalTimeZone())"
                    :max-value="new CalendarDate(2030, 1, 1)"
                    @update:model-value="
                      (val) => setFieldValue('dateFrom', val)
                    "
                  />
                </PopoverContent>
              </Popover>
              <FormMessage class="ml-2">{{ errorMessage }}</FormMessage>
            </FormItem>
          </FormField>

          <!--Selection of time-->
          <FormField v-slot="{ errorMessage, componentField }" name="timeFrom">
            <FormItem>
              <Select
                :model-value="formData.timeFrom"
                v-bind="componentField"
                @update:model-value="(val) => setFieldValue('timeFrom', val)"
              >
                <SelectTrigger class="md:w-[190px] w-[157px]">
                  <SelectValue :placeholder="t('order.form.time')" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>{{ $t("order.form.time") }}</SelectLabel>
                    <SelectItem
                      v-for="time in timeOptions"
                      :key="time.value"
                      :value="time.value"
                    >
                      {{ time.label }}
                    </SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              <FormMessage class="ml-2">{{ errorMessage }}</FormMessage>
            </FormItem>
          </FormField>
        </div>

        <!-- Selection of date and time for end -->
        <p class="mt-4 ml-2 text-sm mb-2">
          {{ $t("order.form.chooseDateAndTimeTo") }}
        </p>
        <div class="flex gap-4">
          <FormField v-slot="{ errorMessage, componentField }" name="dateTo">
            <FormItem class="max-w-min">
              <Popover>
                <PopoverTrigger as-child>
                  <FormControl>
                    <Button
                      variant="outline"
                      :class="
                        cn(
                          'md:w-[190px] w-[157px] ps-3 text-start font-normal',
                          !formData.dateTo && 'text-muted-foreground',
                        )
                      "
                    >
                      <span>{{
                        formData.dateTo
                          ? format(new Date(formData.dateTo), "dd/MM/yyyy")
                          : $t("order.form.date")
                      }}</span>
                      <CalendarIcon class="ms-auto h-4 w-4 opacity-50" />
                    </Button>
                    <input v-bind="componentField" hidden >
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent class="w-auto p-0">
                  <Calendar
                    v-model:placeholder="placeholder"
                    :model-value="formData.dateTo"
                    calendar-label="End date"
                    initial-focus
                    :min-value="formData.dateFrom || today(getLocalTimeZone())"
                    :max-value="new CalendarDate(2030, 1, 1)"
                    @update:model-value="(val) => setFieldValue('dateTo', val)"
                  />
                </PopoverContent>
              </Popover>
              <FormMessage class="ml-2">{{ errorMessage }}</FormMessage>
            </FormItem>
          </FormField>

          <!-- Selection of time end -->
          <FormField v-slot="{ errorMessage, componentField }" name="timeTo">
            <FormItem>
              <Select
                :model-value="formData.timeTo"
                v-bind="componentField"
                @update:model-value="(val) => setFieldValue('timeTo', val)"
              >
                <SelectTrigger class="md:w-[190px] w-[157px]">
                  <SelectValue :placeholder="t('order.form.time')" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>{{ $t("order.form.time") }}</SelectLabel>
                    <SelectItem
                      v-for="time in timeOptions"
                      :key="time.value"
                      :value="time.value"
                    >
                      {{ time.label }}
                    </SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              <FormMessage class="ml-2">{{ errorMessage }}</FormMessage>
            </FormItem>
          </FormField>
        </div>

        <!-- Continue button -->
        <div class="flex justify-center absolute bottom-6 w-full inset-x-0">
          <Button
            type="submit"
            :disabled="!meta.valid"
            class="py-4 text-md px-16"
            >{{ $t("order.form.continue") }}
          </Button>
        </div>
      </form>
    </Card>
  </div>
</template>

<script setup lang="ts">
import { CalendarDate, getLocalTimeZone, today } from "@internationalized/date";
import { CalendarIcon } from "@radix-icons/vue";
import { format } from "date-fns";
import { useForm } from "vee-validate";

import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { cn } from "~/lib/utils";
import { NumberField, NumberFieldContent } from "~/components/ui/number-field";
import type { ContainerData } from "~/types/container";

const { t } = useI18n();
const selectedGooglePlace = ref(null);
const placeholder = ref();

const wastageData = ref([]);
const containerData = ref<ContainerData[]>([]);

const { getWastage } = wastage();

onMounted(async () => {
  try {
    wastageData.value = await getWastage();
  } catch (error) {
    console.error("Failed to load wastage:", error);
  }
});

const selectedContainer = computed(() => {
  if (!formData.container || !containerData.value) return 0;
  return containerData.value.find(
    (container) => container?.id == formData?.container,
  );
});

const emit = defineEmits(["container-order", "form-data", "address-data"]);

// Form validation setup
const {
  handleSubmit,
  values: formData,
  setFieldValue,
  meta,
} = useForm({
  initialValues: {
    address: "",
    container: null,
    wastage: "",
    weight: 0.0,
    volume: 0.0,
    dateFrom: null,
    timeFrom: "",
    dateTo: null,
    timeTo: "",
  },
  transform: (values) => ({
    ...values,
    weight: Number(values.weight),
  }),
  validationSchema: {
    address: (value) => {
      if (
        !selectedGooglePlace.value ||
        !value ||
        selectedGooglePlace.value != value
      ) {
        return t("order.form.orderStep.errors.addressFromSuggestions");
      }
      return true;
    },
    container: (value) => {
      if (!value) return t("order.form.orderStep.errors.selectContainer");
      return true;
    },
    wastage: (value) => {
      if (!value) return t("order.form.orderStep.errors.selectWasteType");
      return true;
    },
    dateFrom: (value) => {
      if (!value) return t("order.form.orderStep.errors.selectDateFrom");
      return true;
    },
    timeFrom: (value) => {
      if (!value) return t("order.form.orderStep.errors.selectTimeFrom");
      return true;
    },
    dateTo: (value) => {
      if (!value) return t("order.form.orderStep.errors.selectDateTo");
      if (formData.dateFrom) {
        const startDate = new Date(formData.dateFrom);
        const endDate = new Date(value);
        startDate.setHours(0, 0, 0, 0);
        endDate.setHours(0, 0, 0, 0);

        if (endDate < startDate) {
          return t("order.form.orderStep.errors.endDateAfterStartDate");
        }
      }
      return true;
    },
    timeTo: (value) => {
      if (!value) return t("order.form.orderStep.errors.selectTimeTo");
      if (formData.dateFrom && formData.dateTo && formData.timeFrom && value) {
        if (
          new Date(formData.dateFrom).toDateString() ===
          new Date(formData.dateTo).toDateString()
        ) {
          const [fromHour, fromMin] = formData.timeFrom.split(":").map(Number);
          const [toHour, toMin] = value.split(":").map(Number);

          if (toHour < fromHour || (toHour === fromHour && toMin <= fromMin)) {
            return t("order.form.orderStep.errors.endTimeAfterStartTime");
          }
        }
      }
      return true;
    },
  },
  validateOnMount: false,
  validateOnInput: true,
  validateOnChange: true,
  validateOnBlur: true,
});

const { getContainer } = container(formData);

watch(
  () => formData?.wastage,
  async (value) => {
    setFieldValue("container", null);
    containerData.value = await getContainer(value);
  },
);

watch(
  () => formData,
  (newFormData) => {
    if (newFormData?.address !== selectedGooglePlace.value) {
      selectedGooglePlace.value = null;
      emit("address-data", selectedGooglePlace.value);
    }
    emit("form-data", [newFormData, containerData]);
  },
  {
    deep: true,
    immediate: true,
  },
);

const handleContainerChange = (val) => {
  // Update container value
  setFieldValue("container", val);

  // Reset weight field
  setFieldValue("weight", 0.0);
};

// Google Places initialization
onMounted(() => {
  const script = document.createElement("script");
  script.async = true;
  script.onload = initPlace;
  const apiKey = useRuntimeConfig().public.googleMapsApiKey;
  script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places`;
  document.head.appendChild(script);
});
onUnmounted(() => {
  removeEventListener("place_changed", initPlace);
});

const initPlace = async () => {
  const autocomplete = new google.maps.places.Autocomplete(
    document.getElementById("address-input"),
    {
      componentRestrictions: { country: "ee" },
      fields: ["formatted_address", "geometry", "address_components"],
    },
  );

  autocomplete.addListener("place_changed", async () => {
    const selectedPlace = autocomplete.getPlace();
    selectedGooglePlace.value = selectedPlace.formatted_address;
    setFieldValue("address", selectedGooglePlace.value);
    emit("address-data", selectedGooglePlace.value);
  });
};

// Time options computation
const timeOptions = computed(() => {
  const times = [];
  for (let hour = 8; hour < 20; hour++) {
    for (let min = 0; min < 60; min += 30) {
      times.push({
        value: `${hour.toString().padStart(2, "0")}:${min.toString().padStart(2, "0")}`,
        label: `${hour.toString().padStart(2, "0")}:${min.toString().padStart(2, "0")}`,
      });
    }
  }
  return times;
});

const onSubmit = handleSubmit((_) => {
  const formattedData = {
    address: formData.address,
    container: formData.container,
    wastage: formData.wastage,
    weight: formData.weight,
    volume: formData.volume,
    dateFrom: formData.dateFrom ? new Date(formData.dateFrom) : null,
    timeFrom: formData.timeFrom,
    dateTo: formData.dateTo ? new Date(formData.dateTo) : null,
    timeTo: formData.timeTo,
    googlePlaceData: selectedGooglePlace.value,
  };
  emit("container-order", formattedData);
});
</script>

<style scoped></style>
