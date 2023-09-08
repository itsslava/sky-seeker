import React from 'react';
import styles from './SortByPrice.module.css';
import { SortByPriceProps } from './SortByPrice.interface';

const SortByPrice: React.FC<SortByPriceProps> = ({ sortOrder, onChange }) => {
  return (
    <div className={styles.price_ie11}>
      <h3 className={styles.price_title}>Сортировка по цене</h3>
      <div className={styles.wrapper}>
        <button
          className={`${styles.button} ${sortOrder === 'asc' ? styles.active : ''}`}
          onClick={() => onChange('asc')}
        >
          По возрастанию
        </button>
        <button
          className={`${styles.button} ${sortOrder === 'desc' ? styles.active : ''}`}
          onClick={() => onChange('desc')}
        >
          По убыванию
        </button>
      </div>
    </div>
  );
};

export default SortByPrice;
