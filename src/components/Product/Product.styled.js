import styled from 'styled-components';

export const StyledProductImageContainer = styled.div`
  position: relative;
  height: 50vh;
  width: auto;
  img {
    transition: opacity 0.8s ease-in-out;
  }
  img.top:hover {
    opacity: 0;
  }
`;

export const StyledProduct = styled.div`
  text-align: center;
  margin: ${({ theme }) => theme.utils.spacing(5)};
  padding: ${({ theme }) => theme.utils.spacing(5)};
  box-shadow: ${({ theme }) => theme.boxShadows.main};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  background-color: ${({ theme }) => theme.colors.bg.secondary};
  :hover {
    box-shadow: ${({ theme }) => theme.boxShadows.secondary};
  }
`;
