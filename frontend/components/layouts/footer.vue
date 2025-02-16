<template>
  <footer class="relative bottom-0 bg-red-900 mt-20">
    <div class="container mx-auto px-6 py-12">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8 text-white">
        <!-- Company Info -->
        <div class="space-y-4">
          <h3 class="font-bold text-xl mb-4">VeoSprinter</h3>
          <p class="text-gray-300 text-sm">
            {{ $t("about.description") }}
          </p>
          <div class="flex space-x-4">
            <a href="#" class="hover:text-red-300 transition-colors">
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <!-- Facebook icon path -->
                <path
                  d="M18.77,7.46H14.5v-1.9c0-.9.6-1.1,1-1.1h3V.5h-4.33C10.24.5,9.5,3.44,9.5,5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4Z"
                />
              </svg>
            </a>
            <a href="#" class="hover:text-red-300 transition-colors">
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <!-- Instagram icon path -->
                <path
                  d="M12,2.2c3.2,0,3.6,0,4.9.1,3.3.1,4.8,1.7,4.9,4.9.1,1.3.1,1.6.1,4.8,0,3.2,0,3.6-.1,4.8-.1,3.2-1.7,4.8-4.9,4.9-1.3.1-1.6.1-4.9.1-3.2,0-3.6,0-4.8-.1-3.3-.1-4.8-1.7-4.9-4.9-.1-1.3-.1-1.6-.1-4.8,0-3.2,0-3.6.1-4.8C2.4,4,4,2.4,7.2,2.3,8.5,2.2,8.8,2.2,12,2.2ZM12,0C8.7,0,8.3,0,7.1.1,2.7.3.3,2.7.1,7.1,0,8.3,0,8.7,0,12s0,3.7.1,4.9c.2,4.4,2.6,6.8,7,7,1.2.1,1.6.1,4.9.1s3.7,0,4.9-.1c4.4-.2,6.8-2.6,7-7,.1-1.2.1-1.6.1-4.9s0-3.7-.1-4.9c-.2-4.4-2.6-6.8-7-7C15.7,0,15.3,0,12,0Zm0,5.8A6.2,6.2,0,1,0,18.2,12,6.2,6.2,0,0,0,12,5.8Zm0,10.2A4,4,0,1,1,16,12,4,4,0,0,1,12,16Zm6.4-10.5a1.5,1.5,0,1,1,1.5-1.5A1.5,1.5,0,0,1,18.4,5.5Z"
                />
              </svg>
            </a>
          </div>
        </div>

        <!-- Navigation Links -->
        <div class="space-y-4">
          <h3 class="font-bold text-lg mb-4">{{ $t("navbar.wastageKind") }}</h3>
          <ul class="space-y-2">
            <li v-for="(type, index) in wastageTypes" :key="index">
              <NuxtLink
                :to="localePath(type.route)"
                class="text-gray-300 hover:text-white transition-colors"
              >
                {{ $t(`wastes.${type.name}`) }}
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Quick Links -->
        <div class="space-y-4">
          <h3 class="font-bold text-lg mb-4">{{ $t("footer.quickLinks") }}</h3>
          <ul class="space-y-2">
            <li>
              <NuxtLink
                :to="localePath('/services')"
                class="text-gray-300 hover:text-white transition-colors"
              >
                {{ $t("navbar.services") }}
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                :to="localePath('/containers')"
                class="text-gray-300 hover:text-white transition-colors"
              >
                {{ $t("navbar.containers") }}
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                :to="localePath('/about-us')"
                class="text-gray-300 hover:text-white transition-colors"
              >
                {{ $t("navbar.aboutUs") }}
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Contact Info -->
        <div class="space-y-4">
          <h3 class="font-bold text-lg mb-4">{{ $t("contact") }}</h3>
          <div class="space-y-2 text-gray-300">
            <p class="flex items-center gap-2">
              <svg
                class="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              <span>+372 123 456 789</span>
            </p>
            <p class="flex items-center gap-2">
              <svg
                class="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <span>info@veosprinter.ee</span>
            </p>
            <p class="flex items-center gap-2">
              <svg
                class="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <span>Tallinn, Estonia</span>
            </p>
          </div>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div
        class="border-t border-red-800 mt-12 pt-8 text-center text-gray-300 text-sm"
      >
        <p>
          © {{ new Date().getFullYear() }} VeoSprinter.
          {{ $t("footer.allRightsReserved") }}
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const wastageTypes = [
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
