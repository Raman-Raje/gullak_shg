import styled from 'styled-components/macro';
import { flex } from '@styles/vars';
import { ModalContent } from '@components/ModalWindow';

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