import aeroflot from '../assets/img/airlines/aeroflot.png';
import s7 from '../assets/img/airlines/s7-airlines.png';
import turkish from '../assets/img/airlines/turkish-airlines.png';

// коды для подставвления логотипа авиакомпании в тикет
type CarriersLogos = {
  [carrierCode: string]: string;
};

export const CARRIERS_LOGOS: CarriersLogos = {
  carrier1: aeroflot,
  carrier2: s7,
  carrier3: turkish,
};

// конвертер валют для тикета
type ExchangeRates = {
  [currencyValue: string]: number;
};

export const EXCHANGE_RATES: ExchangeRates = {
  RUB: 1,
  USD: 0.013, // примерное значение, нужно будет обновить #TODO
  EUR: 0.011,
};

// символы валют для тикета
type CurrencySymbols = {
  [symbolValue: string]: string;
};

export const CURRENCY_SYMBOLS: CurrencySymbols = {
  USD: '$',
  RUB: '₽',
  EUR: '€',
};
