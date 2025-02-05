<template>
	<div>
		<Card
			:class="cn('w-[380px]', $attrs.class ?? '')"
			class="mx-auto md:w-full mt-8 p-6 relative pb-24 shadow-lg min-h-[550px]"
		>
			<form @submit.prevent="onSubmit">
				<!-- Selection of Address -->
				<FormField v-slot="{ errorMessage, componentField }" name="address">
					<FormItem>
						<FormLabel class="ml-2"
							>{{ $t('order.form.estonianAddressLabel') }}
						</FormLabel>
						<FormControl>
							<Input
								id="address-input"
								:model-value="formData.address"
								v-bind="componentField"
								:placeholder="t('order.form.estonianAddressInput')"
								@update:model-value="val => setFieldValue('address', val)"
							/>
						</FormControl>
						<FormMessage class="ml-2">{{ errorMessage }}</FormMessage>
					</FormItem>
				</FormField>

				<!-- Selection of container -->
				<FormField v-slot="{ errorMessage, componentField }" name="container">
					<FormItem class="mt-4">
						<FormLabel class="ml-2">{{ $t('order.form.container') }}</FormLabel>
						<Select
							:model-value="formData.container"
							v-bind="componentField"
							@update:model-value="val => setFieldValue('container', val)"
						>
							<FormControl>
								<SelectTrigger>
									<SelectValue :placeholder="t('order.form.selectContainer')" />
								</SelectTrigger>
							</FormControl>
							<SelectContent>
								<SelectGroup>
									<SelectItem value="30"> 30m²</SelectItem>
									<SelectItem value="20"> 20m²</SelectItem>
									<SelectItem value="15"> 15m²</SelectItem>
								</SelectGroup>
							</SelectContent>
						</Select>
						<FormMessage class="ml-2">{{ errorMessage }}</FormMessage>
					</FormItem>
				</FormField>

				<!-- Selection of type of wastage -->
				<FormField v-slot="{ errorMessage, componentField }" name="wasteType">
					<FormItem class="mt-4">
						<FormLabel class="ml-2"
							>{{ $t('order.form.typeOfWasteLabel') }}
						</FormLabel>
						<Select
							:model-value="formData.wasteType"
							v-bind="componentField"
							@update:model-value="val => setFieldValue('wasteType', val)"
						>
							<FormControl>
								<SelectTrigger>
									<SelectValue
										:placeholder="t('order.form.typeOfWasteInput')"
									/>
								</SelectTrigger>
							</FormControl>
							<SelectContent>
								<SelectGroup>
									<SelectItem value="1">Строительный мусор</SelectItem>
									<SelectItem value="2">Камень / Бетон / Грунт</SelectItem>
									<SelectItem value="3">Сортированное дерево</SelectItem>
									<SelectItem value="4">Бытовой мусор</SelectItem>
									<SelectItem value="5"
										>Древесные отходы/ветки/кусты</SelectItem
									>
									<SelectItem value="6"
										>Строительный мусор (Пенопласт/Вата)</SelectItem
									>
								</SelectGroup>
							</SelectContent>
						</Select>
						<FormMessage class="ml-2">{{ errorMessage }}</FormMessage>
					</FormItem>
				</FormField>

				<!-- Selection of date and time for beginning -->
				<p class="mt-4 ml-2 text-sm mb-2">
					{{ $t('order.form.chooseDateAndTimeFrom') }}
				</p>
				<div class="flex gap-4">
					<!-- Selection of date -->
					<FormField v-slot="{ errorMessage, componentField }" name="dateFrom">
						<FormItem class="max-w-min">
							<Popover>
								<PopoverTrigger as-child>
									<FormControl>
										<Button
											variant="outline"
											:class="
												cn(
													'md:w-[240px] w-[160px] ps-3 text-start font-normal',
													!formData.dateFrom && 'text-muted-foreground'
												)
											"
										>
											<span>{{
												formData.dateFrom
													? format(new Date(formData.dateFrom), 'dd/MM/yyyy')
													: $t('order.form.date')
											}}</span>
											<CalendarIcon class="ms-auto h-4 w-4 opacity-50" />
										</Button>
										<input v-bind="componentField" hidden />
									</FormControl>
								</PopoverTrigger>
								<PopoverContent class="w-auto p-0">
									<Calendar
										v-model:placeholder="placeholder"
										:model-value="formData.dateFrom"
										calendar-label="Start date"
										initial-focus
										:min-value="today(getLocalTimeZone())"
										:max-value="new CalendarDate(2030, 1, 1)"
										@update:model-value="val => setFieldValue('dateFrom', val)"
									/>
								</PopoverContent>
							</Popover>
							<FormMessage class="ml-2">{{ errorMessage }}</FormMessage>
						</FormItem>
					</FormField>

					<FormField v-slot="{ errorMessage, componentField }" name="timeFrom">
						<FormItem>
							<Select
								:model-value="formData.timeFrom"
								v-bind="componentField"
								@update:model-value="val => setFieldValue('timeFrom', val)"
							>
								<SelectTrigger class="md:w-[180px] w-[100px]">
									<SelectValue :placeholder="t('order.form.time')" />
								</SelectTrigger>
								<SelectContent>
									<SelectGroup>
										<SelectLabel>{{ $t('order.form.time') }}</SelectLabel>
										<SelectItem
											v-for="time in timeOptions"
											:key="time.value"
											:value="time.value"
										>
											{{ time.label }}
										</SelectItem>
									</SelectGroup>
								</SelectContent>
							</Select>
							<FormMessage class="ml-2">{{ errorMessage }}</FormMessage>
						</FormItem>
					</FormField>
				</div>

				<!-- Selection of date and time for end -->
				<p class="mt-4 ml-2 text-sm mb-2">
					{{ $t('order.form.chooseDateAndTimeTo') }}
				</p>
				<div class="flex gap-4">
					<FormField v-slot="{ errorMessage, componentField }" name="dateTo">
						<FormItem class="max-w-min">
							<Popover>
								<PopoverTrigger as-child>
									<FormControl>
										<Button
											variant="outline"
											:class="
												cn(
													'md:w-[240px] w-[160px] ps-3 text-start font-normal',
													!formData.dateTo && 'text-muted-foreground'
												)
											"
										>
											<span>{{
												formData.dateTo
													? format(new Date(formData.dateTo), 'dd/MM/yyyy')
													: $t('order.form.date')
											}}</span>
											<CalendarIcon class="ms-auto h-4 w-4 opacity-50" />
										</Button>
										<input v-bind="componentField" hidden />
									</FormControl>
								</PopoverTrigger>
								<PopoverContent class="w-auto p-0">
									<Calendar
										v-model:placeholder="placeholder"
										:model-value="formData.dateTo"
										calendar-label="End date"
										initial-focus
										:min-value="formData.dateFrom || today(getLocalTimeZone())"
										:max-value="new CalendarDate(2030, 1, 1)"
										@update:model-value="val => setFieldValue('dateTo', val)"
									/>
								</PopoverContent>
							</Popover>
							<FormMessage class="ml-2">{{ errorMessage }}</FormMessage>
						</FormItem>
					</FormField>

					<FormField v-slot="{ errorMessage, componentField }" name="timeTo">
						<FormItem>
							<Select
								:model-value="formData.timeTo"
								v-bind="componentField"
								@update:model-value="val => setFieldValue('timeTo', val)"
							>
								<SelectTrigger class="md:w-[180px] w-[100px]">
									<SelectValue :placeholder="t('order.form.time')" />
								</SelectTrigger>
								<SelectContent>
									<SelectGroup>
										<SelectLabel>{{ $t('order.form.time') }}</SelectLabel>
										<SelectItem
											v-for="time in timeOptions"
											:key="time.value"
											:value="time.value"
										>
											{{ time.label }}
										</SelectItem>
									</SelectGroup>
								</SelectContent>
							</Select>
							<FormMessage class="ml-2">{{ errorMessage }}</FormMessage>
						</FormItem>
					</FormField>
				</div>

				<!-- Continue button -->
				<div class="flex justify-center absolute bottom-6 w-full inset-x-0">
					<Button
						type="submit"
						:disabled="!meta.valid"
						class="py-4 text-md px-16"
						>{{ $t('order.form.continue') }}
					</Button>
				</div>
			</form>
		</Card>
	</div>
