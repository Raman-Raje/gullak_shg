import { useNavigate } from 'react-router';
import { Building2 } from 'lucide-react';

// styles
import { TileContainer } from '../style';

const Information = ( { group_id } ) => {

    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/group/:group_id/information'.replace(':group_id', group_id));
    }

    return (
        <TileContainer bgColor="#fff3e0" onClick={handleClick} tileName="information">
            <Building2 size={48} />
            <span>Information</span>
        </TileContainer>
    );
};

export default Information