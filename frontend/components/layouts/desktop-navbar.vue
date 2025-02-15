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
import LanguageButton from "~/components/layouts/language-button.vue";

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
</script>

<template>
  <div
    class="sticky flex pt-2 w-full top-0 px-8 z-20 pb-2 shadow bg-white dark:bg-gray-950 pr-28"
  >
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
            <ul
              class="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[minmax(0,.55fr)_minmax(0,1fr)]"
            >
              <li class="row-span-3">
                <NavigationMenuLink as-child>
                  <a
                    class="flex h-full w-full select-none flex-col justify-end rounded-md bg-neutral-50 from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                    <img src="/navbar/container_navbar.png" alt="Kontainer" />
                  </a>
                </NavigationMenuLink>
              </li>

              <li>
                <NavigationMenuLink
                  v-for="waste in wasteTypes"
                  :key="waste.route"
                  :class="navigationMenuTriggerStyle()"
                  :as="NuxtLink"
                  :to="localePath(waste.route)"
                  class=""
                >
                  {{ $t(`wastes.${waste.name}`) }}
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
      <language-button class="relative inline-block z-20 right-46" />
    </NavigationMenu>

    <div class="absolute z-20 flex gap-4 right-6">
      <NuxtLink
        class="inline-block ml-auto mr-2 py-2 px-6 bg-gray-50 hover:bg-gray-100 text-sm text-gray-900 dark:bg-neutral-800 dark:text-white font-bold rounded-lg transition duration-200"
        :to="localePath('/contact')"
        >{{ $t("contact") }}</NuxtLink
      >
      <NuxtLink
        class="inline-block py-2 px-6 bg-red-800 hover:bg-red-950 text-sm text-white font-bold rounded-lg transition duration-200"
        :to="localePath('/order')"
        >{{ $t("orderButton") }}</NuxtLink
      >
    </div>
  </div>
  <change-theme class="fixed right-6 bottom-6" />
</template>
