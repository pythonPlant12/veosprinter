<script setup lang="ts">
const secondComponent = ref(null);
const scrollToSecond = () => {
  secondComponent.value.$el.scrollIntoView({
    behavior: "smooth",
    inline: "start",
    block: "start",
  });
};
</script>
<template>
  <div>
    <index-main-component @scroll-to-second="scrollToSecond" />
    <index-second-component ref="secondComponent" class="pt-4" />
  </div>
</template>
<style></style>
