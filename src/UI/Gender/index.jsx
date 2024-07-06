import React, { useState } from 'react';
import { Container, IconContainer, Im } from './style';
import { FaMale, FaFemale } from 'react-icons/fa';

const GenderSelector = ({ form, field }) => {
    const [selectedGender, setSelectedGender] = useState(field.value || null);

    // set formik field value
    const handleGenderSelection = (gender) => {
        setSelectedGender(gender);

        form.setFieldValue(field.name, gender);
    };

    return (
        <Container>
            <IconContainer
                selected={selectedGender === 'male'}
                onClick={() => handleGenderSelection('male')}
            >
                <FaMale />
            </IconContainer>
            <span className="divider"></span>
            <IconContainer
                selected={selectedGender === 'female'}
                onClick={() => handleGenderSelection('female')}
            >
                <FaFemale />
            </IconContainer>
        </Container>
    );
};

export default GenderSelector;


