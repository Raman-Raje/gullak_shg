// styling
import styled from 'styled-components/macro';
import { flex } from '@styles/vars';

// components
import Todo from './Todo';


// utils
import PropTypes from 'prop-types';

const List = styled.ul`
  ${flex.col}
`

const Notifications = ({ arr }) => {

  return <List>{arr.map((item, i) => <Todo key={`${item._id}`} data={item} />)}</List>
}

Notifications.propTypes = {
  arr: PropTypes.array.isRequired,
}

export default Notifications;