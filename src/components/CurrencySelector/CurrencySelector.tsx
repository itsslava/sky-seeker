import { CurrencySelectorProps } from './CurrencySelector.interface';
import styles from './CurrencySelector.module.css';

const CurrencySelector: React.FC<CurrencySelectorProps> = ({
  currentCurrency,
  onChangeCurrency,
}) => {
  return (
    <div className={styles.currency_ie11}>
      <h3 className={styles.currency_title}>Валюта</h3>
      <div className={styles.currency_container}>
        {['USD', 'RUB', 'EUR'].map((currency) => (
          <button
            key={currency}
            className={`${styles.button} ${currentCurrency === currency ? styles.active : ''}`}
            onClick={() => onChangeCurrency(currency as 'USD' | 'RUB' | 'EUR')}
          >
            {currency}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CurrencySelector;
