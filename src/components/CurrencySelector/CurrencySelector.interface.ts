export interface CurrencySelectorProps {
  currentCurrency: 'USD' | 'RUB' | 'EUR';
  onChangeCurrency: (currency: 'USD' | 'RUB' | 'EUR') => void;
}
