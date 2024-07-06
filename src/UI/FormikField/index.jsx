import React from 'react'
import PropTypes from 'prop-types';
import { FormikSelect } from '@ui/Select';
import { colors } from '@styles/vars';
import DateInput from '@components/MaskedInputs/Date';
import { Field, useField, ErrorMessage } from "formik";
import { Wrapper, Label, HelperText, ErrorText, Input, Textarea } from './style';
import DurationPicker from '@components/MaskedInputs/DateRange';
import TimeInput from '@components/MaskedInputs/Time';


export const FormikField = ({ label = '', helperText = '', required = false, asType = 'input', ...props }) => {

    const [field, meta] = useField(props);

    const getAsType = () => {
        switch (asType) {
            case 'input':
                return Input;
            case 'textarea':
                return Textarea;
            default:
                return Input;
        }
    }

    const AsTypeComponent = getAsType();

    return (
        <Wrapper>
            <Label>{label}{required && <span style={{ color: colors.error }}>*</span>}</Label>
            <Field
                as={AsTypeComponent}
                {...field}
                {...props}
            />
            <HelperText>{helperText}</HelperText>
            <ErrorMessage name={field.name} component={ErrorText} />
        </Wrapper>
    )
}

export const FormikSelectField = ({ options, label = '', helperText = '', required = false, ...props }) => {

    const [field, meta] = useField(props);

    return (
        <Wrapper>
            <Label>{label}{required && <span style={{ color: colors.error }}>*</span>}</Label>
            <Field
                component={FormikSelect}
                {...field}
                {...props}
                options={options}
            />
            <HelperText>{helperText}</HelperText>
            <ErrorMessage name={field.name} component={ErrorText} />
        </Wrapper>
    )
}

export const FormikDateField = ({ label = '', helperText = '', required = false, asType = 'date', ...props }) => {

    const [field, meta] = useField(props);

    const getAsType = () => {
        switch (asType) {
            case 'date':
                return DateInput;
            case 'daterange':
                return DurationPicker;
            case 'time':
                return TimeInput;
            default:
                return DateInput;
        }
    }

    const AsTypeComponent = getAsType();

    return (
        <Wrapper>
            <Label>{label}{required && <span style={{ color: colors.error }}>*</span>}</Label>
            <Field
                component={AsTypeComponent}
                {...field}
                {...props}
            />
            <HelperText>{helperText}</HelperText>
            <ErrorMessage name={field.name} component={ErrorText} />
        </Wrapper>
    )
}

export const FormikCustomField = ({ label = '', helperText = '', required = false, customComponent, ...props }) => {

    const [field, meta] = useField(props);

    return (
        <Wrapper>
            <Label>{label}{required && <span style={{ color: colors.error }}>*</span>}</Label>
            <Field
                component={customComponent}
                {...field}
                {...props}
            />
            <HelperText>{helperText}</HelperText>
            <ErrorMessage name={field.name} component={ErrorText} />
        </Wrapper>
    )
}



FormikField.propTypes = {
    label: PropTypes.string,
    helperText: PropTypes.string,
    required: PropTypes.bool
}