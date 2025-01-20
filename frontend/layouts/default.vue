<script setup lang="ts">
import ChangeTheme from '~/components/layouts/change-theme.vue'
import ContactUsDropdown from '~/components/layouts/contact-us-dropdown.vue'
import { Layout } from '~/types/shared'

const viewport: ViewportManager = useViewport()
const activeLayout: Layout = ref('desktop')

watch(
	viewport.breakpoint,
	() => {
		setLayout()
	},
	{ immediate: true }
)

function setLayout() {
	if (viewport.isLessThan(Layout.DESKTOP)) {
		activeLayout.value = Layout.MOBILE
	} else {
		activeLayout.value = Layout.DESKTOP
	}
}
</script>
<template>
	<div>
		<LayoutsDesktopNavbar v-if="activeLayout == Layout.DESKTOP" />
		<LayoutsMobileNavbar v-else-if="activeLayout == Layout.MOBILE" />
		<slot />
		<change-theme class="fixed right-6 bottom-6" />
		<contact-us-dropdown class="fixed right-6 bottom-16" />
	</div>
</template>
<style></style>
