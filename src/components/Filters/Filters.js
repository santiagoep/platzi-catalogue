import PropTypes from 'prop-types';

import useFilters from '@hooks/useFilters';
import StyledFilters from './Filters.styled';
import Search from '@components/Search/Search';
import Select from '@components/Select/Select';
import FancyLine from '@components/FancyLine/FancyLine';
import Typography from '@components/Typography/Typography';

const Filters = ({ onFilter }) => {
  const [{ options }, { internalOnFilter }] = useFilters({
    onFilter
  });

  return (
    <StyledFilters data-testid='filters'>
      <Typography type='h6' fontWeight='bold' color='quaternary'>
        Filtros
      </Typography>
      <FancyLine />
      <Search
        id='query-text-filters'
        onSearch={(queryText) => internalOnFilter(queryText, 'queryText')}
      />
      <Select
        id='sort-filters'
        label='Ordenar'
        defaultValue='Ordenar por...'
        options={options}
        onSelect={(value) => internalOnFilter(value, 'sort')}
      />
    </StyledFilters>
  );
};

Filters.propTypes = {
  onFilter: PropTypes.func
};

Filters.defaultProps = {
  onFilter: () => {}
};

export default Filters;
