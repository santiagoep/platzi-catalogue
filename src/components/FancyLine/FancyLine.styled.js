import styled from 'styled-components';

export default styled.div`
  border-bottom: ${({ theme, lineColor, height }) =>
    `${height} dotted ${theme.colors.separator[lineColor]}`};

  margin: ${({ theme }) => theme.utils.spacing(2, 0, 5, 0)};
`;
