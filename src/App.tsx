import { useEffect, useState } from 'react';

import Ticket from './components/Ticket/Ticket';
import StopsFilter from './components/StopsFilter/StopsFilter';
import SortByPrice from './components/SortByPrice/SortByPrice';
import CurrencySelector from './components/CurrencySelector/CurrencySelector';

import { TicketProps } from './components/Ticket/Ticket.interface';
import ticketsData from './assets/database/tickets.json';

import './App.css';

// сортировка билетов по цене
const sortTickets = (tickets: TicketProps[], order: 'asc' | 'desc') => {
  return [...tickets].sort((a, b) => (order === 'asc' ? a.price - b.price : b.price - a.price));
};
// фильтрация билетов по количеству пересадок
const filterTickets = (tickets: TicketProps[], stops: number[]) => {
  return tickets.filter(
    (ticket) => stops.length === 0 || stops.includes(-1) || stops.includes(ticket.stops),
  );
};
function App() {
  const [sortedTickets, setSortedTickets] = useState<TicketProps[]>([]);
  const [selectedStops, setSelectedStops] = useState<number[]>([-1]);
  const [currentCurrency, setCurrentCurrency] = useState<'USD' | 'RUB' | 'EUR'>('RUB');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');

  useEffect(() => {
    setSortedTickets(sortTickets(ticketsData, sortOrder));
  }, [sortOrder]);

  const filteredTickets = filterTickets(sortedTickets, selectedStops);

  return (
    <>
      <header className="header">
        <h1 className="header__title">SkySeeker</h1>
        <p className="header__tagline">Поиск авиабилетов</p>
      </header>
      <main className="main">
        <div className="filter-list">
          <StopsFilter selectedStops={selectedStops} onChange={setSelectedStops} />
          <SortByPrice sortOrder={sortOrder} onChange={setSortOrder} />
          <CurrencySelector
            currentCurrency={currentCurrency}
            onChangeCurrency={setCurrentCurrency}
          />
        </div>
        <div className="tickets-list">
          {filteredTickets.map((ticket: TicketProps) => (
            <Ticket key={ticket.id} {...ticket} currentCurrency={currentCurrency} />
          ))}
        </div>
      </main>
    </>
  );
}

export default App;
