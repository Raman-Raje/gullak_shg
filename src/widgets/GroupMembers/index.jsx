// components
import OptionsNav from '@components/OptionsNav';
import Widget from '@components/Widget';
import WidgetHeader from '@components/Widget/WidgetHeader';
import WidgetBody from '@components/Widget/WidgetBody';
import MemberCard from '@components/MemberCard';
import AddMember from '@components/AddMember';
import WidgetsLoader from '@components/WidgetsLoader';
import { Header } from '@components/Widget/style';

// hooks
import { useState, useRef, useEffect, useCallback } from 'react';
import useStatusFilter from '@hooks/useStatusFilter';
import useGroupId from '@hooks/useGroupId';

import { NavWrapper, AddButton } from './style';
import { memberOptions } from '@constants/options';


// supabase
import supabase from '@client/client';

// store
import { useSelector } from 'react-redux';
import { selectMyGroup } from '@store/slices/myGroupSlice';

const GroupMembers = () => {

  const myGroup = useSelector(selectMyGroup);
  const { assigned_role } = myGroup;
  const [isFormVisible, setFormVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [members, setMembers] = useState([]);
  const [error, setError] = useState(null);
  const headerRef = useRef(null);
  const listRef = useRef(null);

  // fetch group_id form route location i.e /shg/:group_id/members
  const group_id = useGroupId();

  const fetchMembers = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const { data, error } = await supabase.rpc('fetch_group_members', { group_id_input: group_id });

      if (error) throw error;

      setMembers(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }, [group_id]);

  useEffect(() => {
    if (group_id) {
      fetchMembers();
    }
  }, [group_id, fetchMembers]);

  const { status, setStatus, getStatus } = useStatusFilter(members);

  return (
    <Widget name="GroupMembers">
      <WidgetHeader title="Members" style={{ paddingBottom: 0 }} elRef={headerRef}>
        {
          assigned_role === 'admin' && <AddButton
            onClick={() => setFormVisible(true)}
            className={isFormVisible ? 'disabled' : ''}
            aria-label="Add new Member"
          >
            +
          </AddButton>
        }

      </WidgetHeader>
      <Header sidePadding={true}>
        <NavWrapper>
          <OptionsNav options={memberOptions} state={status} handler={setStatus} />
        </NavWrapper>
      </Header>
      <WidgetBody>
        {loading ? (
          <WidgetsLoader />
        ) : error ? (
          <div>Error: {error}</div>
        ) : (
          <MemberCard type="member" arr={status.value === 'all' ? members : getStatus(status)} />
        )}
        <div ref={listRef} style={{ overflowY: isFormVisible ? 'hidden' : 'auto' }}>
          <AddMember isVisible={isFormVisible} visibilityHandler={setFormVisible} />
        </div>
      </WidgetBody>
    </Widget>
  );
};

export default GroupMembers