</template>

<script setup lang="ts">
import { CalendarDate, getLocalTimeZone, today } from '@internationalized/date'
import { CalendarIcon } from '@radix-icons/vue'
import { format } from 'date-fns'
import { useForm } from 'vee-validate'

import { Button } from '~/components/ui/button'
import { Input } from '~/components/ui/input'
import { cn } from '~/lib/utils'

const { t } = useI18n()
const selectedGooglePlace = ref(null)
const placeholder = ref()

const emit = defineEmits(['submit-order'])
// Form validation setup
const {
	handleSubmit,
	values: formData,
	setFieldValue,
	meta
} = useForm({
	initialValues: {
		address: '',
		container: '',
		wasteType: '',
		dateFrom: null,
		timeFrom: '',
		dateTo: null,
		timeTo: ''
	},
	validationSchema: {
		address: value => {
			if (
				!selectedGooglePlace.value ||
				!value ||
				selectedGooglePlace.value != value
			) {
				return t('order.form.orderStep.errors.addressFromSuggestions')
			}
			return true
		},
		container: value => {
			if (!value) return t('order.form.orderStep.errors.selectContainer')
			return true
		},
		wasteType: value => {
			if (!value) return t('order.form.orderStep.errors.selectWasteType')
			return true
		},
		dateFrom: value => {
			if (!value) return t('order.form.orderStep.errors.selectDateFrom')
			return true
		},
		timeFrom: value => {
			if (!value) return t('order.form.orderStep.errors.selectTimeFrom')
			return true
		},
		dateTo: value => {
			if (!value) return t('order.form.orderStep.errors.selectDateTo')
			if (formData.dateFrom) {
				const startDate = new Date(formData.dateFrom)
				const endDate = new Date(value)
				startDate.setHours(0, 0, 0, 0)
				endDate.setHours(0, 0, 0, 0)

				if (endDate < startDate) {
					return t('order.form.orderStep.errors.endDateAfterStartDate')
				}
			}
			return true
		},
		timeTo: value => {
			if (!value) return t('order.form.orderStep.errors.selectTimeTo')
			if (formData.dateFrom && formData.dateTo && formData.timeFrom && value) {
				if (
					new Date(formData.dateFrom).toDateString() ===
					new Date(formData.dateTo).toDateString()
				) {
					const [fromHour, fromMin] = formData.timeFrom.split(':').map(Number)
					const [toHour, toMin] = value.split(':').map(Number)

					if (toHour < fromHour || (toHour === fromHour && toMin <= fromMin)) {
						return t('order.form.orderStep.errors.endTimeAfterStartTime')
					}
				}
			}
			return true
		}
	},
	validateOnMount: false,
	validateOnInput: true,
	validateOnChange: true,
	validateOnBlur: true
})

