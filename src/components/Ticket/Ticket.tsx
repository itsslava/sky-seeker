import React from 'react';

import { TicketProps } from './Ticket.interface';
import { CARRIERS_LOGOS, CURRENCY_SYMBOLS, EXCHANGE_RATES } from '../../helpers/constants';
import { formatDate, formatPrice } from '../../utils/formatingFunctions';
import { getStopEnding } from '../../utils/endingFunction';

import stopsImg from '../../assets/img/stops.png';

import styles from './Ticket.module.css';

type TicketComponentProps = TicketProps & {
  currentCurrency: 'USD' | 'RUB' | 'EUR';
};

const Ticket: React.FC<TicketComponentProps> = (props) => {
  const {
    price,
    carrierCode,
    departure_time,
    arrival_time,
    departure_date,
    arrival_date,
    stops,
    departure_city,
    arrival_city,
    currentCurrency,
  } = props;

  const logoUrl = CARRIERS_LOGOS[carrierCode];
  const convertedPrice = (price * EXCHANGE_RATES[currentCurrency]).toFixed(2);

  return (
    <>
      <div className={styles.ticket_wrapper}>
        <div className={styles.ticket}>
          <div className={styles.ticket_controls}>
            <div className={styles.logo}>
              <img src={logoUrl} alt={`${carrierCode} logo`} />
            </div>
            <button className={styles.order_btn}>
              <span className={styles.btn_text}>Купить</span>
              <span className={styles.btn_price}>
                за {formatPrice(Number(convertedPrice))}
                {CURRENCY_SYMBOLS[currentCurrency]}
              </span>
            </button>
          </div>
          <div className={styles.ticket_info}>
            <div className={styles.departure}>
              <div className={styles.time}>{departure_time}</div>
              <div className={styles.city}>
                {departure_city.code}, {departure_city.name}
              </div>
              <div className={styles.date}>{formatDate(departure_date)}</div>
            </div>
            <div className={styles.transfer}>
              <div className={styles.transfer_count}>
                {stops === 0 ? getStopEnding(stops) : `${stops} ${getStopEnding(stops)}`}
              </div>
              <div className={styles.stop_img}>
                <img src={stopsImg} alt="" />
              </div>
            </div>
            <div className="arrival">
              <div className={styles.time}>{arrival_time}</div>
              <div className={styles.city}>
                {arrival_city.code}, {arrival_city.name}
              </div>
              <div className={styles.date}>{formatDate(arrival_date)}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Ticket;
