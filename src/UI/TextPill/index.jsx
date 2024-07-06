// styling
import styled from 'styled-components/macro';
import theme from 'styled-theming';
import { colors, dark, flex, light, textSizes, fonts } from '@styles/vars';

// utils
import PropTypes from 'prop-types';

const Chip = styled.div`
  ${flex.center}
  font-size: ${textSizes['12']};
  padding: 4px 8px;
  border-radius: 16px;
  color: ${props => props.color || colors.blue};
  background-color: ${props => props.bgColor || theme('theme', {
    light: light.bodyBg,
    dark: dark.bodyBg
  })};
  min-height: 20px;
  gap: 4px;
  transition: color var(--transition), background-color var(--transition);
  font-family: ${fonts.accent};
  border: 1px solid ${props => props.color || colors.blue};

  &.active {
    color: ${theme('theme', {
      light: colors.blue,
      dark: light.bodyBg
    })};
    background-color: ${theme('theme', {
      light: light.highlight,
      dark: light.text
    })};
  }
`;

const TextPill = ({ text, handler, icon, style, className, bgColor, color }) => {
  return (
    <Chip 
      className={className ? `pill ${className}` : 'pill'} 
      onClick={handler} 
      style={style} 
      bgColor={bgColor}
      color={color}
    >
      {icon ? <i className={`icon-${icon}`}></i> : null} {text}
    </Chip>
  );
};

Pill.propTypes = {
  text: PropTypes.string.isRequired,
  handler: PropTypes.func,
  icon: PropTypes.string,
  style: PropTypes.object,
  bgColor: PropTypes.string,
  color: PropTypes.string,
};

export default TextPill;
