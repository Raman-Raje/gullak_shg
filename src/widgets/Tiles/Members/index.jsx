import { useNavigate } from 'react-router';
import { Users } from 'lucide-react';

// styles
import { TileContainer } from '../style';

import { QtyBadge } from '@ui/Badge/style';

const Members = ({ group_id, total_members }) => {

    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/group/:group_id/members'.replace(':group_id', group_id));
    }

    return (
        <TileContainer bgColor="#e8f5e9" onClick={handleClick} tileName="members">
            <Users size={48} />
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span>Members</span>
                <QtyBadge>{total_members}</QtyBadge>
            </div>
        </TileContainer>
    );
};

export default Members
