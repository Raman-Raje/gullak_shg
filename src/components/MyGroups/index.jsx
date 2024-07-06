// styling
import styled from 'styled-components/macro';
import { flex } from '@styles/vars';

// components
import Item from './Item';

// utils
import PropTypes from 'prop-types';

import Widget from '@components/Widget';
import WidgetBody from '@components/Widget/WidgetBody';

import WidgetsLoader from '@components/WidgetsLoader';


import { useEffect } from 'react';
import useAuth from '@hooks/useAuth';

// store
import { useDispatch, useSelector } from 'react-redux';
import { selectGroups, selectLoading, fetchGroups, clearGroups } from '@store/slices/groupsSlice';

const List = styled.ul`
  ${flex.col};
  gap: 20px;
  margin: 20px;
`

const SHGList = ({ arr, type, mutable = false }) => {

  return <List>{arr.map((item, i) => <Item key={`${item.group_id}`} data={item} type={type} mutable={mutable} />)}</List>
}

SHGList.propTypes = {
  type: PropTypes.oneOf(['shg', 'user']).isRequired,
  arr: PropTypes.array.isRequired,
  mutable: PropTypes.bool
}


const MyGroups = () => {

  const { user_id } = useAuth();
  const dispatch = useDispatch();
  const groups = useSelector(selectGroups);
  const loading = useSelector(selectLoading);

  console.log('MyGroups');
  console.log(user_id);
  console.log(groups);

  useEffect(() => {
    dispatch(fetchGroups({ user_id }));

    // Cleanup
    return () => {
      dispatch(clearGroups());
    }
  }, [user_id]);

  return (
    <Widget name="SHGTable">
      <WidgetBody style={{ padding: 0 }}>
        {loading ? <WidgetsLoader /> : <SHGList arr={groups} type="shg" />}
      </WidgetBody>
    </Widget>
  )
}

export default MyGroups;