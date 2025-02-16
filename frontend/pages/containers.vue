<template>
  <div class="container mx-auto px-4 py-12">
    <!-- Header Section -->
    <div class="text-center mb-12">
      <h2 class="text-3xl font-bold mb-4">{{ $t("containers.title") }}</h2>
      <p class="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
        {{ $t("containers.description") }}
      </p>
    </div>

    <!-- Containers Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <!-- Container 2 -->
      <div
        class="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105"
      >
        <img
          src="/containers/container3.png"
          alt="Medium Container"
          class="w-full h-48 object-cover"
        />
        <div class="p-6">
          <h3 class="text-xl font-semibold mb-2">
            {{ $t("containers.medium.title") }}
          </h3>
          <p class="text-gray-600 dark:text-gray-300 mb-4">
            {{ $t("containers.medium.description") }}
          </p>
          <div class="space-y-2">
            <div
              class="flex items-center text-sm text-gray-500 dark:text-gray-400"
            >
              <span class="font-medium mr-2"
                >{{ $t("containers.capacity") }}:</span
              >
              6-8 m³
            </div>
            <div
              class="flex items-center text-sm text-gray-500 dark:text-gray-400"
            >
              <span class="font-medium mr-2"
                >{{ $t("containers.suitableFor") }}:</span
              >
              {{ $t("containers.medium.suitable") }}
            </div>
          </div>
        </div>
      </div>

      <!-- Container 3 -->
      <div
        class="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105"
      >
        <img
          src="/containers/container2.jpeg"
          alt="Large Container"
          class="w-full h-48 object-cover"
        />
        <div class="p-6">
          <h3 class="text-xl font-semibold mb-2">
            {{ $t("containers.large.title") }}
          </h3>
          <p class="text-gray-600 dark:text-gray-300 mb-4">
            {{ $t("containers.large.description") }}
          </p>
          <div class="space-y-2">
            <div
              class="flex items-center text-sm text-gray-500 dark:text-gray-400"
            >
              <span class="font-medium mr-2"
                >{{ $t("containers.capacity") }}:</span
              >
              10-15 m³
            </div>
            <div
              class="flex items-center text-sm text-gray-500 dark:text-gray-400"
            >
              <span class="font-medium mr-2"
                >{{ $t("containers.suitableFor") }}:</span
              >
              {{ $t("containers.large.suitable") }}
            </div>
          </div>
        </div>
      </div>

      <!-- Container 4 -->
      <div
        class="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105"
      >
        <img
          src="/containers/container4.png"
          alt="Extra Large Container"
          class="w-full h-48 object-cover"
        />
        <div class="p-6">
          <h3 class="text-xl font-semibold mb-2">
            {{ $t("containers.xl.title") }}
          </h3>
          <p class="text-gray-600 dark:text-gray-300 mb-4">
            {{ $t("containers.xl.description") }}
          </p>
          <div class="space-y-2">
            <div
              class="flex items-center text-sm text-gray-500 dark:text-gray-400"
            >
              <span class="font-medium mr-2"
                >{{ $t("containers.capacity") }}:</span
              >
              20-30 m³
            </div>
            <div
              class="flex items-center text-sm text-gray-500 dark:text-gray-400"
            >
              <span class="font-medium mr-2"
                >{{ $t("containers.suitableFor") }}:</span
              >
              {{ $t("containers.xl.suitable") }}
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Call to Action -->
    <div class="text-center mt-12">
      <NuxtLink
        :to="localePath('/order')"
        class="inline-block px-8 py-3 bg-red-800 text-white font-semibold rounded-lg hover:bg-red-900 transition-colors"
      >
        {{ $t("containers.orderButton") }}
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
// Add any required logic here
</script>
