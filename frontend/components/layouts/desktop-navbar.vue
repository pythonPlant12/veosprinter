<script setup lang="ts">
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import ChangeTheme from "~/components/layouts/change-theme.vue";
import { NuxtLink } from "#components";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Organizacion",
    href: "/docs/components/alert-dialog",
    description: "Como se formo la organizacion.",
  },
  {
    title: "Sponsors",
    href: "/docs/components/hover-card",
    description: "Los patrocinadores principales",
  },
  {
    title: "Socios",
    href: "/docs/components/progress",
    description: "Los socios que forman parte de la organizacion.",
  },
];
</script>

<template>
  <div class="sticky flex pt-2 w-full top-0 px-8 z-20 pb-2 bg-white shadow">
    <NuxtLink
      :to="localePath('/')"
      class="absolute z-40 left-8 mt-[4px] text-red-800 font-bold text-lg"
      >VeoSprinter</NuxtLink
    >
    <NavigationMenu class="z-20">
      <NavigationMenuList class="z-20">
        <NavigationMenuItem>
          <NavigationMenuLink
            :class="navigationMenuTriggerStyle()"
            :as="NuxtLink"
            :to="localePath('/')"
          >
            {{ $t("navbar.main") }}
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink
            :class="navigationMenuTriggerStyle()"
            :as="NuxtLink"
            :to="localePath('/services')"
          >
            {{ $t("navbar.services") }}
          </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>{{
            $t("navbar.wastageKind")
          }}</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul class="grid w-[400px] gap-3 p-4 md:w-[500px] lg:w-[600px]">
              <li v-for="component in components" :key="component.title">
                <NavigationMenuLink as-child>
                  <a
                    :href="component.href"
                    class="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                  >
                    <div class="text-sm font-medium leading-none">
                      {{ component.title }}
                    </div>
                    <p
                      class="line-clamp-2 text-sm leading-snug text-muted-foreground"
                    >
                      {{ component.description }}
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink
            :class="navigationMenuTriggerStyle()"
            :as="NuxtLink"
            :to="localePath('/containers')"
          >
            {{ $t("navbar.containers") }}
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink
            :class="navigationMenuTriggerStyle()"
            :as="NuxtLink"
            :to="localePath('/about-us')"
          >
            {{ $t("navbar.aboutUs") }}
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
    <NuxtLink
      class="absolute z-20 right-36 inline-block ml-auto mr-2 py-2 px-6 bg-gray-50 hover:bg-gray-100 text-sm text-gray-900 dark:bg-gray-700 dark:text-red-700 font-bold rounded-lg transition duration-200"
      :to="localePath('/contact')"
      >{{ $t("contact") }}</NuxtLink
    >
    <NuxtLink
      class="absolute z-20 right-8 inline-block py-2 px-6 bg-red-800 hover:bg-red-950 text-sm text-white font-bold rounded-lg transition duration-200"
      :to="localePath('/order')"
      >{{ $t("orderButton") }}</NuxtLink
    >
  </div>
  <change-theme class="fixed right-6 bottom-6" />
</template>
