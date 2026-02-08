import { Product, Category, Currency, Review } from './types';

export const CATEGORIES: Category[] = [
  'All',
  'Cars',
  'Phones',
  'Clothing',
  'Games',
  'Electronics',
  'Real Estate',
  'Furniture',
  'Others'
];

export const CATEGORY_LABELS: Record<Category, string> = {
  'All': 'All',
  'Cars': 'Cars',
  'Phones': 'Phones',
  'Clothing': 'Clothing',
  'Games': 'Games',
  'Electronics': 'Electronics',
  'Real Estate': 'Real Estate',
  'Furniture': 'Furniture',
  'Others': 'Others'
};

export const CURRENCIES: Currency[] = [
  { code: 'USD', symbol: '$', rate: 1, label: 'US Dollar' },
  { code: 'SAR', symbol: 'SR', rate: 3.75, label: 'Saudi Riyal' },
  { code: 'EGP', symbol: 'EGP', rate: 48.50, label: 'Egyptian Pound' },
  { code: 'AED', symbol: 'AED', rate: 3.67, label: 'UAE Dirham' },
  { code: 'EUR', symbol: '€', rate: 0.92, label: 'Euro' },
];

export const COUNTRY_CODES = [
  { code: '1', country: 'USA', flag: '🇺🇸', iso: 'US' },
  { code: '966', country: 'Saudi Arabia', flag: '🇸🇦', iso: 'SA' },
  { code: '20', country: 'Egypt', flag: '🇪🇬', iso: 'EG' },
  { code: '971', country: 'UAE', flag: '🇦🇪', iso: 'AE' },
  { code: '44', country: 'UK', flag: '🇬🇧', iso: 'GB' },
];

export const INITIAL_PRODUCTS: Product[] = [];