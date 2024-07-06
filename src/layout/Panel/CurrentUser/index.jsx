import { useNavigate } from 'react-router';

// styled components
import { Menu, UserWrapper } from '../style';

// components
import NamedAvatar from '@ui/NamedAvatar';

// hooks
import useSignout from '@hooks/useSignout';
import useAuth from '@hooks/useAuth';

// utils
import { ClickAwayListener } from '@mui/base/ClickAwayListener';
import { useState } from 'react';

// redux
import { useSelector } from 'react-redux';
import { selectProfile } from '@store/slices/profileSlice';

const CurrentUser = () => {

    const signOut = useSignout();
    const navigate = useNavigate();
    const { auth } = useAuth();
    const profile = useSelector(selectProfile);
    const name = profile?.firstName + ' ' + profile?.lastName;
    const role = auth?.user?.role;
    const [open, setOpen] = useState(false);
    const handleClickAway = () => setOpen(false);
    const handleClick = () => setOpen(!open);

    const handleSignOut = async () => {
        // TODO: Handle sign out logic here
        await signOut();
        navigate('/');
    }

    return (
        <ClickAwayListener onClickAway={handleClickAway}>
            <UserWrapper>
                <NamedAvatar fullName={name} />
                <div className="info">
                    <span className="h3">{name}</span>
                    <span className="position">{role}</span>
                    <Menu className={open ? 'visible' : ''}>
                        <button onClick={handleSignOut}>
                            <i className="icon icon-logout" /> Logout
                        </button>
                        <button>
                            <i className="icon icon-circle-user" /> Profile settings
                        </button>
                    </Menu>
                </div>
                <button className="trigger" onClick={handleClick} aria-label="Show menu">
                    <i className="icon icon-chevron-down" />
                </button>
            </UserWrapper>
        </ClickAwayListener>
    )
}

export default CurrentUser;