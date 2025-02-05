<script setup lang="ts">
import ServiceCard from '~/components/index/service-card.vue'

const { elements: cards } = useIntersectionObserver()
const services: ServiceCard[] = [
	{
		id: 1,
		title: 'Ehituspraht',
		subtitle: 'Ehitusjäätmete äravedu',
		price: '€300',
		descriptions: [
			{
				title: 'Konteiner',
				description: 'Valik konteinereid: 15m³, 20m³, 30m³'
			},
			{
				title: 'Transport',
				description: 'Konteineri kohaletoimetamine ja äraviimine'
			},
			{
				title: 'Utiliseerimine',
				description: '2.5 tonni ehitusprügi + €75/tonn'
			},
			{
				title: 'Rent',
				description: '4. päevast €5/ööpäev, max kaal 13 tonni'
			}
		]
	},
	{
		id: 2,
		title: 'Kivi / Betoon / Pinnas',
		subtitle: 'Raskemate jäätmete äravedu',
		price: '€170',
		descriptions: [
			{
				title: 'Konteiner',
				description: '15m³ konteiner'
			},
			{
				title: 'Transport',
				description: 'Konteineri kohaletoimetamine ja äraviimine'
			},
			{
				title: 'Utiliseerimine',
				description: '13 tonni prügi utiliseerimine'
			},
			{
				title: 'Rent',
				description: '4. päevast €5/ööpäev, max kaal 13 tonni'
			}
		]
	},
	{
		id: 3,
		title: 'Eelsorteeritud Puit',
		subtitle: 'Puidujäätmete äravedu',
		price: '€140',
		descriptions: [
			{
				title: 'Konteiner',
				description: 'Valik konteinereid: 15m³, 20m³, 30m³'
			},
			{
				title: 'Transport',
				description: 'Konteineri kohaletoimetamine ja äraviimine'
			},
			{
				title: 'Utiliseerimine',
				description: '13 tonni puidu utiliseerimine'
			},
			{
				title: 'Rent',
				description: '4. päevast €5/ööpäev, max kaal 13 tonni'
			}
		]
	},
	{
		id: 4,
		title: 'Majapidamisprügi',
		subtitle: 'Majapidamisjäätmete äravedu',
		price: '€300',
		descriptions: [
			{
				title: 'Konteiner',
				description: 'Valik konteinereid: 15m³, 20m³, 30m³'
			},
			{
				title: 'Transport',
				description: 'Konteineri kohaletoimetamine ja äraviimine'
			},
			{
				title: 'Utiliseerimine',
				description: '2 tonni prügi + €85/tonn'
			},
			{
				title: 'Rent',
				description: '4. päevast €5/ööpäev, max kaal 13 tonni'
			}
		]
	},
	{
		id: 5,
		title: 'Puidujäätmed/Võsa',
		subtitle: 'Aia- ja puidujäätmete äravedu',
		price: '€140',
		descriptions: [
			{
				title: 'Konteiner',
				description: 'Valik konteinereid: 15m³, 20m³, 30m³'
			},
			{
				title: 'Transport',
				description: 'Konteineri kohaletoimetamine ja äraviimine'
			},
			{
				title: 'Utiliseerimine',
				description: '13 tonni puidu utiliseerimine'
			},
			{
				title: 'Rent',
				description: '4. päevast €5/ööpäev, max kaal 13 tonni'
			}
		]
	},
	{
		id: 6,
		title: 'Ehituspraht',
		subtitle: 'Isolatsioonimaterjalide äravedu',
		price: '€300',
		descriptions: [
			{
				title: 'Konteiner',
				description: 'Valik konteinereid: 15m³, 20m³, 30m³'
			},
			{
				title: 'Transport',
				description: 'Konteineri kohaletoimetamine ja äraviimine'
			},
			{
				title: 'Utiliseerimine',
				description: '2 tonni prügi + €85/tonn'
			},
			{
				title: 'Rent',
				description: '4. päevast €5/ööpäev, max kaal 13 tonni'
			}
		]
	}
]
</script>
<template>
	<div
		id="secondComponent"
		class="mx-12 lg:mx-auto max-w-[1400px] left-1/2 mb-40"
	>
		<div class="min-h-screen">
			<h1 class="text-4xl font-semibold text-primary text-center py-10">
				{{ $t('index.secondComponent.title') }}
			</h1>
			<div
				class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16 justify-items-center"
			>
				<service-card
					v-for="(service, index) in services"
					ref="cards"
					:key="service.id"
					:title="service.title"
					:subtitle="service.subtitle"
					:price="service.price"
					:descriptions="service.descriptions"
					class="opacity-0 hover:shadow-2xl duration-500 drop-shadow-xl dark:drop-shadow-xs dark:shadow-gray-800"
					:style="`animation-delay: ${index * 150}ms`"
				/>
			</div>
		</div>
	</div>
</template>
<style></style>
