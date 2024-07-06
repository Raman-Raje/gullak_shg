import styled from 'styled-components';
import theme from 'styled-theming';
import { flex, textSizes, colors, light, dark } from '@styles/vars';

export const StyledDropzone = styled.div`
  position: relative;
  border-radius: 50%;
  aspect-ratio: 1 / 1;
  width: 120px;
  margin: 0 auto 16px;
  background-color: ${theme('theme', {
    light: light.highlight,
    dark: dark.highlight,
  })};
  ${flex.col};
  ${flex.center};
  font-size: ${textSizes['18']};
  cursor: pointer;
  border: 2px dashed transparent;
  transition: border-color var(--transition);

  .icon {
    opacity: 0.5;
  }

  &:hover, &:focus, &.active {
    border-color: ${theme('theme', {
      light: colors.light_gray,
      dark: colors.dark,
    })};
  }

  .hint {
    display: none;
  }
`;

export const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const EditButton = styled.button`
  position: absolute;
  bottom: 8px;
  right: 8px;
  background-color: ${theme('theme', {
    light: colors.light_gray,
    dark: colors.dark,
  })};
  color: white;
  border: none;
  border-radius: 50%;
  padding: 8px 8px;
  z-index: 10;
  cursor: pointer;
  font-size: ${textSizes['14']};
  transition: background-color var(--transition);

  &:hover {
    background-color: ${theme('theme', {
      light: colors.blue,
      dark: colors.blue,
    })};
  }
`;
