import styled from 'styled-components';
import theme from 'styled-theming';
import { dark, light, flex, fonts, textSizes, breakpoints } from '@styles/vars';
import { HeaderWrapper } from '@components/Widget/style';

export const NavWrapper = styled(HeaderWrapper)`
  ${breakpoints.tablet} {
    flex-direction: row;
    ${flex.between};

    .gender {
      max-width: 300px;
    }
  }
`;

export const AddButton = styled.button`
  font-family: ${fonts.accent};
  font-size: ${textSizes['24']};
  font-weight: 500;
  color: ${theme('theme', {
  light: light.text,
  dark: dark.text
})};

  &.disabled {
    pointer-events: none;
    opacity: .5;
  }
`;