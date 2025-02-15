<script setup lang="ts">
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

defineProps<{
  title: string;
  subtitle: string;
  price: string;
  descriptions: ServiceDescription[];
}>();
</script>

<template>
  <Card :class="cn('w-[340px]', $attrs.class ?? '')" class="shadow-xl">
    <CardHeader>
      <CardTitle class="text-2xl text-red-800">{{ title }}</CardTitle>
      <Separator class="my-1" />

      <p class="text-4xl">
        <span class="text-sm">Alates </span
        ><span class="font-semibold text-1xl">{{ price }}</span
        ><span class="text-sm">EUR / transport</span>
      </p>
      <Button :variant="'default'" class="w-full mt-2">
        <img
          src="/icons/track.svg"
          class="mr-2 h-4 w-4 text-white"
          alt="track icon"
        >
        Broneeri
      </Button>
    </CardHeader>
    <CardContent class="grid gap-4">
      <div>
        <div
          v-for="(notification, index) in descriptions"
          :key="index"
          class="mb-4 grid grid-cols-[25px_minmax(0,1fr)] items-start pb-1 last:mb-0 last:pb-0"
        >
          <span class="flex h-2 w-2 translate-y-1 rounded-full bg-gray-500" />
          <div class="space-y-1">
            <p class="text-sm font-medium leading-none text-gray-700">
              {{ notification.title }}
            </p>
            <p class="text-sm text-muted-foreground">
              {{ notification.description }}
            </p>
          </div>
        </div>
      </div>
    </CardContent>
  </Card>
</template>
