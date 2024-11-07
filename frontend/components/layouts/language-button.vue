<template>
  <div class="relative">
    <!-- Main Button -->
    <button
        class="flex items-center gap-2 px-4 py-2 rounded-xl transition-transform duration-300"
        @click="isOpen = !isOpen"
    >
      <img
          :src="getCurrentFlag"
          :alt="currentLocale"
          class="w-6 h-4 rounded-sm object-cover"
      >
      <span class="text-sm text-gray-700">{{ getCurrentLanguage }}</span>
      <svg
          class="w-4 h-4 transition-transform duration-300"
          :class="{ 'rotate-180': isOpen }"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
      >
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
      </svg>
    </button>

    <!-- Dropdown -->
    <div
        v-show="isOpen"
        class="absolute top-full right-0 mt-2 bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 origin-top-right"
        :class="{ 'opacity-0 scale-95': !isOpen, 'opacity-100 scale-100': isOpen }"
    >
      <div class="p-0 flex flex-col min-w-full">
        <!-- Estonian -->
        <button
            @click="switchLanguage('ee')"
            class="flex items-center gap-3 w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
            :class="{ 'bg-gray-100': currentLocale === 'ee' }"
        >
          <img
              src="/flags/ee.png"
              alt="Estonian"
              class="w-6 h-4 rounded-sm object-cover"
          >
          <span>Eesti</span>
        </button>

        <!-- Russian -->
        <button
            @click="switchLanguage('ru')"
            class="flex items-center gap-3 w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
            :class="{ 'bg-gray-100': currentLocale === 'ru' }"
        >
          <img
              src="/flags/ru.png"
              alt="Russian"
              class="w-6 h-4 rounded-sm object-cover"
          >
          <span>Русский</span>
        </button>

        <!-- English -->
        <button
            @click="switchLanguage('en')"
            class="flex items-center gap-3 w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
            :class="{ 'bg-gray-100': currentLocale === 'en' }"
        >
          <img
              src="/flags/en.png"
              alt="English"
              class="w-6 h-4 rounded-sm object-cover"
          >
          <span>English</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const {locale} = useI18n()
const isOpen = ref(false)
const currentLocale = computed(() => locale.value)

// Get current language name
const getCurrentLanguage = computed(() => {
  switch (currentLocale.value) {
    case 'ee':
      return 'Eesti'
    case 'ru':
      return 'Русский'
    default:
      return 'English'
  }
})

// Close dropdown when clicking outside
onClickOutside(isOpen, () => {
  isOpen.value = false
})

// Get current flag
const getCurrentFlag = computed(() => {
  return `/flags/${currentLocale.value}.png`
})

// Switch language
const switchLanguage = (lang: string) => {
  isOpen.value = false
  navigateTo(`/${lang}`)
}
</script>

<style scoped>
</style>