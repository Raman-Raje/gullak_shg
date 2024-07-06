import React from 'react'
import Btn from '@ui/Btn'
import { Formik, Form } from 'formik'
import { FormikField, FormikDateField } from '@ui/FormikField'

// validation
import userSettingValidation from '@validation/userSettingValidation'

// style
import { RowBlock, Block } from './style'

// hooks
import useNotistack from '@hooks/useNotistack'

// store
import { useDispatch } from 'react-redux';
import { updateUserProfile } from '@store/slices/profileSlice';

const ProfileSettingForm = ({ initialValues, userId }) => {

    const dispatch = useDispatch();
    const { notify } = useNotistack();

    const onSubmit = async (values, { setSubmitting }) => {

        setSubmitting(true);
        // push the new values to the backend 
        console.log('values', values);

        // dispatch the action to update the profile
        const updatedProfile = {
            full_name: `${values.firstName} ${values.lastName}`,
            date_of_birth: values.date_of_birth,
            phone_number: values.phone_number,
            email: values.email,
            address: values.address
        }

        dispatch(updateUserProfile({ updatedProfile, userId }));
        setSubmitting(false);
    }

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={userSettingValidation}
            onSubmit={onSubmit}
        >
            {({ values, setFieldValue }) => (
                <Form>
                    <Block>
                        <FormikField
                            name="firstName"
                            label="First Name"
                            placeholder="First Name"
                            required
                        />
                        <FormikField
                            name="lastName"
                            label="Last Name"
                            placeholder="Last Name"
                            required
                        />
                        <FormikDateField
                            name="date_of_birth"
                            label="Date of Birth"
                            placeholder="Date of Birth"
                        />
                        <FormikField
                            name="phone_number"
                            label="Phone Number"
                            placeholder="Phone"
                            required
                        />
                        <FormikField
                            name="email"
                            label="Email"
                            placeholder="Email"
                            required
                        />
                        <FormikField
                            name="address"
                            label="Address"
                            placeholder="Address"
                            asType='textarea'
                        />
                        <RowBlock className='button'>
                            <Btn
                                text='Save'
                                handler={() => { notify('Profile Updated') }}
                                type='submit'
                            />
                        </RowBlock>
                    </Block>
                </Form>
            )}
        </Formik>
    )
}

export default ProfileSettingForm