<script setup lang="ts">
import ChangeTheme from "~/components/layouts/change-theme.vue";
import ContactUsDropdown from "~/components/layouts/contact-us-dropdown.vue";
import { Layout } from "~/types/shared";
import Footer from "~/components/layouts/footer.vue";
import LanguageButton from "~/components/layouts/language-button.vue";

const viewport: ViewportManager = useViewport();
const activeLayout: Layout = ref("desktop");

watch(
  viewport.breakpoint,
  () => {
    setLayout();
  },
  { immediate: true },
);

function setLayout() {
  if (viewport.isLessThan(Layout.DESKTOP)) {
    activeLayout.value = Layout.MOBILE;
  } else {
    activeLayout.value = Layout.DESKTOP;
  }
}
</script>
<template>
  <div class="relative">
    <layouts-desktop-navbar v-if="activeLayout == Layout.DESKTOP" />
    <layouts-mobile-navbar v-else-if="activeLayout == Layout.MOBILE" />
    <div class="">
      <slot />
    </div>
    <change-theme class="fixed right-6 bottom-6 z-30" />
    <contact-us-dropdown class="fixed right-6 bottom-16 z-30" />
    <Footer class="fixed bottom-0 left-0 right-0 w-full z-20" />
  </div>
</template>
<style></style>
