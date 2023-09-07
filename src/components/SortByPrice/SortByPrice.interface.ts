export interface SortByPriceProps {
  sortOrder: 'asc' | 'desc';
  onChange: (order: 'asc' | 'desc') => void;
}
