<template>
  <DropdownMenu>
    <DropdownMenuTrigger class="flex items-center gap-2 px-4 py-2 rounded-xl">
      <img
        :src="getCurrentFlag"
        :alt="currentLocale"
        class="w-6 h-4 rounded-sm object-cover"
      />
      <span class="text-sm">{{ getCurrentLanguage }}</span>
      <ChevronDown class="w-4 h-4" />
    </DropdownMenuTrigger>

    <DropdownMenuContent class="w-32">
      <DropdownMenuItem
        @click="switchLanguage('ee')"
        :class="{ 'bg-accent': currentLocale === 'ee' }"
      >
        <div class="flex items-center gap-3 w-full">
          <img
            src="/flags/ee.png"
            alt="Estonian"
            class="w-6 h-4 rounded-sm object-cover"
          />
          <span>Eesti</span>
        </div>
      </DropdownMenuItem>

      <DropdownMenuItem
        @click="switchLanguage('ru')"
        :class="{ 'bg-accent': currentLocale === 'ru' }"
      >
        <div class="flex items-center gap-3 w-full">
          <img
            src="/flags/ru.png"
            alt="Russian"
            class="w-6 h-4 rounded-sm object-cover"
          />
          <span>Русский</span>
        </div>
      </DropdownMenuItem>

      <DropdownMenuItem
        @click="switchLanguage('en')"
        :class="{ 'bg-accent': currentLocale === 'en' }"
      >
        <div class="flex items-center gap-3 w-full">
          <img
            src="/flags/en.png"
            alt="English"
            class="w-6 h-4 rounded-sm object-cover"
          />
          <span>English</span>
        </div>
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
</template>

<script setup lang="ts">
import { ChevronDown } from "lucide-vue-next";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

const { locale } = useI18n();
const currentLocale = computed(() => locale.value);

// Get current language name
const getCurrentLanguage = computed(() => {
  switch (currentLocale.value) {
    case "ee":
      return "Eesti";
    case "ru":
      return "Русский";
    default:
      return "English";
  }
});

// Get current flag
const getCurrentFlag = computed(() => {
  return `/flags/${currentLocale.value}.png`;
});

// Switch language
const switchLanguage = (lang: string) => {
  navigateTo(`/${lang}`);
};
</script>
