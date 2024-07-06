import styled from 'styled-components/macro';
import { colors } from '@styles/vars';

export const Holder = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;

    .nameplate {
        display: flex;
        align-items: center;
        gap: 15px;
    }

    &:hover, &:focus {
    .icon {
      color: ${colors.blue};
    }
  }
`;