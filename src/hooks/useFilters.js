import { useEffect, useState } from 'react';

const options = [
  {
    value: 'price_from_highest_to_lowest',
    display: 'Precio de mayor a menor'
  },
  {
    value: 'price_from_lowest_to_highest',
    display: 'Precio de menor a mayor'
  }
];

const defaultFilters = {
  queryText: '',
  sort: ''
};

const useFilters = ({ onFilter }) => {
  const [selectedFilters, setSelectedFilters] = useState(defaultFilters);

  const internalOnFilter = (value, key) =>
    setSelectedFilters({ ...selectedFilters, [key]: value });

  useEffect(() => onFilter(selectedFilters), [selectedFilters]);

  return [{ options }, { internalOnFilter }];
};

export default useFilters;
