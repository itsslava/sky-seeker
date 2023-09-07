import { format } from 'date-fns';
import { ru } from 'date-fns/locale';

export function formatDate(inputDate: string): string {
  const date = new Date(inputDate);
  const formattedDate = format(date, 'd MMM yyyy, EEE', { locale: ru });

  const replacements: { [key: string]: string } = {
    пнд: 'Пн',
    втр: 'Вт',
    срд: 'Ср',
    чтв: 'Чт',
    птн: 'Пт',
    суб: 'Сб',
    вск: 'Вс',
  };

  return formattedDate.replace(/пнд|втр|срд|чтв|птн|суб|вск/g, (match) => replacements[match]);
}

export function formatPrice(price: number): string {
  return price.toLocaleString('ru-RU');
}
