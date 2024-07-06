import { useNavigate } from 'react-router';
import { Settings2 } from 'lucide-react';

// styles
import { TileContainer } from '../style';

const Edit = ({ group_id }) => {

    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/group/:group_id/edit'.replace(':group_id', group_id));
    }

    return (
        <TileContainer bgColor="#fff3e0" onClick={handleClick} tileName="edit">
            <Settings2 size={48} />
            <span>Edit SHG</span>
        </TileContainer>
    );
};

export default Edit