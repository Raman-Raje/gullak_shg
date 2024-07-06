import { useNavigate } from 'react-router';
import { PiggyBank } from 'lucide-react';

// styles
import { TileContainer } from '../style';

const Contributions = ({ group_id }) => {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/group/:group_id/contributions'.replace(':group_id', group_id));
    }

    return (
        <TileContainer bgColor="#e0f7fa" onClick={handleClick} tileName="contributions">
            <PiggyBank size={48} />
            <span>Contributions</span>
        </TileContainer>
    );
};

export default Contributions