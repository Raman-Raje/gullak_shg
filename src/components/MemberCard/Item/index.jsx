import { useState } from 'react';
import PropTypes from 'prop-types';
import { motion, AnimatePresence } from 'framer-motion';
import { Wrapper, Block, HorizontalLine, StyledChevronDown, StyledChevronUp } from './style';
import theme from 'styled-theming';

// constants
import { fadePresence } from '@constants/framer';

import { statusColors, roleColors, loanStatusColors } from '@constants/colors';

// ui
import ColoredChip from '@ui/Chip';
import NamedAvatar from '@ui/NamedAvatar';
import { CircleX, CircleCheck } from 'lucide-react';

import Timestamp from '@ui/Timestamp';
import moment from 'moment';

const getPaymentMode = () => {

    const paymentMode = ['Cash', 'Bank Transfer', 'Cheque', 'UPI', 'Other']

    // randomlly select a payment mode
    const randomIndex = Math.floor(Math.random() * paymentMode.length);
    return paymentMode[randomIndex];
}

const getPaymentStatus = () => {

    // randomly return a payment status i.e either paid or not paid with 80% probability of paid
    const randomIndex = Math.random();
    return randomIndex < 0.8 ? 'paid' : 'unpaid';
}

const getChipColor = (type, field) => {

    switch (type) {
        case 'member':
            return roleColors.find(({ cat }) => cat === field).color;
        case 'loan':
            return loanStatusColors.find(({ cat }) => cat === field).color;
    }
}

const Item = ({ type, data }) => {

    const { full_name, user_id, membership_status, loan_status ,role, phone_number, duration, amount, avatar_url } = data;
    const chipColor = type === 'loan' ? getChipColor(type, loan_status) : getChipColor(type, role);

    const [showDetails, setShowDetails] = useState(false);

    const toggleDetails = () => setShowDetails(!showDetails);

    // get current date
    const timestamp = new Date();

    const paymentStatus = getPaymentStatus();


    const MemberInfo = () => (
        <div className="info">
            <div className='holder'>
                <span className="name">{full_name}</span>
                <ColoredChip label={role} margin="0px 16px" color={chipColor} />
            </div>
            <HorizontalLine />
            <div className='details'>
                <span><i className={`icon icon-phone`} /> {phone_number} </span>
                <span>{membership_status}</span>
            </div>
        </div>
    );


    const InstallmentInfo = () => (
        <div className="info">
            <div className='holder'>
                <span className="name">{full_name}</span>
                {
                    paymentStatus === 'unpaid' ?
                        <CircleX size={24} color='red' cursor={'none'} /> :
                        <CircleCheck size={24} color='green' cursor={'none'} />
                }
            </div>
            <HorizontalLine />
            <div className='details'>
                {
                    paymentStatus === 'paid' ?
                        <>
                            <span>{getPaymentMode()}</span>
                            <Timestamp date={moment(timestamp).toDate()} />
                        </>
                        : null
                }

            </div>
        </div>
    );

    const LoanInfo = () => (

        <div className="info">
            <div className='holder'>
                <span className="name">{full_name}</span>
                <ColoredChip label={loan_status} margin="0px 16px" color={chipColor} />
            </div>
            <HorizontalLine />
            <div className='details'>
                <span>{amount}</span>
                <span>{duration} Months</span>
            </div>
        </div>
    );

    const getCommonDetails = () => {
        switch (type) {
            case 'member':
                return <MemberInfo />
            case 'installment':
                return <InstallmentInfo />
            case 'loan':
                return <LoanInfo />
            default:
                return null;
        }
    }


    const Common = () => (
        <Block>
            <div className='avatar'>
                <NamedAvatar full_name={full_name} imageUrl={avatar_url} />
            </div>
            {getCommonDetails()}
            <div className='avatar' onClick={toggleDetails}>
                {showDetails ? <StyledChevronUp theme={theme} size={24} /> : <StyledChevronDown theme={theme} size={24} />}
            </div>
        </Block>
    );

    const getDetails = () => {
        switch (type) {
            case 'member':
                return <span>Member Details</span>
            case 'installment':
                return <span>Installment Details</span>
            case 'loan':
                return <span>Loan Details</span>
            default:
                return null;
        }
    }

    return (
        <AnimatePresence>
            <Wrapper className={type} as={motion.li} {...fadePresence}>
                <Common />
                {showDetails && (
                    <motion.div className='details' as={motion.div} {...fadePresence}>
                        {getDetails()}
                    </motion.div>
                )}
            </Wrapper>
        </AnimatePresence>
    );
}

Item.propTypes = {
    type: PropTypes.string.isRequired,
    data: PropTypes.shape({
        full_name: PropTypes.string.isRequired,
        memberId: PropTypes.string,
        membershipStatus: PropTypes.string.isRequired
    }).isRequired
}

export default Item;
