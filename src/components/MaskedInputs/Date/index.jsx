// styled components
import { DateInputWrapper } from './style';
import { Input } from '@ui/Field';

// components
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

// utils
import { useRef, useState } from 'react';

const DateInput = ({ form, field, id, minDate, maxDate, disabled, handler, ...props }) => {
    const [value, setValue] = useState(field.value || null);
    const [open, setOpen] = useState(false);
    const customInputRef = useRef(null);
    const buttonRef = useRef(null);

    const handleChange = (newValue) => {
        setValue(newValue);
        const newDate = newValue ? newValue.format("yyyy-MM-DD") : null;
        form.setFieldValue(field.name, newDate);

        if (handler) {
            handler(newDate);
        }
    };

    return (
        <LocalizationProvider dateAdapter={AdapterMoment}>
            <DatePicker
                open={open}
                value={value}
                minDate={minDate ? new Date(minDate) : undefined}
                maxDate={maxDate ? new Date(maxDate) : undefined}
                onChange={handleChange}
                disabled={disabled}
                onClose={() => setOpen(false)}
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
                            value={value && value.format("DD/MM/YYYY")}
                            onChange={onChange}
                            disabled={disabled}
                            ref={customInputRef}
                            placeholder="DD/MM/YYYY"
                            {...inputProps}
                            onClick={() => setOpen(true)}
                        />
                        <i className="icon icon-calendar" ref={buttonRef} onClick={() => setOpen(true)} />
                    </DateInputWrapper>
                )}
            />
        </LocalizationProvider>
    )
}

export default DateInput;