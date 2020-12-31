import Image from 'next/image';
import { useMemo } from 'react';
import PropTypes from 'prop-types';

import {
  StyledIcon,
  StyledSelect,
  StyledOption,
  StyledContainer
} from './Select.styled';
import Typography from '@components/Typography/Typography';

const Select = ({ label, id, options, onSelect, defaultValue }) => {
  const memoizedOptions = useMemo(
    () =>
      options.map(({ value, display }, index) => (
        <StyledOption key={`select__option-${value}-${index}`} value={value}>
          {display}
        </StyledOption>
      )),
    [options]
  );
  return (
    <>
      <Typography type='paragraph4' color='primary' htmlFor={id} as='label'>
        {label}
      </Typography>
      <StyledContainer>
        <StyledSelect
          id={id}
          defaultValue={defaultValue ? '' : undefined}
          onChange={(e) => onSelect(e.target.value)}
        >
          {defaultValue && <StyledOption value=''>{defaultValue}</StyledOption>}
          {memoizedOptions}
        </StyledSelect>
        <StyledIcon>
          <Image
            src='/icons/bottom-arrow.svg'
            alt='Arrow Icon'
            width={18}
            height={18}
          />
        </StyledIcon>
      </StyledContainer>
    </>
  );
};

Select.propTypes = {
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      display: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    })
  ),
  onSelect: PropTypes.func,
  defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Select.defaultProps = {
  label: '',
  options: [],
  onSelect: () => {},
  defaultValue: undefined
};

export default Select;
