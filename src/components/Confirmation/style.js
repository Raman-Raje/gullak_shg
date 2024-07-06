import styled from 'styled-components'

export const BtnWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 10px;

  & > *:only-child {
    grid-column: span 2;
  }
`;