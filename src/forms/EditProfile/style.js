import styled from "styled-components";
import theme from 'styled-theming';
import { flex, breakpoints, textSizes, colors, light, dark } from '@styles/vars';

export const Block = styled.div`
  ${flex.col}
  gap: 16px;
  width: 100%; 
`

export const RowBlock = styled.div`
  ${flex.col}
  gap: 10px;

  & > * {
    width: 100%;
  }

  ${breakpoints.tablet} {
    gap: 16px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .button {
    max-width: 480px;
    align-self: center;
  }
`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: 16px;
  align-items: center;
`;

export const BtnWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 10px;
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

export const ErrorText = styled.span`
  font-size: ${textSizes['14']};
  width: fit-content;
  color: ${colors.error};
`;

export const LinkText = styled.a`
  font-weight: 500;
  text-decoration: none;
  cursor: pointer;
  &:hover {
    color: ${colors.primary};
    text-decoration: underline;
  }
`;

