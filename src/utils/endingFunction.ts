export function getStopEnding(number: number): string {
  if (number === 0) return 'Без пересадок';

  const lastDigit = number % 10;
  switch (lastDigit) {
    case 1:
      return 'пересадка';
    case 2:
    case 3:
    case 4:
      return 'пересадки';
    default:
      return 'пересадок';
  }
}
