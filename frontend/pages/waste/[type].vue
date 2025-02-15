<!-- pages/waste/[type].vue -->
<template>
  <div class="container mx-auto px-4 py-12">
    <!-- Hero Section -->
    <div class="max-w-4xl mx-auto text-center mb-12">
      <h1 class="text-4xl font-bold mb-6">{{ $t(`wastes.${type}.title`) }}</h1>
      <p class="text-xl text-gray-600 dark:text-gray-300">
        {{ $t(`wastes.${type}.shortDescription`) }}
      </p>
    </div>

    <!-- Main Content -->
    <div class="grid md:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
      <!-- Image Section -->
      <div class="rounded-lg overflow-hidden shadow-lg">
        <img
          :src="`/wastes/${type}.png`"
          :alt="$t(`wastes.${type}.imageAlt`)"
          class="w-full h-auto object-cover"
        >
      </div>

      <!-- Information Section -->
      <div class="space-y-8">
        <div>
          <h2 class="text-2xl font-semibold mb-4">
            {{ $t(`wastes.${type}.whatIsTitle`) }}
          </h2>
          <p class="text-gray-600 dark:text-gray-300">
            {{ $t(`wastes.${type}.whatIsDescription`) }}
          </p>
        </div>

        <!-- Handling Instructions -->
        <div>
          <h2 class="text-2xl font-semibold mb-4">
            {{ $t("wastes.handling") }}
          </h2>
          <div class="space-y-2 text-gray-600 dark:text-gray-300">
            <ul>
              <li>{{ $t(`wastes.${type}.instructionsItem1`) }}</li>
              <li>{{ $t(`wastes.${type}.instructionsItem2`) }}</li>
              <li>{{ $t(`wastes.${type}.instructionsItem3`) }}</li>
              <li>{{ $t(`wastes.${type}.instructionsItem4`) }}</li>
            </ul>
          </div>
        </div>

        <!-- Environmental Impact -->
        <div>
          <h2 class="text-2xl font-semibold mb-4">
            {{ $t("wastes.environmental") }}
          </h2>
          <p class="text-gray-600 dark:text-gray-300">
            {{ $t(`wastes.${type}.environmental`) }}
          </p>
        </div>
      </div>
    </div>

    <!-- Additional Information -->
    <div class="max-w-4xl mx-auto mt-16">
      <h2 class="text-2xl font-semibold mb-6">
        {{ $t(`wastes.additionalInfo`) }}
      </h2>
      <div class="grid md:grid-cols-3 gap-8">
        <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
          <h3 class="font-semibold mb-2">
            {{ $t(`wastes.${type}.additionalInfoItem1title`) }}
          </h3>
          <p class="text-gray-600 dark:text-gray-300">
            {{ $t(`wastes.${type}.additionalInfoItem1content`) }}
          </p>
        </div>
        <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
          <h3 class="font-semibold mb-2">
            {{ $t(`wastes.${type}.additionalInfoItem2title`) }}
          </h3>
          <p class="text-gray-600 dark:text-gray-300">
            {{ $t(`wastes.${type}.additionalInfoItem2content`) }}
          </p>
        </div>
        <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
          <h3 class="font-semibold mb-2">
            {{ $t(`wastes.${type}.additionalInfoItem3title`) }}
          </h3>
          <p class="text-gray-600 dark:text-gray-300">
            {{ $t(`wastes.${type}.additionalInfoItem3content`) }}
          </p>
        </div>
      </div>
    </div>

    <!-- Call to Action -->
    <div class="text-center mt-16">
      <NuxtLink
        :to="localePath('/order')"
        class="inline-block px-8 py-3 bg-red-800 text-white font-semibold rounded-lg hover:bg-red-900 transition-colors"
      >
        {{ $t("wastes.orderButton") }}
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "default",
});

const route = useRoute();
const type = computed(() => route.params.type as string);
const { t } = useI18n();

const getInstructions = () => {
  const instructions = [];
  for (let i = 1; i <= 4; i++) {
    const instructionKey = `wastes.household.instructionsItem${i}`;
    const instruction = t(instructionKey, "");
    if (instruction) {
      instructions.push(instruction);
    }
  }
  return instructions;
};

// Computed property for additional info
const additionalInfo = computed(() => {
  try {
    return t(`wastes.${type.value}.additionalInfo`);
  } catch {
    return null;
  }
});

// SEO meta tags
useHead(() => ({
  title: `${t(`wastes.${type.value}.title`)} | VeoSprinter`,
  meta: [
    {
      name: "description",
      content: t(`wastes.${type.value}.metaDescription`),
    },
    {
      name: "keywords",
      content: t(`wastes.${type.value}.metaKeywords`),
    },
  ],
}));
</script>
