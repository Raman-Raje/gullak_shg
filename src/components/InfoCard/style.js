import styled from 'styled-components';
import theme from 'styled-theming';
import { colors, textSizes, effects, breakpoints, dark, light } from '@styles/vars';
import { roleColors } from '@styles/vars';

export const AvatarWrapper = styled.div`
  margin: 10px 0;
  border-radius: 50%;
  overflow: hidden;
  width: 100px;
  height: 100px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;


export const InfoGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  margin: 10px 0;
`;

export const InfoItem = styled.div`
  display: flex;
  align-items: center;
  font-size: ${textSizes['14']};
  font-weight: 500;
  background-color: ${theme('theme', {
  light: light.bodyBg,
  dark: dark.bodyBg
  })};
  padding: 10px;
  border-radius: 8px;

  svg {
    margin-right: 8px;
    color: ${colors.primary};
  }
`;

export const RoleChip = styled.div`
  display: inline-block;
  padding: 6px 12px;
  font-size: ${textSizes['12']};
  font-weight: 500;
  color: #fff;
  background-color: ${({ role }) => roleColors[role] || colors.gray};
  border-radius: 20px;
  margin: 5px 0;
  text-transform: capitalize;
`;
