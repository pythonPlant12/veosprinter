<!-- pages/about.vue -->
<template>
  <div class="container mx-auto px-4 py-12">
    <h1 class="text-4xl font-bold mb-8">{{ $t("about.title") }}</h1>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      <div>
        <p class="text-xl text-gray-600 dark:text-gray-300 mb-8">
          {{ $t("about.description") }}
        </p>
        <div class="bg-stone-100 dark:bg-stone-900 rounded-lg p-6 mb-8">
          <p class="text-lg text-gray-800 dark:text-gray-200 mb-4">
            {{ $t("about.experience") }}
          </p>
          <p class="text-lg text-gray-800 dark:text-gray-200">
            {{ $t("about.customers") }}
          </p>
        </div>
        <p class="text-lg text-gray-600 dark:text-gray-300">
          {{ $t("about.services") }}
        </p>
      </div>
      <div class="relative">
        <img
          src="/wastes/household.png"
          alt="About VeoSprinter"
          class="w-full rounded-lg shadow-lg"
        />
        <div class="absolute inset-0 flex items-center justify-center">
          <div
            class="bg-white dark:bg-gray-800 bg-opacity-75 dark:bg-opacity-75 rounded-lg p-6"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "default",
});

const { t } = useI18n();

useHead(() => ({
  title: `${t("about.metaTitle")} | VeoSprinter`,
  meta: [
    {
      name: "description",
      content: t("about.metaDescription"),
    },
    {
      name: "keywords",
      content: t("about.metaKeywords"),
    },
  ],
}));
</script>
