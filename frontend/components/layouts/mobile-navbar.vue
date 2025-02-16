<script setup lang="ts">
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import ChangeTheme from "~/components/layouts/change-theme.vue";
import { NuxtLink } from "#components";
import { ref } from "vue";

const isOpen = ref(false);

const handleNavigate = () => {
  isOpen.value = false;
};

const wasteTypes = [
  {
    name: "Household Waste",
    route: "/waste/household",
  },
  {
    name: "Wood Waste/Branches",
    route: "/waste/woodwaste",
  },
  {
    name: "Stone/Concrete/Soil",
    route: "/waste/stoneconcrete",
  },
  {
    name: "Sorted Wood",
    route: "/waste/sortedwood",
  },
  {
    name: "Construction Waste",
    route: "/waste/constructionwaste",
  },
  {
    name: "Construction Waste (Foam/Wool)",
    route: "/waste/constructioninsulation",
  },
];

const { locale } = useI18n();
const currentLocale = computed(() => locale.value);

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

const getCurrentFlag = computed(() => {
  return `/flags/${currentLocale.value}.png`;
});

const switchLanguage = (lang: string) => {
  isOpen.value = false;
  navigateTo(`/${lang}`);
};
</script>

<template>
  <Sheet v-model:open="isOpen">
    <div class="w-full border-b shadow-sm bg-white dark:bg-neutral-950">
      <div class="flex items-center p-4">
        <NuxtLink
          :to="localePath('/')"
          class="text-red-800 font-bold text-lg mr-auto"
          @click="handleNavigate"
        >
          VeoSprinter
        </NuxtLink>
        <SheetTrigger>
          <Button variant="ghost">
            <svg
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.5 3C1.22386 3 1 3.22386 1 3.5C1 3.77614 1.22386 4 1.5 4H13.5C13.7761 4 14 3.77614 14 3.5C14 3.22386 13.7761 3 13.5 3H1.5ZM1 7.5C1 7.22386 1.22386 7 1.5 7H13.5C13.7761 7 14 7.22386 14 7.5C14 7.77614 13.7761 8 13.5 8H1.5C1.22386 8 1 7.77614 1 7.5ZM1 11.5C1 11.2239 1.22386 11 1.5 11H13.5C13.7761 11 14 11.2239 14 11.5C14 11.7761 13.7761 12 13.5 12H1.5C1.22386 12 1 11.7761 1 11.5Z"
                fill="currentColor"
                fill-rule="evenodd"
                clip-rule="evenodd"
              />
            </svg>
          </Button>
        </SheetTrigger>
      </div>
    </div>

    <SheetContent side="left">
      <SheetHeader>
        <NuxtLink
          :to="localePath('/')"
          class="text-red-800 font-bold text-lg"
          @click="handleNavigate"
          >VeoSprinter</NuxtLink
        >
      </SheetHeader>

      <Accordion type="single" collapsible class="w-full mt-8">
        <NuxtLink
          :to="localePath('/')"
          class="flex px-4 py-2 hover:bg-accent"
          @click="handleNavigate"
        >
          {{ $t("navbar.main") }}
        </NuxtLink>

        <NuxtLink
          :to="localePath('/services')"
          class="flex px-4 py-2 hover:bg-accent"
          @click="handleNavigate"
        >
          {{ $t("navbar.services") }}
        </NuxtLink>

        <AccordionItem value="wastage-types" class="border-b-0 py-0 -my-2">
          <AccordionTrigger class="px-4 text-md hover:no-underline">
            {{ $t("navbar.wastageKind") }}
          </AccordionTrigger>
          <AccordionContent class="border-b-0 my-0">
            <div class="flex flex-col space-y-2">
              <NuxtLink
                v-for="type in wasteTypes"
                :key="type.name"
                :to="localePath(type.route)"
                class="px-6 py-2 hover:bg-accent rounded-md"
                @click="handleNavigate"
              >
                <div class="font-medium">{{ $t(`wastes.${type.name}`) }}</div>
              </NuxtLink>
            </div>
          </AccordionContent>
        </AccordionItem>

        <NuxtLink
          :to="localePath('/containers')"
          class="flex px-4 py-2 hover:bg-accent"
          @click="handleNavigate"
        >
          {{ $t("navbar.containers") }}
        </NuxtLink>

        <NuxtLink
          :to="localePath('/about-us')"
          class="flex px-4 py-2 hover:bg-accent"
          @click="handleNavigate"
        >
          {{ $t("navbar.aboutUs") }}
        </NuxtLink>

        <div
          class="absolute bottom-0 left-0 right-0 p-4 border-t flex flex-col gap-4"
        >
          <DropdownMenu>
            <DropdownMenuTrigger
              class="flex items-center gap-2 px-4 py-2 rounded-xl w-full justify-center bg-gray-50 dark:bg-gray-700"
            >
              <img
                :src="getCurrentFlag"
                :alt="currentLocale"
                class="w-6 h-4 rounded-sm object-cover"
              />
              <span class="text-sm font-bold">{{ getCurrentLanguage }}</span>
            </DropdownMenuTrigger>

            <DropdownMenuContent class="min-w-[250px]">
              <DropdownMenuItem
                :class="{ 'bg-accent': currentLocale === 'ee' }"
                @click="switchLanguage('ee')"
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
                :class="{ 'bg-accent': currentLocale === 'ru' }"
                @click="switchLanguage('ru')"
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
                :class="{ 'bg-accent': currentLocale === 'en' }"
                @click="switchLanguage('en')"
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
          <NuxtLink
            class="flex-1 py-2 px-4 bg-gray-50 hover:bg-gray-100 text-sm text-gray-900 dark:bg-gray-700 dark:text-white font-bold rounded-lg text-center"
            :to="localePath('/contact')"
            @click="handleNavigate"
          >
            {{ $t("contact") }}
          </NuxtLink>
          <NuxtLink
            class="flex-1 py-2 px-4 bg-red-800 hover:bg-red-950 text-sm text-white font-bold rounded-lg text-center"
            :to="localePath('/order')"
            @click="handleNavigate"
          >
            {{ $t("orderButton") }}
          </NuxtLink>
          <p class="text-xs text-center text-gray-400">
            © {{ new Date().getFullYear() }} VeoSprinter.
            {{ $t("footer.allRightsReserved") }}
          </p>
        </div>
      </Accordion>
    </SheetContent>
  </Sheet>
  <change-theme class="fixed right-6 bottom-6" />
</template>
