import React from 'react'

import { Wrapper } from '../style'

const MedicationCard = ({ suggestion , props}) => {

    const { className, ...otherProps } = props; // Exclude className
    return (
        <Wrapper {...otherProps}>
            <div className='drug-data'>
                <h4>{suggestion.drugName}</h4>
                <span>{suggestion.drugForm}</span>
            </div>
            <div className='drug-content'>
                <span>{suggestion.drugComposition}</span>
            </div>
        </Wrapper>
    )
}

export default MedicationCard