<template>
	<div class="md:w-full">
		<Card
			class="bg-zinc-50 dark:bg-zinc-900 shadow-xl md:w-full"
			:class="cn('w-[380px]', $attrs.class ?? '')"
		>
			<CardHeader class="w-full">
				<CardTitle class="text-center text-red-900 dark:text-red-700"
					>{{ $t('order.summary.title') }}
				</CardTitle>
			</CardHeader>
			<CardContent class="grid gap-4 pb-0">
				<div
					class="flex items-center space-x-4 rounded-md border p-4 border-red-900"
				>
					<div class="flex-1 space-y-1">
						<p class="text-sm font-bold">
							{{ $t('order.summary.container') }}
						</p>
						<Separator />
						<p class="text-sm font-medium">Container 30m2</p>
						<p class="text-sm text-muted-foreground leading-none">
							2 тонны включительно
						</p>
						<p class="text-right font-bold">440.90 €</p>
					</div>
				</div>
				<!-- Additional -->
				<div>
					<div class="p-4 mb-4 items-start pb-4 border rounded-md">
						<!-- Kilometers -->
						<div class="flex justify-between space-y-1">
							<div>
								<p class="text-sm font-bold">
									{{ $t('order.summary.mileage') }}
								</p>
								<p class="text-sm text-muted-foreground">+ 200km</p>
							</div>
							<div class="">
								<p class="text-right font-bold">+ 44.90 €</p>
							</div>
						</div>
						<!-- Additional Weight -->
						<div class="flex justify-between space-y-1 mt-4">
							<div>
								<p class="text-sm font-bold">
									{{ $t('order.summary.additionalWeight') }}
								</p>
								<p class="text-sm text-muted-foreground">+ 2000 kg</p>
							</div>
							<div class="">
								<p class="text-right font-bold">+ 80.00 €</p>
							</div>
						</div>
						<!-- Rental Period -->
						<div class="mt-4">
							<p class="text-sm font-bold">
								{{ $t('order.summary.rentalPeriod') }}
							</p>
							<p class="text-sm text-muted-foreground">
								<span>{{ $t('order.summary.dateFrom') }}: </span
								><span class="font-bold">01/03/2025</span> - <span>08:00</span>
							</p>
							<p class="text-sm text-muted-foreground">
								{{ $t('order.summary.dateTo') }}:
								<span class="font-bold">03/03/2025</span> - <span>20:30</span>
							</p>
						</div>
					</div>
				</div>
			</CardContent>
			<Separator class="bg-gray-200" />
			<CardFooter class="pb-0">
				<div class="p-4 mb-4 items-start pb-4 w-full">
					<!-- Total price no taxes -->
					<div class="flex justify-between space-y-1">
						<div class="self-end">
							<p class="text-sm font-bold">
								{{ $t('order.summary.rentalPrice') }}
							</p>
						</div>
						<div>
							<p class="text-right font-bold">565.80 €</p>
						</div>
					</div>
					<!-- Taxes -->
					<div class="flex justify-between mt-1">
						<div class="self-end">
							<p class="text-sm font-bold">
								{{ $t('order.summary.taxes') }}
							</p>
						</div>
						<div class="">
							<p class="text-right font-bold">118.82 €</p>
						</div>
					</div>
					<!-- Total price with taxes -->
					<div class="flex justify-between mt-1">
						<div class="self-end">
							<p class="text-md font-bold text-red-900 dark:text-red-700">
								{{ $t('order.summary.finalPrice') }}
							</p>
						</div>
						<div class="">
							<p
								class="text-right font-bold text-red-900 dark:text-red-700 text-xl"
							>
								684.62 €
							</p>
						</div>
					</div>
					<button
						class="bg-primary w-full mt-6 text-white px-20 py-2 rounded-lg hover:bg-red-800 disabled:opacity-80 disabled:hover:bg-primary"
						disabled="true"
					>
						{{ $t('indexMainButton') }}
					</button>
				</div>
			</CardFooter>
		</Card>
	</div>
</template>
<script>
import { defineComponent } from 'vue'

import { cn } from '@/lib/utils'

export default defineComponent({
	methods: { cn }
})
</script>
<style></style>
