import styled from 'styled-components/macro';
import theme from 'styled-theming';
import { colors, dark, breakpoints, flex, light, effects, textSizes, fonts } from '@styles/vars';

import { ModalContent } from '@components/ModalWindow';

import { ChevronDown, ChevronUp } from 'lucide-react';

const bg = theme('theme', {
  light: light.bodyBg,
  dark: dark.highlight
})

export const StyledChevronDown = styled(ChevronDown)`
  width: 24px;
  border-radius: 50%;
  background-color: ${bg};
  color: ${colors.gray};
  /* transition: background-color 0.3s; */
  transition: color var(--transition), background-color var(--transition);

  &:hover, &:focus {
    background-color: ${colors.blue};
    color: #fff;
  }
`;

export const StyledChevronUp = styled(ChevronUp)`
  width: 24px;
  border-radius: 50%;
  transition: color var(--transition), background-color var(--transition);
  background-color: ${bg};
  color: ${colors.gray};
  transition: background-color 0.3s;

  &:hover, &:focus {
    background-color: ${colors.blue};
    color: #fff;
  }
`;

export const Block = styled.div`
  display: flex;
  gap: 20px;

  .info {
    ${flex.col}
    flex: 1;

    .holder {
      display: flex;
      align-items: center;
      gap: 6px;
    }

    .name {
      font-weight: 500;
    }

    .details {
      display: flex;
      font-size: ${textSizes['14']};
      justify-content: space-between;
      color: ${colors.gray};
      text-transform: capitalize;
      gap: 6px;
      
    }

  }

  .avatar {
    display: flex;
    justify-content: center;
    align-items: center;
  }

`;

export const HorizontalLine = styled.hr`
  width: 100%;
  border: none;
  border-top: 1px solid ${colors.gray};
  margin: 10px 0;
`;


export const Wrapper = styled.div`
  ${flex.col}
  border-radius: 8px;
  width: 100%;
  padding: 20px;
  gap: 20px 0;
  background-color: ${theme('theme', {
  light: light.highlight,
  dark: dark.highlight
})};
  transition: background-color var(--transition);
  cursor: pointer;

  &:hover {
    background-color: ${theme('theme', {
  light: light.bodyBg,
  dark: dark.bodyBg
})};
  }
  
  .overview {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
  }

  .main {
    width: calc(100% - 40px);

    .department {
      font-size: ${textSizes['14']};
      margin-top: 2px;
    }
  }

  .rating, .booked {
    ${flex.col};
    gap: 7px;
    font-size: ${textSizes['12']};
    font-family: ${fonts.accent};
  }
  
  .styled-rating {
    margin-top: -5px;
  }
  
  .contacts {
    display: flex;
    gap: 20px;
  }

  button {
    transition: background-color var(--transition), color var(--transition);

    &.booking {
      font-size: ${textSizes['14']};
      font-family: ${fonts.accent};
      border-radius: 20px;
      padding: 12px 16px;
      color: ${theme('theme', {
  light: colors.blue,
  dark: '#fff'
})};
      
      &:hover, &:focus {
        color: #fff;
      }
    }

    &:disabled {
        color: ${theme('theme', {
  light: '#ccc', // Disabled color in light mode
  dark: '#444'  // Disabled color in dark mode
})};
        background-color: ${theme('theme', {
  light: '#eee', // Disabled background in light mode
  dark: '#555'  // Disabled background in dark mode
})};
        cursor: not-allowed;

        &:hover, &:focus {
          background-color: unset; // Resetting hover or focus styles
          color: ${theme('theme', {
  light: '#ccc', // Disabled color in light mode
  dark: '#444'  // Disabled color in dark mode
})};
        }
    }
  }

  button:not(.reminder) {
    background-color: ${theme('theme', {
  light: light.widgetBg,
  dark: dark.widgetBg
})};

    &:hover, &:focus {
      background-color: ${colors.blue};
    }
  }

  button.delete {
    font-size: ${textSizes['14']};
    font-family: ${fonts.accent};
    border-radius: 20px;
    padding: 12px 16px;
    color: ${theme('theme', {
  light: colors.error,  // Assuming color.error is defined in your theme
  dark: '#fff'
})};

    background-color: ${theme('theme', {
  light: light.widgetBg,
  dark: dark.widgetBg
})};

    &:hover, &:focus {
      color: #fff;
      background-color: ${colors.error};  // Assuming color.error is defined
    }

    &:disabled {
        color: ${theme('theme', {
  light: '#ccc', // Disabled color in light mode
  dark: '#444'  // Disabled color in dark mode
})};
        background-color: ${theme('theme', {
  light: '#eee', // Disabled background in light mode
  dark: '#555'  // Disabled background in dark mode
})};
        cursor: not-allowed;

        &:hover, &:focus {
          background-color: unset; // Resetting hover or focus styles
          color: ${theme('theme', {
  light: '#ccc', // Disabled color in light mode
  dark: '#444'  // Disabled color in dark mode
})};
        }
      }
  }

  @media screen and (min-width: 666.98px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;

    button.reminder {
      order: 3;
      width: 100%;
    }
    
    &.doctor, &.staff {
      justify-content: space-between;
      ${Block} {
        width: 100%;
      }
    }
  }
  
  ${breakpoints.tablet} {
    &.doctor .avatar {
      width: 60px;
    }
  }

  ${breakpoints.laptop} {
    align-items: center;
    gap: 20px;
    button.reminder {
      order: unset;
      width: fit-content;
    }

    &.doctor, &.staff {
      justify-content: space-between;
      gap: 40px;
      ${Block} {
        width: fit-content;
      }
      
      .overview {
        gap: 40px;
      }
    }

    ${Block} {
      &.actions {
        flex-grow: unset;
      }
    }
  }
  
  ${breakpoints.desktop} {
    .booked {
      width: 275px;
    }
  }
`;


export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;

  @media screen and (max-width: 666.98px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  padding-top: 18px;
  border-top: ${theme('theme', {
  light: effects.dashedLight,
  dark: effects.dashedDark,
})};

  .details {
    &_item {
      display: flex;
      align-items: center;
      gap: 10px;
      margin-left: 20px;
      font-size: ${props => props.variant === 'patient' ? textSizes['14'] : 'inherit'};
      font-weight: ${props => props.variant !== 'patient' ? 500 : 'normal'};

      .icon {
        color: ${colors.gray};
        font-size: ${textSizes['16']};

        &-euro {
          font-size: ${textSizes['14']};
        }
      }
    }
  }
`;

export const MenuModal = styled(ModalContent)`
  padding: 36px 24px;
  ${flex.col};
  gap: 8px;

  .header {
    display: flex;
    ${flex.between};
    gap: 20px;

    .user .user-option {
      display: flex;
      align-items: center;
      gap: 20px;

      span {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        max-width: 100px;
      }
    }
  }
`;