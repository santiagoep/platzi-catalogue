import { useState, useEffect } from 'react';

import useDebounce from '@hooks/useDebounce';

const useSearch = ({ onSearch }) => {
  const [queryText, setQueryText] = useState('');
  const thereAreQueryText = queryText && queryText.length > 0;

  const onChange = (e) => setQueryText(e.target.value);

  const onCleanQueryText = () => setQueryText('');

  const debouncedOnSearch = useDebounce(onSearch, 500);

  useEffect(() => {
    debouncedOnSearch(queryText);
  }, [queryText]);

  return [
    { queryText, thereAreQueryText },
    { onChange, onCleanQueryText }
  ];
};

export default useSearch;
