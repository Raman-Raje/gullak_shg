import styled from 'styled-components'
import { colors, textSizes, flex, breakpoints } from '@styles/vars'

export const Wrapper = styled.div`
  padding: 20px;
  background-color: ${colors.lightGrey};
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 20px 0;
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

export const SectionTitle = styled.h3`
  margin-top: 20px;
  font-size: ${textSizes['20']};
  color: ${colors.primary};
  border-bottom: 2px solid ${colors.primary};
  padding-bottom: 5px;

  ${breakpoints.tablet} {
    font-size: ${textSizes['24']};
  }

  ${breakpoints.laptop} {
    font-size: ${textSizes['28']};
  }
`;

export const BtnWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

