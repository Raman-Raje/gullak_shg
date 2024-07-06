// components
import ModalWindow from '@components/ModalWindow';

// style
import { MenuModal } from './style'

// Forms
import LoanForm from '@forms/Loan';

// ui
import ShapeButton from '@ui/ShapeButton';

const RequestLoan = ({ isVisible, visibilityHandler }) => {

    return (
        <ModalWindow isVisible={isVisible} visibilityHandler={visibilityHandler} >
            <MenuModal>
                <div className='header'>
                    <h2>Request Loan</h2>
                    <ShapeButton shape='round error' icon='close' width='30px' handler={() => visibilityHandler(false)} />
                </div>
                <div className='body'>
                    <LoanForm handler={visibilityHandler} />
                </div>
            </MenuModal>
        </ModalWindow>
    )
}

export default RequestLoan