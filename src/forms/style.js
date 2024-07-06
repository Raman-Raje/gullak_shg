import styled from "styled-components";
import theme from 'styled-theming';
import { flex, breakpoints, colors } from '@styles/vars';

export const Wrapper = styled.div`
  margin-bottom: 16px;
  ${flex.col}
  gap: 10px;

  .divider {
    height: 1px;
    background-color: ${theme('theme', {
  light: '#A2C0D4',
  dark: colors.dark
})};
  }

   ${breakpoints.tablet} {
    flex-direction: row;
    gap: 20px;

    .divider {
      height: auto;
      width: 1px;
    }
  }
`

export const Block = styled.div`
  ${flex.col}
  gap: 6px;
  width: 100%;
  
`

export const RowBlock = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;

  & > * {
    width: 100%;
  }

  ${breakpoints.mobileL} {
    gap: 8px;

    & > * {
      width: 90%;
    }
  } 
`

export const ContentTitle = styled.h3`
  display: flex;
  align-items: center;
  margin: 10px 0px;
  gap: 18px;
`

export const BtnWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 10px;

  & > *:only-child {
    grid-column: span 2;
  }
`;

export const LineWithText = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  width: 100%;
  margin: 10px 0;
  &::before, &::after {
    content: '';
    flex: 1;
    border-bottom: 2px dotted lightgray;
  }
  &:not(:empty)::before {
    margin-right: 0.25em;
  }
  &:not(:empty)::after {
    margin-left: 0.25em;
  }
`;