<!-- components/FaqComponent.vue -->
<script setup lang="ts">
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems = Array.from({ length: 10 }, (_, i) => ({
  id: `item-${i + 1}`,
  questionKey: `q${i + 1}`,
  answerKey: `a${i + 1}`,
}));
</script>

<template>
  <div class="bg-white dark:bg-neutral-900 pb-4 md:py-16">
    <div class="max-w-4xl mx-auto px-4 z-20 relative">
      <h2 class="text-3xl font-bold text-center mb-12">
        {{ $t("faq.title") }}
      </h2>

      <Accordion type="single" collapsible class="w-full space-y-4">
        <AccordionItem
          v-for="item in faqItems"
          :key="item.id"
          :value="item.id"
          class="border rounded-lg p-2 bg-neutral-50 dark:bg-neutral-800"
        >
          <AccordionTrigger class="text-lg font-medium px-4">
            {{ $t(`faq.questions.${item.questionKey}`) }}
          </AccordionTrigger>
          <AccordionContent class="px-4 text-neutral-600 dark:text-neutral-300">
            {{ $t(`faq.questions.${item.answerKey}`) }}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  </div>
</template>
