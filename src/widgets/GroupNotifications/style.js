import styled from "styled-components";
import theme from "styled-theming";
import {  effects } from "@styles/vars";

export const HorizontalLine = styled.div`
    margin-bottom: 20px;
  border-top: ${theme('theme', {
      light: effects.dashedLight,
        dark: effects.dashedDark,
  })};
    width: 100%;    
`;