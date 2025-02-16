export interface ServiceCard {
  id: number;
  title: string;
  subtitle: string;
  price: string;
  descriptions: ServiceDescription[];
}

interface ServiceDescription {
  title: string;
  description: string;
}

export interface SpecialOffersApi {
  wastage: number;
  container: number;
  available_container_sizes: number[];
  wastage_name_ru: string;
  wastage_name_ee: string;
  wastage_name: string;
  included_days: number;
  extra_price_day: number;
  included_weight: number;
  extra_price_weight: number;
  price: number;
}
