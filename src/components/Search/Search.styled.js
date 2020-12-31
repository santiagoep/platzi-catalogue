import styled from 'styled-components';

import inputMixin from '@mixins/input';

export const StyledContainer = styled.div`
  position: relative;
`;

export const StyledSearch = styled.input`
  ${inputMixin}
`;

export const StyledIcon = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  padding: ${({ theme }) => theme.utils.spacing(2)};
  display: flex;
  justify-content: center;
  text-align: center;
`;
