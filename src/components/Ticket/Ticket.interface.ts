export interface TicketProps {
  id: string;
  price: number;
  carrierCode: string;
  departure_time: string;
  arrival_time: string;
  departure_date: string;
  arrival_date: string;
  stops: number;
  departure_city: City;
  arrival_city: City;
  currentCurrency?: 'USD' | 'RUB' | 'EUR';
}

interface City {
  code: string;
  name: string;
}
