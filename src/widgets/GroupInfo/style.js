import styled from 'styled-components'
import { colors } from '@styles/vars'

import { RotateCw } from 'lucide-react';


export const List = styled.ul`
    list-style: none;
    padding: 0;
`;

export const ListItem = styled.li`
    display: flex;
    align-items: center;
    padding: 10px 0;
    border-bottom: 1px solid #ddd;

    &:last-child {
        border-bottom: none;
    }

    svg {
        margin-right: 10px;
        color: ${colors.primary};
    }
`;

export const TextContent = styled.div`
    flex: 1;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    &:hover {
        white-space: normal;
        overflow: visible;
    }
`;

export const RefreshIcon = styled(RotateCw)`
  width: 24px;
  height: 24px;
  color: ${colors.gray};
  cursor: pointer;
  transition: color 0.3s ease, transform 0.3s ease;

  &:hover {
    color: ${colors.blue};
    transform: scale(1.1);
  }
`;