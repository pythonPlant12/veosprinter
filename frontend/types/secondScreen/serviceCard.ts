export interface ServiceCard {
	id: number
	title: string
	subtitle: string
	price: string
	descriptions: ServiceDescription[]
}

interface ServiceDescription {
	title: string
	description: string
}
