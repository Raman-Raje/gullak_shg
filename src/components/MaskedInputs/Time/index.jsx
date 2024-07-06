import React, { useState, useRef } from 'react';

import { DateInputWrapper } from '../Date/style';

// material ui
import { LocalizationProvider } from '@mui/x-date-pickers';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';

// ui
import { Input } from '@ui/Field'; // Replace with your Input component if different

const TimeInput = ({ form, field, id, disabled, handler, timeInterval = 15, ...props }) => {
    const [value, setValue] = useState(field.value || null);
    const [open, setOpen] = useState(false);
    const customInputRef = useRef(null);
    const buttonRef = useRef(null);

    const handleChange = (newValue) => {
        setValue(newValue);
        form.setFieldValue(field.name, newValue);

        if (handler) {
            const newTime = newValue ? newValue.format("HH:mm") : null;
            handler(newTime);
        }
    };

    const shouldDisableTime = (timeValue, clockType) => {
        if (clockType === 'minutes') {
            // Disable minutes not matching the specified interval
            return timeValue % timeInterval !== 0;
        }
        return false;
    };

    return (
        <LocalizationProvider dateAdapter={AdapterMoment}>
            <TimePicker
                open={open}
                value={value}
                onChange={handleChange}
                disabled={disabled}
                onClose={() => setOpen(false)}
                shouldDisableTime={shouldDisableTime}
                PopperProps={{ anchorEl: customInputRef.current }}
                PaperProps={{ className: 'date-picker' }}
                renderInput={({
                    ref,
                    inputProps,
                    disabled,
                    onChange,
                    value
                }) => (
                    <DateInputWrapper ref={ref}>
                        <Input
                            id={id}
                            value={value && value.format("HH:mm")}
                            onChange={onChange}
                            disabled={disabled}
                            ref={customInputRef}
                            placeholder="HH:mm"
                            {...inputProps}
                            onClick={() => setOpen(true)}
                        />
                        {/* Replace icon with your desired icon */}
                        <i className="icon icon-clock" ref={buttonRef} onClick={() => setOpen(true)} />
                    </DateInputWrapper>
                )}
            />
        </LocalizationProvider>
    );
};

export default TimeInput;
