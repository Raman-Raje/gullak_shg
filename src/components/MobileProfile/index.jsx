import React from 'react'
import { useNavigate } from 'react-router';

// hooks
import useSignout from '@hooks/useSignout';

// ui
import NamedAvatar from '@ui/NamedAvatar'

// redux
import { useSelector } from 'react-redux';
import { selectProfile } from '@store/slices/profileSlice';

// style
import { Holder } from './style'

const MobileProfile = () => {

    const navigate = useNavigate();
    const signOut = useSignout();
    const profile = useSelector(selectProfile);
    const { full_name, avatar_url } = profile;

    const handleSignOut = async () => {
        await signOut();
        navigate('/');
    }

    return (
        <Holder>
            <div className='nameplate' >
                <NamedAvatar fullName={full_name} imageUrl={avatar_url} />
                <div className="info">
                    <span className="h3">{full_name}</span>
                </div>
            </div>
            <button onClick={handleSignOut}>
                <i className="icon icon-logout" /> Logout
            </button>
        </Holder>

    )
}

export default MobileProfile