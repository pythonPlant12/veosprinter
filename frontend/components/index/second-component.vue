<script setup lang="ts">
import { useIntersectionObserver } from "@vueuse/core";
import ServiceCard from "~/components/index/service-card.vue";
import type { SpecialOffersApi } from "~/types/secondScreen/serviceCard";

const cards = ref([]);
const specialOffers = ref<SpecialOffersApi[]>([]);
const containerRef = ref(null);
const { t } = useI18n();

watch(specialOffers, (newValue) => {
  if (newValue.length > 0) {
    const { stop } = useIntersectionObserver(
      containerRef,
      ([{ isIntersecting }]) => {
        if (isIntersecting) {
          cards.value.forEach((card, index) => {
            if (card && card.$el) {
              setTimeout(() => {
                card.$el.style.opacity = "1";
              }, index * 150);
            }
          });
        }
      },
      { threshold: 0.1 },
    );
  }
});

const getSpecialOffers = async () => {
  await $fetch("api/special-offers", {
    method: "GET",
  })
    .then((response: SpecialOffersApi[]) => {
      specialOffers.value = response;
      console.log(response);
    })
    .catch((error) => {
      console.error(error);
    });
};

const formatOfferData = (offer: WasteService) => {
  return {
    id: offer.wastage,
    title: offer.wastage_name,
    subtitle: t("services.transportSubtitle"),
    price: `€${offer.price}`,
    descriptions: [
      {
        title: t("services.container"),
        description: `${t("services.containerSizes")}: ${offer.available_container_sizes.join("m³, ")}m³`,
      },
      {
        title: t("services.transport"),
        description: t("services.transportDescription"),
      },
      {
        title: t("services.utilization"),
        description: `${offer.included_weight} ${t("services.tons")} + €${offer.extra_price_weight}/${t("services.perTon")}`,
      },
      {
        title: t("services.rent"),
        description: `${t("services.afterDays", { days: offer.included_days })} €${offer.extra_price_day}/${t("services.perDay")}`,
      },
    ],
  };
};

onMounted(async () => {
  await getSpecialOffers();
});
</script>

<template>
  <div id="secondComponent" class="relative py-12">
    <div
      class="content mx-12 lg:mx-auto max-w-[1400px] left-1/2 mb-40 relative z-10"
    >
      <div class="min-h-screen">
        <h1 class="text-4xl font-semibold text-center py-10 mb-10">
          {{ $t("index.secondComponent.title") }}
        </h1>
        <div
          ref="containerRef"
          class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16 justify-items-center"
        >
          <service-card
            v-for="(offer, index) in specialOffers"
            :key="offer.wastage"
            :ref="
              (el) => {
                cards[index] = el;
              }
            "
            :title="offer.wastage_name"
            :subtitle="t('services.transportSubtitle')"
            :price="`€${offer.price}`"
            :descriptions="formatOfferData(offer).descriptions"
            class="opacity-0 hover:shadow-2xl duration-500 drop-shadow-xl dark:drop-shadow-2xl dark:shadow-neutral-950"
            :style="`animation-delay: ${index * 150}ms`"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style>
#secondComponent {
  position: relative;
  left: 0;
}

#secondComponent::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgb(245 245 245); /* neutral-100 */
  transform: skewY(-10deg);
  transform-origin: top right;
  z-index: 1;
}

:root.dark #secondComponent::before {
  background-color: rgb(38 38 38); /* neutral-800 */
}

.content {
  left: 0;
}
</style>
