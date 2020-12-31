import Image from 'next/image';
import PropTypes from 'prop-types';

import useSearch from '@hooks/useSearch';
import { StyledIcon, StyledContainer, StyledSearch } from './Search.styled';

const Search = ({ id, onSearch, placeholder }) => {
  const [
    { queryText, thereAreQueryText },
    { onChange, onCleanQueryText }
  ] = useSearch({ onSearch });

  return (
    <StyledContainer>
      <StyledSearch
        id={id}
        value={queryText}
        placeholder={placeholder}
        onChange={onChange}
      />
      <StyledIcon>
        {thereAreQueryText ? (
          <Image
            className='clean-query-text'
            src='/icons/close.svg'
            alt='Clean Icon'
            width={18}
            height={18}
            onClick={onCleanQueryText}
          />
        ) : (
          <Image
            src='/icons/search.svg'
            alt='Search Icon'
            width={18}
            height={18}
          />
        )}
      </StyledIcon>
    </StyledContainer>
  );
};

Search.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onSearch: PropTypes.func,
  placeholder: PropTypes.string
};

Search.defaultProps = {
  id: undefined,
  onSearch: () => {},
  placeholder: 'Buscar...'
};

export default Search;
