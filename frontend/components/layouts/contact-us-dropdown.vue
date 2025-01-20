<script setup lang="ts">
import { Icon } from '@iconify/vue'

import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'

import { Button } from '~/components/ui/button'

const colorMode = useColorMode()
</script>

<template>
	<div>
		<DropdownMenu>
			<DropdownMenuTrigger as-child>
				<Button variant="default" class="h-14 w-14">
					<Icon
						icon="mdi:contacts"
						class="h-[1.2rem] w-[1.2rem] scale-100 transition-all dark:hidden"
					/>
					<Icon
						color="white"
						icon="mdi:contacts"
						class="h-[1.2rem] w-[1.2rem] rotate-0 scale-0 transition-all dark:scale-100 hidden dark:block"
					/>
					<span class="sr-only">Toggle theme</span>
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent align="center" class="min-w-2">
				<DropdownMenuItem class="p-0" @click="colorMode.preference = 'light'">
					<Button variant="outline">
						<Icon icon="mdi:phone" class="h-[1.5rem] w-[1.5rem] dark:hidden" />
						<Icon
							icon="mdi:phone"
							color="white"
							class="h-[1.5rem] w-[1.5rem] hidden dark:block"
						/>
					</Button>
				</DropdownMenuItem>
				<DropdownMenuItem class="p-0 my-2">
					<Button variant="outline">
						<Icon
							icon="mdi:whatsapp"
							color="#25D366"
							class="h-[1.5rem] w-[1.5rem]"
						/>
					</Button>
				</DropdownMenuItem>
				<DropdownMenuItem class="p-0" @click="colorMode.preference = 'system'">
					<Button variant="outline">
						<Icon icon="mdi:email" class="h-[1.5rem] w-[1.5rem] dark:hidden" />
						<Icon
							icon="mdi:email"
							class="h-[1.5rem] w-[1.5rem] dark:block hidden"
							color="white"
						/>
					</Button>
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	</div>
</template>
