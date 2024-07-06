import styled from 'styled-components/macro';
import theme from 'styled-theming';
import { colors, dark, breakpoints, flex, light, effects, textSizes, fonts } from '@styles/vars';

import { ModalContent } from '@components/ModalWindow';

export const Block = styled.div`
  display: flex;
  gap: 20px;

  .main {
    ${flex.col}
    justify-content: space-between;
    gap: 4px;

    .name {
      font-weight: 500;
      width: fit-content;
      overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    &:hover {
        white-space: normal;
        overflow: visible;
    }
    }

    .info {
      margin-top: 2px;
      font-size: ${textSizes['14']};
    }

    .details {
      display: flex;
      font-size: ${textSizes['14']};
      justify-content: space-between;
      color: ${colors.gray};
      text-transform: capitalize;
      gap: 6px;
      
    }

    .holder {
      display: flex;
      align-items: center;
      
      .qty-badge {
       
    }
    }

  }

  .group {
      display: flex;
      align-items: center;
      gap: 10px;

      .item {
        flex: 1;  // By default, each button takes equal width
      }

      .item.wide {
        flex: 2;  // This button takes twice as much space as a regular button
      }

      .item.narrow {
        flex: 0.5;  // This button takes half as much space as a regular button
      }
    }

  .avatar {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .wrapper {
    flex-grow: 1;
  }

  @media screen and (min-width: 666.98px) {
    flex-grow: 1;
    &.actions {
      justify-content: flex-end;
    }

    .wrapper {
      flex-grow: unset;
    }
  }
`;

export const Wrapper = styled.div`
  ${flex.col};
  border-radius: 10px;
  width: 100%;
  padding: 20px;
  gap: 20px 0;
  background-color: ${theme('theme', {
    light: light.highlight,
    dark: dark.highlight,
  })};
  transition: background-color var(--transition);
  cursor: pointer;

  &:hover {
    background-color: ${theme('theme', {
      light: light.bodyBg,
      dark: dark.bodyBg,
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
    font-size: ${textSizes['14']};
    font-family: ${fonts.accent};
    border-radius: 20px;
    padding: 12px 16px;
    transition: background-color var(--transition), color var(--transition);
    background-color: ${theme('theme', {
      light: light.widgetBg,
      dark: dark.widgetBg,
    })};
    color: ${theme('theme', {
      light: colors.blue,
      dark: '#fff',
    })};

    &:hover, &:focus {
      background-color: ${colors.blue};
      color: #fff;
    }

    &.delete {
      color: ${theme('theme', {
        light: colors.error,
        dark: '#fff',
      })};

      &:hover, &:focus {
        background-color: ${colors.error};
        color: #fff;
      }
    }

    &.success {
      color: ${colors.success};

      &:hover, &:focus {
        background-color: ${colors.success};
        color: #fff;
      }
    }

    &:disabled {
      color: ${theme('theme', {
        light: '#ccc',
        dark: '#444',
      })};
      background-color: ${theme('theme', {
        light: '#eee',
        dark: '#555',
      })};
      cursor: not-allowed;

      &:hover, &:focus {
        background-color: unset;
        color: ${theme('theme', {
          light: '#ccc',
          dark: '#444',
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

// horizontal line
export const Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${theme('theme', {
  light: dark.text,
  dark: light.text
})};
`;

export const BtnWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 10px;

  // classname
  &.success {
    background-color: coral;
  }

  // classname
  &.booking {
    background-color: lightblue;
  }

  // classname
  &.success {
    background-color: red;
  }

  & > *:only-child {
    grid-column: span 2;
  }
`;