// styling
import styled from 'styled-components/macro';
import { colors, flex, textSizes } from '@styles/vars';

// utils
import PropTypes from 'prop-types';
import { getTypesColor } from '@constants/colors';

const Wrapper = styled.button`
  display: flex;
  width: ${props => props.fitcontent ? 'fit-content' : '100%'};
  ${flex.center};
  border-radius: 20px;
  padding: 10px 16px;
  color: #fff;
  font-size: ${textSizes['14']};
  gap: 10px;
  background-color: ${props => props.bgColor};
  pointer-events: none;
  cursor: none;

  span {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
`

const TextChip = ({ text, icon = '', colorType = {}, fitcontent = false }) => { 

  const effectiveBgColor = getTypesColor(colorType);

  return (
    <Wrapper className="reminder" bgColor={effectiveBgColor} fitcontent={fitcontent}>
      {
        icon ? <i className={`icon icon-${icon}`}></i> : null
      }
      <span>{text}</span>
    </Wrapper>
  )
}

TextChip.propTypes = {
  reminder: PropTypes.shape({
    type: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    cat: PropTypes.string.isRequired,
  }).isRequired,
  icon: PropTypes.string,
  bgColor: PropTypes.string,
};


export default TextChip;