// Google Places initialization
onMounted(() => {
	const script = document.createElement('script')
	script.async = true
	script.onload = initPlace
	script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyC8P6l-tshtz5aBiR1f3XZDFONv28KZglw&libraries=places`
	document.head.appendChild(script)
})
onUnmounted(() => {
	removeEventListener('place_changed', initPlace)
})

const initPlace = async () => {
	const autocomplete = new google.maps.places.Autocomplete(
		document.getElementById('address-input'),
		{
			componentRestrictions: { country: 'ee' },
			fields: ['formatted_address', 'geometry', 'address_components']
		}
	)

	autocomplete.addListener('place_changed', async () => {
		const selectedPlace = autocomplete.getPlace()
		selectedGooglePlace.value = selectedPlace.formatted_address
		setFieldValue('address', selectedPlace.formatted_address)
	})
}

// Time options computation
const timeOptions = computed(() => {
	const times = []
	for (let hour = 8; hour < 20; hour++) {
		for (let min = 0; min < 60; min += 30) {
			times.push({
				value: `${hour.toString().padStart(2, '0')}:${min.toString().padStart(2, '0')}`,
				label: `${hour.toString().padStart(2, '0')}:${min.toString().padStart(2, '0')}`
			})
		}
	}
	return times
})

const onSubmit = handleSubmit(_ => {
	const formattedData = {
		address: formData.address,
		container: formData.container,
		wasteType: formData.wasteType,
		dateFrom: formData.dateFrom ? new Date(formData.dateFrom) : null,
		timeFrom: formData.timeFrom,
		dateTo: formData.dateTo ? new Date(formData.dateTo) : null,
		timeTo: formData.timeTo,
		googlePlaceData: selectedGooglePlace.value
	}
	emit('submit-order', formattedData)
})
</script>

<style scoped></style>
