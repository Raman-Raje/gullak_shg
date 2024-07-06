import styled from 'styled-components';
import theme from 'styled-theming';
import { colors, dark, light, textSizes } from '@styles/vars';
import { languageColors } from '@styles/vars';

export const TileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  color: ${theme('theme', {
  light: light.text,
  dark: dark.text
  })};
  color: #fff;
  background-color: ${props => props.name ? languageColors[props.name] : colors.blue};
  border-radius: 10px;
  cursor: pointer;
  transition: transform 0.2s;

  &:hover {
      transform: scale(1.05);
  }

  .icon {
    font-size: 48px;
    font-weight: bold;
  }

  .native-name {
    font-size: ${textSizes['24']};
  }
`;

export const GridContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 10px;
`;
