// components
import ModalWindow from '@components/ModalWindow';

// style
import { MenuModal, List, Block } from './style'

// Forms
import MemberForm from '@forms/Member';

// ui
import ShapeButton from '@ui/ShapeButton';

// hooks
import { useState, useCallback } from 'react';

import NamedAvatar from '@ui/NamedAvatar';
import Pill from '@ui/Pill';

// hook
import useGroupId from '@hooks/useGroupId';
import useNotistack from '@hooks/useNotistack';

// supabase
import supabase from '@client/client';

const AddMember = ({ isVisible, visibilityHandler }) => {

    const [users, setUsers] = useState([]);
    const group_id = useGroupId();
    const { notify } = useNotistack();

    const closeHandler = useCallback(() => {
        visibilityHandler(false);
    }, [visibilityHandler]);

    const handleInvite = async (user_id) => {

        try {
            const { error } = await supabase.rpc('add_user_to_membership', { user_id_input: user_id, group_id_input: group_id });
            if (error) throw error;
            notify('User added to group');
        } catch (error) {
            notify(error.message, "error");
        } finally {
            visibilityHandler(false);
        }
    }

    return (
        <ModalWindow isVisible={isVisible} visibilityHandler={visibilityHandler}>
            <MenuModal>
                <div className='header'>
                    <h2>Add Member</h2>
                    <ShapeButton shape='round error' icon='close' width='30px' handler={closeHandler} />
                </div>
                <div className='body'>
                    <MemberForm handler={visibilityHandler} setUsers={setUsers} />
                </div>
                {users.length > 0 && (
                    <List>
                        {users.map(user => (
                            <Block key={user.user_id}>
                                <div className='avatar'>
                                    <NamedAvatar full_name={user.full_name} />
                                </div>
                                <div className="info">
                                    <span className="name">{user.full_name}</span>
                                </div>
                                <div className="actions">
                                    <Pill text='Invite' handler={() => handleInvite(user.user_id)} />
                                </div>
                            </Block>
                        ))}
                    </List>
                )}
            </MenuModal>
        </ModalWindow>
    );
};

export default AddMember;