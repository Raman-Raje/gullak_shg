import styled from 'styled-components/macro';
import theme from 'styled-theming';
import TextField from '@mui/material/TextField';
import { dark, light, colors, textSizes, flex } from '@styles/vars';

export const Wrapper = styled.div`
    ${flex.col};
    padding: 8px;

    // style for drug data. [drug-name   drug-form]
    .drug-data {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }

    // style for content of medicine. avoid overflow of text
    .drug-content {
        color: ${colors.text.secondary};
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    &:hover {
        background-color: #f0f0f0;  // Example: light grey background on hover
        cursor: pointer;            // Changes the cursor to indicate interactiveness
    }

`;

export const StyledTextField = styled(TextField)`
  height: 40px;
  padding: 10px 16px;
  border-radius: 8px;
  border: 1px solid transparent;
  font-size: ${textSizes['14']};
  
  .MuiInputBase-root {
    height: inherit;
    padding: inherit;
    border-radius: inherit;
    border: inherit;
    font-size: inherit;
  }

  .MuiInputBase-input {
    padding: inherit;
    font-size: inherit;
  }

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