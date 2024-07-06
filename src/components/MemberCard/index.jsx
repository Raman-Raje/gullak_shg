// styling
import styled from 'styled-components/macro';
import { flex } from '@styles/vars';

// components
import Item from './Item';

// utils
import PropTypes from 'prop-types';

const List = styled.ul`
  ${flex.col};
  gap: 20px;
`

const MemberCard = ({ arr, type }) => {

  return <List>{arr.map((item, i) => <Item key={`${item.user_id}`} data={item} type={type} />)}</List>
}

MemberCard.propTypes = {
  type: PropTypes.oneOf(['member', 'installment','loan']).isRequired,
  arr: PropTypes.array.isRequired,
  mutable: PropTypes.bool
}

export default MemberCard;