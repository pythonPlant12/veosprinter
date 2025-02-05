export default defineI18nConfig(() => ({
	legacy: false,
	locale: 'ee',
	messages: {
		ee: {
			welcome: 'Tervest',
			indexMainPhrase: 'Nutikas logistika - teie õige valik',
			indexMainText:
				'Veosprinter on spetsialiseerunud kvaliteetse ehitustehnika rendile, pakkudes usaldusväärseid sõidukeid ja seadmeid nii era- kui ka äriprojektidele. Meie lai masinapark teenindab töövõtjaid ja ehitajaid, pakkudes paindlikke renditingimusi ning tagades projektide edu kvaliteetse tehnika ja suurepärase teeninduse kaudu.',
			indexMainButton: 'Telli kohe',
			home: 'Avaleht',
			services: 'Teenused',
			pricing: 'Hinnakiri',
			aboutUs: 'Meist',
			contact: 'Kontakt',
			orderButton: 'Telli',
			index: {
				secondComponent: {
					title: 'Kuumad Pakkumised'
				}
			},
			order: {
				request: 'Tellimus',
				contact: 'Kontaktandmed',
				confirm: 'Kinnita tellimus',
				payment: 'Maksmine',
				checkout: 'Kontrolli tellimust',
				form: {
					estonianAddressLabel: 'Eesti aadress',
					estonianAddressInput: 'Sisesta oma aadress',
					estonianAddressDescription: 'Vali aadress kirjutades',
					selectContainer: 'Vali Konteiner',
					container: 'Konteiner',
					typeOfWasteLabel: 'Jäätmete tüüp',
					typeOfWasteInput: 'Vali jäätmete tüüp',
					chooseDateAndTimeFrom: 'Vali alguskuupäev ja kellaaeg',
					chooseDateAndTimeTo: 'Vali lõppkuupäev ja kellaaeg',
					date: 'Kuupäev',
					time: 'Kellaaeg',
					continue: 'Jätka',
					makeYourOrder: 'Tee oma tellimus',
					orderStep: {
						errors: {
							addressFromSuggestions: 'Aadress soovituste seast on kohustuslik',
							selectContainer: 'Konteiner on kohustuslik',
							selectWasteType: 'Jäätme tüüp on kohustuslik',
							selectDateFrom: 'Alguskuupäev on kohustuslik',
							selectTimeFrom: 'Algusaeg on kohustuslik',
							selectDateTo: 'Lõppkuupäev on kohustuslik',
							selectTimeTo: 'Lõppaeg on kohustuslik',
							endDateAfterStartDate:
								'Lõppkuupäev peab olema pärast alguskuupäeva',
							endTimeAfterStartTime: 'Lõppaeg peab olema pärast algusaega'
						}
					}
				},
				summary: {
					title: 'Tellimuse kokkuvõte',
					container: 'Konteiner',
					rentalPeriod: 'Rendiperiood',
					rentalPrice: 'Rendihind',
					mileage: 'Läbisõit',
					taxes: 'Käibemaks',
					total: 'Kokku',
					finalPrice: 'Lõplik hind',
					additionalWeight: 'Lisakaal',
					dateFrom: 'Alates',
					dateTo: 'Kuni'
				}
			}
		},
		ru: {
			welcome: 'Здравствуйте',
			indexMainPhrase: 'Интеллектуальные логистические решения для вас',
			indexMainText:
				'Veosprinter специализируется на аренде премиальной строительной техники, предоставляя надёжные транспортные средства и оборудование для жилищных и коммерческих проектов. Наш обширный автопарк обслуживает подрядчиков и строителей, предлагая гибкие условия аренды и гарантируя успех проектов благодаря качественной технике и превосходному сервису.',
			indexMainButton: 'Заказать',
			home: 'Главная',
			services: 'Услуги',
			pricing: 'Цены',
			aboutUs: 'О нас',
			contact: 'Контакт',
			orderButton: 'Заказать',
			index: {
				secondComponent: {
					title: 'Горячие предложения'
				}
			},
			order: {
				request: 'Заказ',
				contact: 'Данные',
				confirm: 'Подтверждение',
				payment: 'Оплата',
				checkout: 'Проверьте заказ',
				form: {
					estonianAddressLabel: 'Эстонский адрес',
					estonianAddressInput: 'Введите ваш адрес',
					estonianAddressDescription:
						'Выберите ваш адрес из списка при написании',
					selectContainer: 'Выберите контейнер',
					container: 'Контейнер',
					typeOfWasteLabel: 'Тип отходов',
					typeOfWasteInput: 'Выберите тип отходов',
					chooseDateAndTimeFrom: 'Выберите дату и время начала',
					chooseDateAndTimeTo: 'Выберите дату и время окончания',
					date: 'Дата',
					time: 'Время',
					continue: 'Продолжить',
					makeYourOrder: 'Сделайте ваш заказ',
					orderStep: {
						errors: {
							addressFromSuggestions:
								'Адрес из предложений обязателен для заполнения',
							selectContainer: 'Контейнер обязателен для заполнения',
							selectWasteType: 'Типы отходов обязателен для заполнения',
							selectDateFrom: 'Дата начала обязательно для заполнения',
							selectTimeFrom: 'Время начала обязательно для заполнения',
							selectDateTo: 'Дата окончания обязательно для заполнения',
							selectTimeTo: 'Время окончания обязательно для заполнения',
							endDateAfterStartDate:
								'Дата окончания должна быть позже даты начала',
							endTimeAfterStartTime:
								'Время окончания должно быть позже времени начала'
						}
					}
				},
				summary: {
					title: 'Сводка заказа',
					container: 'Контейнер',
					rentalPeriod: 'Срок аренды',
					rentalPrice: 'Цена аренды',
					taxes: 'НДС',
					mileage: 'Киломентраж',
					total: 'Итого',
					finalPrice: 'Итоговая цена',
					additionalWeight: 'Дополнительный вес',
					dateFrom: 'От',
					dateTo: 'До'
				}
			}
		},
		en: {
			welcome: 'Welcome',
			indexMainPhrase: 'Your choice for intelligent logistics',
			indexMainText:
				'Veosprinter specializes in premium construction equipment rentals, providing reliable vehicles and machinery for residential and commercial projects. Our extensive fleet serves contractors and builders with flexible rental solutions, ensuring project success through quality equipment and superior service.',
			indexMainButton: 'Order',
			home: 'Home',
			services: 'Services',
			pricing: 'Pricing',
			aboutUs: 'About Us',
			contact: 'Contact',
			orderButton: 'Order',
			index: {
				secondComponent: {
					title: 'Special Offers'
				}
			},
			order: {
				request: 'Order',
				contact: 'Contact',
				confirm: 'Confirm Order',
				payment: 'Payment',
				checkout: 'Checkout',
				form: {
					estonianAddressLabel: 'Estonian Address',
					estonianAddressInput: 'Enter your address',
					estonianAddressDescription:
						'Select your address from the list when typing',
					selectContainer: 'Select Container',
					chooseDateAndTimeFrom: 'Choose start date and time',
					chooseDateAndTimeTo: 'Choose end date and time',
					date: 'Date',
					time: 'Time',
					container: 'Container',
					typeOfWasteLabel: 'Type of Waste',
					typeOfWasteInput: 'Select type of waste',
					continue: 'Continue',
					makeYourOrder: 'Make your order',
					orderStep: {
						errors: {
							addressFromSuggestions: 'Address from suggestions is required',
							selectContainer: 'Container field is required',
							selectWasteType: 'Waste type field is required',
							selectDateFrom: 'Start date is required',
							selectTimeFrom: 'Start time is required',
							selectDateTo: 'End date is required',
							selectTimeTo: 'End time is required',
							endDateAfterStartDate: 'End date must be after start date',
							endTimeAfterStartTime: 'End time must be after start time'
						}
					}
				},
				summary: {
					title: 'Order Summary',
					container: 'Container',
					rentalPeriod: 'Rental Period',
					rentalPrice: 'Rental Price',
					mileage: 'Mileage',
					taxes: 'Taxes',
					total: 'Total',
					finalPrice: 'Final Price',
					additionalWeight: 'Additional Weight',
					dateFrom: 'From',
					dateTo: 'To'
				}
			}
		}
	}
}))
