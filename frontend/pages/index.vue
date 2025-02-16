<script setup lang="ts">
const secondComponent = ref(null);
const statsComponent = ref(null);
const scrollToSecond = () => {
  statsComponent.value.$el.scrollIntoView({
    behavior: "smooth",
    inline: "start",
    block: "start",
  });
};
</script>
<template>
  <div>
    <index-main-component @scroll-to-second="scrollToSecond" />
    <index-stats-component ref="statsComponent" />
    <index-second-component ref="secondComponent" class="pt-4" />
    <index-faq />
  </div>
</template>
<style></style>
