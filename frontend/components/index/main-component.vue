<template>
  <div class="min-h-screen">
    <div class="flex flex-row justify-center -mt-4">
      <div
        class="min-h-[65vh] w-full flex flex-col md:flex-row gap-20 relative max-w-[1400px] mx-4 md:mx-16"
      >
        <!-- Text container -->
        <div
          class="flex-1 relative inset-0 md:relative flex md:items-center justify-center z-10"
        >
          <div
            class="absolute md:relative md:block top-1/4 sm:mt-20 md:mt-0 md:top-0"
          >
            <h1
              class="text-red-900 dark:text-red-500 text-5xl md:text-6xl mb-4 mt-8 fade-in-delay-1 font-bold"
            >
              Veosprinter
            </h1>
            <h3
              class="text-red-950 dark:text-red-600 text-xl md:text-2xl z-10 md:z-0 fade-in-delay-2"
            >
              {{ $t("indexMainPhrase") }}
            </h3>
            <p
              class="text-xs md:text-sm leading-relaxed max-w-prose mt-4 text-gray-500 dark:text-gray-300 fade-in-delay-3"
            >
              {{ $t("indexMainText") }}
            </p>
          </div>
        </div>
        <!-- Image container -->
        <div
          class="flex-1 h-screen md:h-auto relative flex items-center justify-center"
        >
          <img
            alt="Container"
            src="/index/open_container_image.webp"
            class="w-full h-full object-cover md:object-contain fade-in-delay-4"
          />
          <div class="absolute inset-0 md:hidden" />
        </div>
      </div>
    </div>
    <div class="max-w-1400px flex justify-center">
      <button
        class="bg-primary text-white px-20 py-3 rounded-xl hover:bg-red-800 transition duration-200 fade-in-delay-5 shadow-lg shadow-red-900"
      >
        {{ $t("indexMainButton") }}
      </button>
    </div>
    <div>
      <div
        class="flex justify-center mt-10 cursor-pointer"
        @click="$emit('scroll-to-second')"
      >
        <div class="relative">
          <!-- First Arrow (Top) -->
          <svg
            class="w-8 h-8 animate-bounce-4 text-red-950/30"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
          >
            <path d="M5 12l7 7 7-7" />
          </svg>
          <!-- Second Arrow (Middle) -->
          <svg
            class="w-8 h-8 animate-bounce-3 text-red-950/60 absolute top-2 left-0"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
          >
            <path d="M5 12l7 7 7-7" />
          </svg>
          <!-- Third Arrow (Bottom) -->
          <svg
            class="w-8 h-8 animate-bounce-2 text-red-950 absolute top-4 left-0"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
          >
            <path d="M5 12l7 7 7-7" />
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts"></script>
<style>
// Animation for the arrows
.animate-bounce-2 {
  animation: bounce 2s infinite;
  animation-delay: 0.1s;
}

.animate-bounce-3 {
  animation: bounce 2s infinite;
  animation-delay: 0.2s;
}

.animate-bounce-4 {
  animation: bounce 2s infinite;
  animation-delay: 0.4s;
}

@keyframes bounce {
  0%,
  20%,
  50%,
  80%,
  100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-12px);
  }
  60% {
    transform: translateY(-6px);
  }
}
</style>
