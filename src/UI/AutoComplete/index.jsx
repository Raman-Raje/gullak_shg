import React, { useState, useEffect } from 'react'

// components
import MedicationCard from '@ui/AutoComplete/MedicationCard';

// material ui
import Autocomplete from '@mui/material/Autocomplete';

// hooks
import useDebounce from '@hooks/useDebounce';

// style
import { StyledTextField } from './style';

// redux
import { useDispatch, useSelector } from 'react-redux';
import { selectSuggestions, fetchSuggestions } from '@store/slices/searchSlice';

// constants
import { getMedicationFormKey } from '@constants/medications'

const AutoComplete = ({ form, field, ...props }) => {

    const dispatch = useDispatch();
    const [inputValue, setInputValue] = useState(''); // Manually control the input
    const debouncedInput = useDebounce(field.value);
    const suggestions = useSelector(selectSuggestions);

    useEffect(() => {
        if (debouncedInput) {
            dispatch(fetchSuggestions(debouncedInput));
        }
    }, [debouncedInput, dispatch]);

    return (
        <Autocomplete
            id='search-medication'
            freeSolo
            value={field.value ? field.value : null}
            inputValue={inputValue}
            onInputChange={(event, newInputValue, reason) => {
                setInputValue(newInputValue);
                if (reason === 'clear') {
                    form.setFieldValue(field.name, '');
                    form.setFieldValue('drugName', '');
                    form.setFieldValue('drugForm', '');
                    form.setFieldValue('drugDose', '');
                }
            }}
            onChange={(event, option) => {

                form.setFieldValue(field.name, option ? option.drugName : '');
                if (option) {
                    const { drugName, drugForm, drugDose } = option;
                    form.setFieldValue('drugName', drugName);
                    form.setFieldValue('drugForm', getMedicationFormKey(drugForm));
                    form.setFieldValue('drugDose', drugDose);
                }
            }}
            options={suggestions ? suggestions : []}
            getOptionLabel={(option) => {
                if (typeof option === 'string') {
                    return option;
                }
                if (option && option.drugName) {
                    return option.drugName;
                }
                return '';
            }}
            renderOption={(props, option) => <MedicationCard suggestion={option} props={props} />}
            renderInput={(params) => <StyledTextField
                {...params} // Spread the rest of your props
                {...field}
                {...props}
            />}
        />
    )
}

export default AutoComplete