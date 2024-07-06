import { BtnWrapper } from './style';
import Btn from '@ui/Btn';

import Information from '@components/Information';

const Confirmation = ({ basicDetails, contributionDetails, bankDetails, loanDetails, onNext, onBack }) => {
    return (
        <>
            <Information basicDetails={basicDetails} contributionDetails={contributionDetails} bankDetails={bankDetails} loanDetails={loanDetails} />
            <BtnWrapper>
                <Btn text='Back' handler={onBack} />
                <Btn text='Create' handler={onNext} />
            </BtnWrapper>
        </>
    )
}

export default Confirmation