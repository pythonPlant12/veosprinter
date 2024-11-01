<script setup lang="ts">
import {Layout} from "~/types/shared";

const viewport: ViewportManager = useViewport()
const activeLayout: Layout = ref('desktop')
watch(viewport.breakpoint, () => {
  setLayout()
}, {immediate: true})

function setLayout() {
  if (viewport.isLessThan(Layout.DESKTOP)) {
    activeLayout.value = Layout.MOBILE
    console.log("setting up mobile layout")
  } else {
    activeLayout.value = Layout.DESKTOP
    console.log("setting up desktop layout")
  }
}
</script>
<template>
<div>
  <LayoutsDesktopNavbar v-if="activeLayout == Layout.DESKTOP" />
  <LayoutsMobileNavbar v-else-if="activeLayout == Layout.MOBILE"/>
  <slot />
</div>
</template>
<style>

</style>
