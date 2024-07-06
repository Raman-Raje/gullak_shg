import { useNavigate } from 'react-router';
import { LayoutDashboard } from 'lucide-react';

// styles
import { TileContainer } from '../style';

const Dashboard = ({ group_id }) => {

    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/group/:group_id/dashboard'.replace(':group_id', group_id));
    }

    return (
        <TileContainer bgColor="#fff3e0" onClick={handleClick} tileName="dashboard">
            <LayoutDashboard size={48} />
            <span>Dashboard</span>
        </TileContainer>
    );
};

export default Dashboard