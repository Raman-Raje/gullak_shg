import styled from "styled-components";
import { flex, colors, textSizes, dark, light, fonts, breakpoints } from '@styles/vars';
import theme from 'styled-theming';
import {fadeIn} from '@styles/keyframes';
import Select from 'react-select';

const border = theme('theme', {
  light: `1px solid ${colors.light_gray} !important`,
  dark: `1px solid ${colors.dark} !important`,
})

const basicBg = theme('theme', {
  light: light.highlight,
  dark: dark.highlight,
})

const basicColor = theme('theme', {
  light: light.text,
  dark: dark.text,
})

const NormalizedSelect = styled(Select)`
  .Select {
    &__control {
      cursor: pointer;
      transition: var(--transition);
      border: none;
      background-color: ${basicBg};
      border-radius: 8px;
      font-size: ${textSizes['16']};
      height: 40px;
      padding-right: 16px;

      &--is-focused, &:hover {
        outline: none;
      }

      &--is-focused, &--is-focused:hover {
        box-shadow: 0 0 0 2px ${colors.blue} !important;
      }

      &:hover {
        box-shadow: ${theme('theme', {
          light: `0 0 0 2px #A2C0D4`,
          dark: `0 0 0 2px ${colors.dark}`
        })};
      }

      .icon {
        transition: .3s ease-in-out;
        color: ${theme('theme', {
          light: '#A2C0D4',
          dark: colors.gray,
        })};
        font-size: ${textSizes['12']};
      }
    }

    &__menu {
      min-width: max-content;
      width: 100%;
      color: ${basicColor};
      background-color: ${basicBg};
      border-radius: 8px;
      animation: ${fadeIn} var(--transition);
      z-index: 100;

      &-list {
        max-height: 180px;
        overflow-y: auto;
        scroll-behavior: smooth;
        z-index: 100;
      }
    }

    &__indicator, &__indicator-separator {
      display: none;
    }

    &__option {
      cursor: pointer;
      transition: var(--transition);

      &:hover,
      &--is-focused,
      &--is-selected {
        background: transparent;
        color: ${colors.blue};
      }
    }

    &__single-value {
      color: ${theme('theme', {
        light: light.text,
        dark: dark.text,
      })};
    }
  }
`;

export const ColumnContainer = styled.div`
  ${flex.col};
  gap: 10px;
  margin-bottom: 20px;
  
  .field, .Select__control {
    border: ${border};
  }
`;

export const Wrapper = styled.div`
  ${flex.col};
`

export const Label = styled.label`
  font-size: ${textSizes['14']};
  width: fit-content;
  margin-bottom: 8px;
`

export const ErrorText = styled.span`
    font-size: ${textSizes['14']};
    width: fit-content;
    margin-top: 8px;
    color: ${colors.error};
`;

export const HelperText = styled.span`
    font-size: ${textSizes['10']};
    width: fit-content;
    margin-top: 4px;
    color: ${colors.text.secondary};
`;

export const Input = styled.input`
  height: 40px;
  padding: 10px 16px;
  border-radius: 8px;
  border: 1px solid transparent;
  font-size: ${textSizes['14']};
  ${theme('theme', {
  light: `
    background-color: ${light.highlight};
   `,
  dark: `
    background-color: ${dark.highlight};
   `
})};
  transition: border-color var(--transition), box-shadow var(--transition);
  
  &.error {
    border-color: ${colors.error};
  }

  &:hover {
    box-shadow: ${theme('theme', {
  light: `0 0 0 2px #A2C0D4`,
  dark: `0 0 0 2px ${colors.dark}`
})};
  }

  &:focus {
    box-shadow: 0 0 0 2px ${colors.blue};
  }

  &:disabled {
    ${theme('theme', {
      light: `
        background-color: darken(${light.highlight}, 30%); // Adjust the percentage as needed
      `,
      dark: `
        background-color: darken(${dark.highlight}, 30%); // Adjust the percentage as needed
      `
    })};
    color: ${theme('theme', {
      light: '#666', // Optional: change text color for disabled state in light mode
      dark: '#aaa'  // Optional: change text color for disabled state in dark mode
    })};
    cursor: not-allowed;
  }
`;

export const SimpleSelect = styled.select`
  height: 40px;
  padding: 10px 16px;
  border-radius: 8px;
  border: 1px solid transparent;
  font-size: ${textSizes['14']};
  ${theme('theme', {
    light: `
      background-color: ${light.highlight};
    `,
    dark: `
      background-color: ${dark.highlight};
    `
  })};
  transition: border-color var(--transition), box-shadow var(--transition);
  
  &.error {
    border-color: ${colors.error};
  }

  &:hover {
    box-shadow: ${theme('theme', {
      light: `0 0 0 2px #A2C0D4`,
      dark: `0 0 0 2px ${colors.dark}`
    })};
  }

  &:focus {
    box-shadow: 0 0 0 2px ${colors.blue};
  }

  /* Add any custom styles specific to the select component here */
`;

export const Textarea = styled.textarea`
  height: 80px;  /* Double the height of your Input component */
  padding: 10px 16px;
  border-radius: 8px;
  border: 1px solid transparent;
  font-size: ${textSizes['14']};
  ${theme('theme', {
    light: `
      background-color: ${light.highlight};
    `,
    dark: `
      background-color: ${dark.highlight};
    `
  })};
  transition: border-color var(--transition), box-shadow var(--transition);
  
  &.error {
    border-color: ${colors.error};
  }

  &:hover {
    box-shadow: ${theme('theme', {
      light: `0 0 0 2px #A2C0D4`,
      dark: `0 0 0 2px ${colors.dark}`
    })};
  }

  &:focus {
    box-shadow: 0 0 0 2px ${colors.blue};
  }
  
  resize: none;  /* Disable resizing */
`;

export const Basic = styled(NormalizedSelect)`
  .Select {
    &__control {
      font-size: ${textSizes['14']};
    }

    &__input-container {
      color: ${basicColor};
    }

    &__value-container {
      padding: 0 16px;
    }
  }
`;

export const Minimal = styled(NormalizedSelect)`
  .Select {
    &__control {
      background-color: transparent;
      width: fit-content;
      font-weight: 500;
      font-family: ${fonts.accent};
      border-radius: 0;
      height: unset;
      padding: 0;
      font-size: ${textSizes['18']};

      &--is-focused, &:hover {
        box-shadow: none !important;
      }
    }

    &__value-container {
      padding: 0 20px 0 0;
    }
  }

  ${breakpoints.tablet} {
    .Select__control {
      font-size: ${textSizes['20']};
    }
  }
`;

export const User = styled(NormalizedSelect)`
  .Select {
    &__control {
      &--is-focused, &:hover {
        box-shadow: none !important;
      }
    }

    &__input-container {
      padding-left: 16px;
      color: inherit;
    }

    &__value-container {
      padding: 0 16px 0 0;
    }

    &__value-container,
    &__option {
      .user-option {
        display: flex;
        align-items: center;
        gap: 10px;
        color: inherit;
      }
    }
  }
`;