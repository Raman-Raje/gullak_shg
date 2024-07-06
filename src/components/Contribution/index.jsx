// components
import ModalWindow from '@components/ModalWindow';

// style
import { MenuModal } from './style'

// Forms
import ContributionForm from '@forms/Contribution';

// ui
import ShapeButton from '@ui/ShapeButton';

const Contribution = ({ isVisible, visibilityHandler }) => {

    return (
        <ModalWindow isVisible={isVisible} visibilityHandler={visibilityHandler} >
            <MenuModal>
                <div className='header'>
                    <h2>Make Contribution</h2>
                    <ShapeButton shape='round error' icon='close' width='30px' handler={() => visibilityHandler(false)} />
                </div>
                <div className='body'>
                    <ContributionForm handler={visibilityHandler} />
                </div>
            </MenuModal>
        </ModalWindow>
    )
}

export default Contribution