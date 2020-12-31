import styled from 'styled-components';

export default styled.div`
  position: relative;
  height: calc(60vh - 50px);
  ${({ theme }) => theme.breakpoints.tablet} {
    height: calc(100vh - 50px);
  }
`;
