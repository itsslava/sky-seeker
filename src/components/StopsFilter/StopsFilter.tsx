import React from 'react';
import styles from './StopsFilter.module.css';
import { StopsFilterProps } from './StopsFilter.interface';

const stopsOptions = [
  { value: -1, label: 'Все билеты' },
  { value: 0, label: 'Без пересадок' },
  { value: 1, label: '1 пересадка' },
  { value: 2, label: '2 пересадки' },
  { value: 3, label: '3 пересадки' },
];

const StopsFilter: React.FC<StopsFilterProps> = ({ selectedStops, onChange }) => {
  const handleCheckboxChange = (stopCount: number) => {
    if (stopCount === -1) {
      onChange([-1]);
    } else {
      if (selectedStops.includes(-1)) {
        onChange([stopCount]);
      } else if (selectedStops.includes(stopCount)) {
        const updatedStops = selectedStops.filter((stop) => stop !== stopCount);
        onChange(updatedStops.length === 0 ? [-1] : updatedStops);
      } else {
        onChange([...selectedStops, stopCount]);
      }
    }
  };

  return (
    <div>
      <h3 className={styles.stops_title}>Количество пересадок</h3>
      {stopsOptions.map((option) => (
        <div className={styles.input_wrapper} key={option.value}>
          <input
            className={styles.custom_checkbox}
            type="checkbox"
            id={`stop-${option.value}`}
            checked={selectedStops.includes(option.value)}
            onChange={() => handleCheckboxChange(option.value)}
            aria-label={option.label}
          />
          <label className={styles.custom_label} htmlFor={`stop-${option.value}`}>
            {option.label}
            <span className={styles.checkmark}></span>
          </label>
        </div>
      ))}
    </div>
  );
};

export default StopsFilter;
