import styled from 'styled-components/macro';
import { textSizes, colors } from '@styles/vars';


export const Button = styled.button`
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: ${textSizes['14']};
  line-height: 1;
  transition: none;
  
  &:hover, &:focus {
    .icon {
      color: ${colors.blue};
    }
  }

  .icon {
    transition: color var(--transition);
    font-size: ${textSizes['16']};
    color: ${colors.gray};
    &-font {
        font-size: ${textSizes['14']};
    }
  }
  
  &.disabled {
    pointer-events: none;
  }
`