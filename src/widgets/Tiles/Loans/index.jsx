import { useNavigate } from 'react-router';
import { HandCoins } from 'lucide-react';

// styles
import { TileContainer } from '../style';

import { QtyBadge } from '@ui/Badge/style';

const Loans = ({ group_id, total_loans = 0 }) => {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/group/:group_id/loans'.replace(':group_id', group_id));
    }

    return (
        <TileContainer bgColor="#ffebee" onClick={handleClick} tileName="loans">
            <HandCoins size={48} />
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span>Loans</span>
                <QtyBadge>{total_loans}</QtyBadge>
            </div>
        </TileContainer>
    );
};

export default Loans