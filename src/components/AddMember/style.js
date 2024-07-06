import styled from 'styled-components/macro';
import theme from 'styled-theming';
import { flex } from '@styles/vars';
import { colors, textSizes, effects } from '@styles/vars';
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

export const List = styled.ul`
  ${flex.col};

  border-top: ${theme('theme', {
    light: effects.dashedLight,
    dark: effects.dashedDark,
  })};

  padding-top: 10px;
  gap: 20px;
`

export const Block = styled.li`
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 10px;
  border-radius: 8px;
  background-color: ${theme('theme', {
    light: colors.gray_50,
    dark: colors.gray_800,
  })};
  box-shadow: ${effects.widgetShadow};
  transition: background-color var(--transition);

  &:hover {
    background-color: ${theme('theme', {
      light: colors.gray_100,
      dark: colors.gray_700,
    })};
  }

  .avatar {
    flex-shrink: 0;
  }

  .info {
    ${flex.col};
    flex: 1;

    .name {
      font-weight: 500;
      font-size: ${textSizes['16']};
      color: ${colors.text.primary};
    }
  }

  .actions {
    flex-shrink: 0;
  }
`;