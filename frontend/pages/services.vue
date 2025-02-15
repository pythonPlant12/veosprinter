<template>
  <div class="container mx-auto px-4 py-12">
    <!-- Header Section -->
    <div class="text-center mb-12">
      <h1 class="text-4xl font-bold mb-6">{{ $t("services.title") }}</h1>
      <p class="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto">
        {{ $t("services.description") }}
      </p>
    </div>
    <!-- Services Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <!-- Waste Management -->
      <div class="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
        <div class="flex items-center mb-4">
          <img
            src="/icons/waste.svg"
            alt="Waste Management"
            class="w-12 h-12 mr-4"
          />
          <h2 class="text-2xl font-semibold">
            {{ $t("services.wasteManagement.title") }}
          </h2>
        </div>
        <p class="text-gray-600 dark:text-gray-300">
          {{ $t("services.wasteManagement.description") }}
        </p>
      </div>

      <!-- Container Rental -->
      <div class="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
        <div class="flex items-center mb-4">
          <img
            src="/icons/container.svg"
            alt="Container Rental"
            class="w-12 h-12 mr-4"
          />
          <h2 class="text-2xl font-semibold">
            {{ $t("services.containerRental.title") }}
          </h2>
        </div>
        <p class="text-gray-600 dark:text-gray-300">
          {{ $t("services.containerRental.description") }}
        </p>
      </div>

      <!-- Customized Solutions -->
      <div class="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
        <div class="flex items-center mb-4">
          <img
            src="/icons/customized.svg"
            alt="Customized Solutions"
            class="w-12 h-12 mr-4"
          />
          <h2 class="text-2xl font-semibold">
            {{ $t("services.customizedSolutions.title") }}
          </h2>
        </div>
        <p class="text-gray-600 dark:text-gray-300">
          {{ $t("services.customizedSolutions.description") }}
        </p>
      </div>
    </div>

    <!-- Features Section -->
    <div class="mt-16">
      <h2 class="text-3xl font-bold mb-8 text-center">
        {{ $t("services.features.title") }}
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div class="flex items-center">
          <img
            src="/icons/availability.svg"
            alt="Full Availability"
            class="w-12 h-12 mr-4"
          />
          <div>
            <h3 class="text-xl font-semibold mb-2">
              {{ $t("services.features.availability.title") }}
            </h3>
            <p class="text-gray-600 dark:text-gray-300">
              {{ $t("services.features.availability.description") }}
            </p>
          </div>
        </div>
        <div class="flex items-center">
          <img
            src="/icons/flexibility.svg"
            alt="Flexibility"
            class="w-12 h-12 mr-4"
          />
          <div>
            <h3 class="text-xl font-semibold mb-2">
              {{ $t("services.features.flexibility.title") }}
            </h3>
            <p class="text-gray-600 dark:text-gray-300">
              {{ $t("services.features.flexibility.description") }}
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- Call to Action -->
    <div class="text-center mt-16">
      <NuxtLink
        :to="localePath('/order')"
        class="inline-block px-8 py-3 bg-red-800 text-white font-semibold rounded-lg hover:bg-red-900 transition-colors"
      >
        {{ $t("services.orderButton") }}
      </NuxtLink>
    </div>
  </div>
</template>
<script setup lang="ts">
definePageMeta({
  layout: "default",
});

const { t } = useI18n();

useHead(() => ({
  title: `${t("services.metaTitle")} | VeoSprinter`,
  meta: [
    {
      name: "description",
      content: t("services.metaDescription"),
    },
    {
      name: "keywords",
      content: t("services.metaKeywords"),
    },
  ],
}));
</script>
