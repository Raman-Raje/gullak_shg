import styled from 'styled-components/macro';
import {colors, textSizes, light, dark} from '@styles/vars';

export const PositionEl = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  justify-content: center;
`;

export const PositionNumber = styled.p`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 2px solid ${colors.primary};
  background-color: ${props => (props.active ? colors.primary : colors.white)};
  color: ${props => (props.active ? colors.white : colors.primary)};
  flex-shrink: 0;
  font-weight: 600;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease;
  margin: 0;
`;

export const PositionLine = styled.div`
  height: 2px;
  background-color: ${colors.gray_400};
  flex-grow: 1;
  position: relative;
`;

export const ColorLine = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  border-radius: 8px;
  width: ${props => (props.active ? '100%' : '0')};
  background-color: ${colors.primary};
  transition: width 0.5s ease;
`;

export const BtnWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 10px;
`;