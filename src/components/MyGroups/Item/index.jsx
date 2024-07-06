// styled components
import PropTypes from 'prop-types';
import { motion, AnimatePresence } from 'framer-motion';
import { Wrapper, Block, Line, BtnWrapper } from './style';

// constants
import { fadePresence } from '@constants/framer';

// ui
import ColoredChip from '@ui/Chip';
import NamedAvatar from '@ui/NamedAvatar';
import { QtyBadge } from '@ui/Badge/style';

import { useNavigate } from 'react-router';

// hooks
import useNotistack from '@hooks/useNotistack';
import useAuth from '@hooks/useAuth';

import { useCallback } from 'react';

// store
import { useDispatch } from 'react-redux';
import { handleAcceptInvite, handleRejectInvite } from '@store/slices/groupsSlice';


const CommonDetails = ({ group_name, assigned_role, total_members, membership_status, contribution_amount, contribution_frequency }) => (
    <Block>
        <div className='avatar'>
            <NamedAvatar fullName={group_name} />
        </div>
        <div className="main">
            <div className='holder'>
                <span className="name">{group_name}</span>
                <ColoredChip label={assigned_role} margin="0px 16px" assignColor={true} />
                <QtyBadge className='qty-badge'>{total_members}</QtyBadge>
            </div>
            <Line />
            <div className='details'>
                <span>{membership_status}</span>
                <span>{contribution_amount}/{contribution_frequency}</span>
            </div>
        </div>
    </Block>
);

const SHGActions = ({ validMember, handleSHGView, group_id }) => {
    const dispatch = useDispatch();
    const { user_id } = useAuth();
    const { notify } = useNotistack();
    const navigate = useNavigate();

    return (
        validMember ? (
            <button className='booking' onClick={handleSHGView}>View</button>
        ) : (
            <BtnWrapper>
                <button className='success' onClick={() => dispatch(handleAcceptInvite({ user_id, group_id, notify, navigate }))}>Accept</button>
                <button className='delete' onClick={() => dispatch(handleRejectInvite({ user_id, group_id, notify }))}>Reject</button>
            </BtnWrapper>
        )
    );
};


const SHGInfo = ({ data, handleSHGView, handleAcceptInvite, handleRejectInvite }) => {


    const { group_id, group_name, assigned_role, total_members, membership_status, contribution_frequency, contribution_amount } = data;
    const validMember = membership_status === 'active' || membership_status === 'suspended';

    return (
        <>
            <CommonDetails
                group_name={group_name}
                assigned_role={assigned_role}
                total_members={total_members}
                membership_status={membership_status}
                contribution_amount={contribution_amount}
                contribution_frequency={contribution_frequency}
            />
            <SHGActions
                validMember={validMember}
                handleSHGView={handleSHGView}
                group_id={group_id}
            />
        </>
    );
};

const Item = ({ type, data }) => {
    const navigate = useNavigate();
    const { notify } = useNotistack();

    const validMember = data.membership_status === 'active' || data.membership_status === 'suspended';

    const handleSHGView = useCallback(() => {
        if (!validMember) {
            notify('You are not a member of this group', 'error');
            return;
        }
        navigate(`group/${data.group_id}`);
    }, [validMember, data.group_id, navigate]);

    // const handleAcceptInvite = useCallback(async () => {
    //     try {
    //         const { error } = await supabase.rpc('accept_membership_invite', { user_id_input: user_id, group_id_input: data.group_id });
    //         if (error) throw error;
    //         notify('Invite accepted', 'success');
    //     } catch (error) {
    //         notify('Error accepting invite', 'error')
    //     } finally {
    //         navigate('/');
    //     }
    // }, [user_id, data.group_id, navigate]);

    // const handleRejectInvite = useCallback(async () => {
    //     try {
    //         const { error } = await supabase.rpc('reject_membership_invite', { user_id_input: user_id, group_id_input: data.group_id });
    //         if (error) throw error;
    //         notify('Invite rejected', 'success');
    //         removeGroup(data.group_id);
    //     } catch (error) {
    //         console.error('Error rejecting invite:', error.message);
    //         notify('Error rejecting invite', 'error')
    //     } finally {
    //         navigate('/');
    //     }
    // }, [user_id, data.group_id, navigate]);

    return (
        <AnimatePresence>
            <Wrapper className={type} as={motion.li} {...fadePresence}>
                <SHGInfo
                    data={data}
                    handleSHGView={handleSHGView}
                />
            </Wrapper>
        </AnimatePresence>
    );
};

Item.propTypes = {
    type: PropTypes.string.isRequired,
    data: PropTypes.shape({
        group_name: PropTypes.string.isRequired,
        group_id: PropTypes.string.isRequired,
        assigned_role: PropTypes.string.isRequired,
        total_members: PropTypes.number.isRequired,
        membership_status: PropTypes.string.isRequired,
        contribution_frequency: PropTypes.string.isRequired,
        contribution_amount: PropTypes.string.isRequired,
    }).isRequired
};

export default Item;