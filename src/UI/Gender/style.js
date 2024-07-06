
import theme from 'styled-theming';
import {colors, flex, textSizes, breakpoints} from '@styles/vars';

import styled from "styled-components";


export const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-bottom: 16px;  
  gap: 10px;

  .divider {
    height: 1px;
    background-color: ${theme('theme', {
      light: '#A2C0D4',
      dark: colors.dark
    })};
  }
`;

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;

  width: ${props => props.size ? `${props.size}px` : '40px'};
  height: ${props => props.size ? `${props.size}px` : '40px'};
  border-radius: 50%;

.label {
  font-size: ${textSizes['12']};
  color: ${colors.secondary};
}
  
  // make background color primary if selected and color as white
  ${props => props.selected 
                    ?  `background-color: ${colors.peach};
                        color: #fff;`
                    :  `background-color: ${colors.white};
                        color: ${colors.primary};`
  }

  transition: background-color 0.2s ease-in-out;

  cursor: pointer;
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  overflow: hidden;
`;