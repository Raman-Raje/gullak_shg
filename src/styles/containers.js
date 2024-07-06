import styled from 'styled-components/macro';
import { colors, dark, breakpoints, flex, light, textSizes, fonts } from '@styles/vars';

export const GroupedItems = styled.div`
  display: flex;
  gap: ${props => props.gap || '8px'};
  
  .item {
    flex: 1;  // By default, each button takes equal width
  }
  
  .item.wide {
    flex: 2;  // This button takes twice as much space as a regular button
  }

  .item.narrow {
    flex: 0.5;  // This button takes half as much space as a regular button
  }
`;

export const GroupedButtons = styled.div`
  display: flex;
  gap: ${props => props.gap || '8px'};
  
  .button {
    flex: 1;  // By default, each button takes equal width
  }
  
  .button.wide {
    flex: 2;  // This button takes twice as much space as a regular button
  }

  .button.narrow {
    flex: 0.5;  // This button takes half as much space as a regular button
  }
`;

