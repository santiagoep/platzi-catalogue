import styled from 'styled-components';

export default styled.div`
  margin: ${({ theme }) => theme.utils.spacing(5)};
  padding: ${({ theme }) => theme.utils.spacing(5)};
  box-shadow: ${({ theme }) => theme.boxShadows.main};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  background-color: ${({ theme }) => theme.colors.bg.secondary};
  > * {
    text-align: center;
    ${({ theme }) => theme.breakpoints.tablet} {
      text-align: left;
    }
  }
  .product-detail__description {
    margin: ${({ theme }) => theme.utils.spacing(5, 2)};
  }
  .product-detail__category-name {
    margin-bottom: ${({ theme }) => theme.utils.spacing(3)};
  }
`;
