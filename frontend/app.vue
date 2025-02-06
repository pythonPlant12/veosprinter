<template>
	<NuxtLayout>
		<NuxtPage />
	</NuxtLayout>
</template>
<script setup lang="ts">
useTheme()
</script>
<style>
.page-enter-active,
.page-leave-active {
	transition: all 0.3s ease-in-out;
}

.page-enter-from,
.page-leave-to {
	opacity: 0;
}
</style>
