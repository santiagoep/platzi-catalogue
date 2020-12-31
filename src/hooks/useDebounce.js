import { useRef } from 'react';
import debounce from 'lodash.debounce';

const useDebounce = (fn = () => {}, wait, options) => {
  const debouncedFn = useRef(debounce(fn, wait, options));
  return debouncedFn.current;
};

export default useDebounce;
