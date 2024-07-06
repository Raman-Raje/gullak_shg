import React, { useState } from 'react'
import { Chip } from '@mui/material';
import PropTypes from 'prop-types';
import { roleColors } from '@styles/vars';


const stringToColor = (string) => {

    let color = roleColors[string.toLowerCase()];

    if (!color) {

        let hash = 0;
        let i;

        /* eslint-disable no-bitwise */
        for (i = 0; i < string.length; i += 1) {
            hash = string.charCodeAt(i) + ((hash << 5) - hash);
        }

        let color = '#';

        for (i = 0; i < 3; i += 1) {
            const value = (hash >> (i * 8)) & 0xff;
            color += `00${value.toString(16)}`.slice(-2);
        }
        /* eslint-enable no-bitwise */

    }

    return color;
}

const ColoredChip = ({ label, disabled = false, size = "small", margin = "0px 10px", assignColor = false, color = 'grey' }) => {

    const backgroundColor = assignColor ? stringToColor(label) : color;

    return (
        <Chip
            label={label}
            size={size}
            disabled={disabled}
            style={{ margin, backgroundColor, color: "#fff" }} />
    )
}

export const ClickableColoredChip = ({ label, onClick, initialToggleState = true, highlightColor = '#65C18C', dehighlightColor = '#dae0e0', size = "small", margin = "5px 5px" }) => {

    const [backgroundColor, setBackgroundColor] = useState(initialToggleState ? highlightColor : dehighlightColor);
    const [isToggled, setIsToggled] = useState(initialToggleState);

    const handleClick = () => {
        if (isToggled) {
            setBackgroundColor(dehighlightColor);
        } else {
            setBackgroundColor(highlightColor);
        }
        setIsToggled(!isToggled);
        onClick();
    }

    return (
        <Chip
            label={label}
            size={size}
            onClick={handleClick}
            style={{ margin, backgroundColor, color: "#fff", cursor: "pointer" }} />
    )
}


ColoredChip.propTypes = {
    label: PropTypes.string.isRequired,
    disabled: PropTypes.bool,
    size: PropTypes.oneOf(['small', 'medium']),
    margin: PropTypes.string,
    assignColor: PropTypes.bool
}

export default ColoredChip