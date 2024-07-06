import React from 'react';
import Switch from '@mui/material/Switch';
import { useDispatch, useSelector } from 'react-redux';
import { selecttoggleSwitch, toggletoggleSwitch } from '@store/slices/toggleSwitchSlice'

const CustomSwitch = () => {

    const dispatch = useDispatch();
    const isChecked = useSelector(selecttoggleSwitch);

    const handleSwitchChange = (event) => {
        dispatch(toggletoggleSwitch(event.target.checked));
    };

    return (
        <Switch checked={isChecked} onChange={handleSwitchChange} />
    );
};

export const ToggleSwitch = ({ checked, onChange }) => {

    return (
        <Switch checked={checked} onChange={onChange} />
    );
};

export default CustomSwitch;