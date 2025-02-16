<!-- components/IndexStatsComponent.vue -->
<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useIntersectionObserver } from "@vueuse/core";

const statsRef = ref(null);
const hasAnimated = ref(false);

const stats = [
  {
    value: ref(0),
    target: 98,
    suffix: "%",
    key: "satisfactionRate",
    title: "customerSatisfaction",
  },
  {
    value: ref(0),
    target: 1500,
    suffix: "+",
    key: "completedProjects",
    title: "projectsCompleted",
  },
  {
    value: ref(0),
    target: 2400,
    suffix: "+",
    key: "recycledAmount",
    title: "wasteRecycled",
  },
  {
    value: ref(0),
    target: 12,
    suffix: "",
    key: "citiesCount",
    title: "activeCities",
  },
];

const animateValue = (stat: any) => {
  const duration = 2000;
  const steps = 60;
  const stepValue = stat.target / steps;
  let current = 0;

  const timer = setInterval(() => {
    current += stepValue;
    if (current >= stat.target) {
      stat.value.value = stat.target;
      clearInterval(timer);
    } else {
      stat.value.value = Math.floor(current);
    }
  }, duration / steps);
};

const startAnimation = () => {
  if (!hasAnimated.value) {
    stats.forEach((stat) => animateValue(stat));
    hasAnimated.value = true;
  }
};

useIntersectionObserver(statsRef, ([{ isIntersecting }]) => {
  if (isIntersecting) {
    startAnimation();
  }
});
</script>

<template>
  <div
    ref="statsRef"
    class="bg-white dark:bg-neutral-900 py-20 relative overflow-hidden"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div
          v-for="stat in stats"
          :key="stat.key"
          class="text-center p-6 rounded-lg bg-neutral-50 dark:bg-neutral-800 transform transition-all duration-300 hover:scale-105 hover:shadow-lg"
        >
          <div class="text-4xl font-bold text-primary-600 mb-2">
            {{ Math.floor(stat.value.value) }}{{ stat.suffix }}
          </div>
          <div class="text-lg text-neutral-600 dark:text-neutral-300">
            {{ $t(`stats.${stat.title}`) }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
