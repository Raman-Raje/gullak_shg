import { Button } from './style';
import { FilePlus, FileUp } from 'lucide-react';

import { useNavigate } from 'react-router';

export const CreateSHG = ({ visibilityHandler }) => {

    const handleClick = () => {
        visibilityHandler();
        navigate('/new-group');
    }
    const navigate = useNavigate();

    return (
        <Button onClick={() => handleClick()}>
            <FilePlus size={24} className='icon' />
            <span>Create SHG</span>
        </Button>
    );
}

export const OnboardSHG = ({ visibilityHandler }) => {

    const navigate = useNavigate();

    const handleClick = () => {
        visibilityHandler();
        navigate('/onboard-group');
    }

    return (
        <Button onClick={() => handleClick()}>
            <FileUp size={24} className='icon' />
            <span>Onboard SHG</span>
        </Button>
    );
}