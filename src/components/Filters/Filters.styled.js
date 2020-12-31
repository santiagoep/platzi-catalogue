import styled from 'styled-components';

export default styled.div`
  padding: ${({ theme }) => theme.utils.spacing(4)};
  .filters__clean {
    cursor: pointer;
  }
`;
