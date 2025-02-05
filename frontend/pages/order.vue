<script setup lang="ts">
import { BookUser, CreditCard, Truck } from 'lucide-vue-next'

import {
	Stepper,
	StepperIndicator,
	StepperItem,
	StepperSeparator,
	StepperTitle,
	StepperTrigger
} from '@/components/ui/stepper'

import ContactForm from '~/components/order/contact-form.vue'
import PaymentForm from '~/components/order/payment-form.vue'

const { t } = useI18n()
const orderFormData = ref(null)
const currentStep = ref(1)

function handleOrderSubmit(data) {
	orderFormData.value = data
	console.log(orderFormData.value)
	// Move to next step
	currentStep.value = 2
}

const steps = [
	{
		step: 1,
		title: t('order.request'),
		description: 'Add your address here',
		icon: BookUser
	},
	{
		step: 2,
		title: t('order.contact'),
		description: 'Set your preferred shipping method',
		icon: Truck
	},
	{
		step: 3,
		title: t('order.payment'),
		description: 'Confirm your order',
		icon: CreditCard
	}
]
</script>

<template>
	<div class="max-w-full md:max-w-[1400px] mx-auto md:px-12 mt-12">
		<div>
			<p class="text-center text-2xl my-8">
				{{ t('order.form.makeYourOrder') }}
			</p>
		</div>
		<div class="flex flex-col lg:flex-row gap-12">
			<div class="calculator w-full lg:w-2/3 relative">
				<Stepper v-model="currentStep" class="">
					<StepperItem
						v-for="item in steps"
						:key="item.step"
						:disabled="true"
						class="basis-1/3 flex justify-self-center gap-12 sm:gap-16 md:ml-20 mx-auto ml-6 sm:ml-12"
						:step="item.step"
					>
						<StepperTrigger class="m-0 p-0">
							<StepperIndicator>
								<component :is="item.icon" class="w-4 h-4" />
							</StepperIndicator>
							<div class="flex flex-col">
								<StepperTitle class="text-xs">
									{{ item.title }}
								</StepperTitle>
							</div>
						</StepperTrigger>
						<StepperSeparator
							v-if="item.step !== steps[steps.length - 1].step"
							class="w-full h-px"
						/>
					</StepperItem>
				</Stepper>

				<Transition
					mode="out-in"
					enter-active-class="transition-all duration-300 ease-in-out"
					enter-from-class="opacity-0 translate-x-6"
					enter-to-class="opacity-100 translate-x-0"
					leave-active-class="transition-all duration-300 ease-in-out"
					leave-from-class="opacity-100 translate-x-0"
					leave-to-class="opacity-0 -translate-x-6"
				>
					<!-- Conditional rendering based on current step -->
					<div v-if="currentStep === 1">
						<order-form @submit-order="handleOrderSubmit" />
					</div>
					<div v-else-if="currentStep === 2">
						<contact-form
							:order-data="orderFormData"
							@submit-contact="
								data => {
									// Handle contact form submission
									console.log('Contact data:', data)
									currentStep = 3
								}
							"
						/>
					</div>
					<div v-else-if="currentStep === 3">
						<payment-form
							:order-data="orderFormData"
							@submit-payment="
								data => {
									// Handle payment form submission
									console.log('Payment data:', data)
								}
							"
						/>
					</div>
				</Transition>
			</div>
			<div>
				<Separator class="" orientation="vertical" />
			</div>
			<div class="price w-full lg:w-1/3 flex justify-center">
				<order-summary :t="t" />
			</div>
		</div>
	</div>
</template>
