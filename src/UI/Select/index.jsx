// styled components
import { Basic, Minimal, User } from './style';

// utils
import PropTypes from 'prop-types';
import { components } from 'react-select';

// hooks
import { useEffect, useState } from 'react';

const CustomSelect = ({ label, options, variant, value, changeHandler, placeholder }) => {
    // automatically select the first option if no placeholder is provided
    useEffect(() => {
        if (!placeholder && value === null) {
            changeHandler(options[0]);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const [uniqueId] = useState(
        () => 'select_' + Math.random().toFixed(5).slice(2),
    );

    const Control = ({ children, ...props }) => (
        <components.Control {...props}>
            {children}
            <i className={`icon icon-${variant === 'minimal' ? 'caret' : 'chevron'}-down`}></i>
        </components.Control>
    );

    const commonProps = {
        classNamePrefix: 'Select',
        inputId: label,
        isSearchable: variant !== 'user',
        options: options,
        value: value,
        onChange: changeHandler,
        placeholder: placeholder,
        openMenuOnFocus: true,
        components: {
            Control: Control,
            Menu: (props) => <components.Menu {...props} className="menu">
                {props.children}
            </components.Menu>
        },
        id: uniqueId,
        blurInputOnSelect: true,
        className: `select-${variant}`
    }

    switch (variant) {
        default:
        case 'basic': {
            return <Basic {...commonProps} />;
        }
        case 'minimal': {
            return <Minimal {...commonProps} />;
        }
        case 'user': {
            return <User {...commonProps} />;
        }
    }
}

export const FormikSelect = ({ form, field, options, variant, placeholder, isMulti, handler, ...props }) => {


    const [uniqueId] = useState(
        () => 'select_' + Math.random().toFixed(5).slice(2),
    );

    const defualtValue = () => {

        const value = field.value;

        if (isMulti) {
            return options ? options.filter(option => value.includes(option.value)) : [];
        } else {
            return options ? options.find(option => option.value === value) : "";
        }
    }

    const Control = ({ children, ...props }) => (
        <components.Control {...props}>
            {children}
            <i className={`icon icon-${variant === 'minimal' ? 'caret' : 'chevron'}-down`}></i>
        </components.Control>
    );

    const commonProps = {
        classNamePrefix: 'Select',
        inputId: field.name,
        isSearchable: variant !== 'user',
        options: options,
        isMulti: isMulti,
        isDisabled: props.isDisabled,
        value: defualtValue(),
        onChange: (option) => {

            const value = isMulti ? (option ? option.map(item => item.value) : []) : (option ? option.value : "");
            form.setFieldValue(field.name, value);

            if (handler) {
                handler(option);
            }
        },
        placeholder: placeholder,
        openMenuOnFocus: true,
        components: {
            Control: Control,
            Menu: (props) => <components.Menu {...props} className="menu">
                {props.children}
            </components.Menu>
        },
        id: uniqueId,
        blurInputOnSelect: true,
        className: `select-${variant}`
    }

    switch (variant) {
        default:
        case 'basic': {
            return <Basic isMulti={isMulti} {...commonProps} />;
        }
        case 'minimal': {
            return <Minimal isMulti={isMulti} {...commonProps} />;
        }
        case 'user': {
            return <User isMulti={isMulti} {...commonProps} />;
        }
    }
}

CustomSelect.propTypes = {
    options: PropTypes.any,
    variant: PropTypes.oneOf(['minimal', 'basic', 'user']).isRequired,
    value: PropTypes.any,
    changeHandler: PropTypes.func,
    placeholder: PropTypes.string
}

export default CustomSelect;