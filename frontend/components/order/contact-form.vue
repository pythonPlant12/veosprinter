<template>
	<div>
		<Card
			:class="cn('w-[380px]', $attrs.class ?? '')"
			class="mx-auto md:w-full mt-8 p-6 relative pb-24 shadow-lg min-h-[550px]"
		>
			<form @submit.prevent="onSubmit">
				<!-- Name text input -->
				<FormField v-slot="{ errorMessage, componentField }" name="name">
					<FormItem class="mt-4">
						<FormLabel class="ml-2">{{
							$t('order.form.contactStep.name')
						}}</FormLabel>
						<Input type="text" v-bind="componentField" />
						<FormMessage class="ml-2">{{ errorMessage }}</FormMessage>
					</FormItem>
				</FormField>

				<!-- Surname text input -->
				<FormField v-slot="{ errorMessage, componentField }" name="surname">
					<FormItem class="mt-2">
						<FormLabel class="ml-2">{{
							$t('order.form.contactStep.surname')
						}}</FormLabel>
						<Input type="text" v-bind="componentField" />
						<FormMessage class="ml-2">{{ errorMessage }}</FormMessage>
					</FormItem>
				</FormField>

				<!-- Phone  input -->
				<FormField v-slot="{ errorMessage, componentField }" name="phone">
					<FormItem class="mt-2">
						<FormLabel class="ml-2">{{
							$t('order.form.contactStep.phone')
						}}</FormLabel>
						<Input
							type="text"
							:placeholder="t('order.form.contactStep.inputs.phone')"
							v-bind="componentField"
						/>
						<FormMessage class="ml-2">{{ errorMessage }}</FormMessage>
					</FormItem>
				</FormField>

				<!-- Email  input -->
				<FormField v-slot="{ errorMessage, componentField }" name="email">
					<FormItem class="mt-2">
						<FormLabel class="ml-2">{{
							$t('order.form.contactStep.email')
						}}</FormLabel>
						<Input
							type="email"
							placeholder="email@mail.com"
							v-bind="componentField"
						/>
						<FormMessage class="ml-2">{{ errorMessage }}</FormMessage>
					</FormItem>
				</FormField>

				<!-- Additional Info  input -->
				<FormField
					v-slot="{ errorMessage, componentField }"
					name="additionalInfo"
				>
					<FormItem class="mt-2">
						<FormLabel class="ml-2">{{
							$t('order.form.contactStep.additionalInfo')
						}}</FormLabel>
						<Textarea type="text" v-bind="componentField" />
						<FormMessage class="ml-2">{{ errorMessage }}</FormMessage>
					</FormItem>
				</FormField>
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
import { useForm } from 'vee-validate'

import { Button } from '~/components/ui/button'
import { cn } from '~/lib/utils'

const { t } = useI18n()

// Form validation setup
const {
	handleSubmit,
	values: formData,
	meta
} = useForm({
	initialValues: {
		name: '',
		surname: '',
		email: '',
		phone: '',
		additionalInfo: ''
	},
	validationSchema: {
		name: value => {
			if (!value) return t('order.form.contactStep.errors.name')
			return true
		},
		surname: value => {
			if (!value) return t('order.form.contactStep.errors.surname')
			return true
		},
		email: value => {
			if (!value) return t('order.form.contactStep.errors.email')
			if (!/^[\w.-]+@([\w-]+\.)+[\w-]{2,4}$/g.test(value)) {
				return t('order.form.contactStep.errors.validEmail')
			}
			return true
		},
		phone: value => {
			if (!value) return t('order.form.contactStep.errors.phone')
			if (value?.length > 15 || value?.length < 5 || !/[0-9-]+/.test(value)) {
				return t('order.form.contactStep.errors.validPhone')
			}

			return true
		}
	},
	validateOnMount: false,
	validateOnInput: true,
	validateOnChange: true,
	validateOnBlur: true
})

const onSubmit = handleSubmit(_ => {
	const formattedData = {
		name: formData.name,
		surname: formData.surname,
		email: formData.email,
		phone: formData.phone,
		additionalInfo: formData.additionalInfo
	}
	console.log('formattedData:', formattedData)
	// emit('submit-order', formattedData)
})
</script>

<style scoped></style>
