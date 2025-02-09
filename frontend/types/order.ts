export interface OrderData {
  name: string;
  name_ru: string;
  name_ee: string;
  description: string;
  description_ee: string;
  description_ru: string;
  price: number;
  included_weight: number;
  extra_weight: number;
  total_weight: number | null;
  price_extra_weight: number;
  total_price_extra_weight: number;
  included_days: number;
  price_extra_day: number;
  total_price_extra_day: number;
  extra_mileage: number;
  price_extra_mileage: number;
  total_price_extra_mileage: number;
  total_days: number;
  start_date: string | null;
  end_date: string | null;
  start_time: string | null;
  end_time: string | null;
  address: string | null;
  price_no_vat: number;
  vat: number;
  price_total: number;
}

export interface ContactData {
  name: string;
  surname: string;
  email: string;
  phone: string;
  additionalInfo: string;
}

export interface OrderDataForApi {
  start_date: object;
  start_time: string;
  end_date: object;
  end_time: string;
  included_days: number;
  price_extra_day: number;
  total_price_extra_day: number;
  total_days: number;
  address: string;
  wastage: number;
  container: number;
  description: string;
  extra_km: number;
  price_extra_km: number;
  price_total_extra_km: number;
  included_weight: number;
  extra_weight: number;
  total_weight: number;
  price_extra_weight: number;
  volume: number;
  price_no_vat: number;
  vat: number;
  price_total: number;
  customer: CustomerData;
}

interface CustomerData {
  name: string;
  surname: string;
  email: string;
  phone: string;
}
