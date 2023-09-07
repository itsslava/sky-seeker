import './App.css';
import Ticket from './components/Ticket/Ticket';

function App() {
  return (
    <>
      <header className="header">
        <h1 className="header__title">SkySeeker</h1>
        <p className="header__tagline">Поиск авиабилетов</p>
      </header>
      <main className="main">
        <Ticket
          id={'1'}
          price={5500}
          carrierCode={'carrier1'}
          departure_time={'08:30'}
          arrival_time={'15:45'}
          departure_date={'08/10/2023'}
          arrival_date={'08/10/2023'}
          stops={0}
          departure_city={{ code: 'VVO', name: 'Владивосток' }}
          arrival_city={{ code: 'TLV', name: 'Тель-Авив' }}
          currentCurrency={'RUB'}
        />
      </main>
    </>
  );
}

export default App;
