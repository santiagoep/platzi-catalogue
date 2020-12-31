import styled from 'styled-components';

export const StyledNavbar = styled.div`
  width: 100%;
  height: 50px;
  background: ${({ theme }) => theme.colors.bg.primary};
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const StyledBrand = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  > * {
    margin-right: ${({ theme }) => theme.utils.spacing(1)} !important;
  }
`;
