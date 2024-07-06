// form
import { Formik, Form } from 'formik'
import { FormikField, FormikSelectField, FormikDateField } from '@ui/FormikField'

// ui
import Btn from '@ui/Btn'


// style
import { Block, LineWithText, BtnWrapper } from '../style'

// options
import { meetingFrequencyOptions } from '@constants/options';
import useNotistack from '@hooks/useNotistack';
import groupSettingSchema from '@validation/editGroupValidation';

// supabase
import supabase from '@client/client';


const EditGroupForm = ({ initialValues, group_id }) => {

    const { notify } = useNotistack('Your changes have been successfully saved.', 'success');

    const onSubmit = async (values, { setSubmitting }) => {

        setSubmitting(true);

        // Call the stored procedure
        const { data, error } = await supabase
            .from('groups')
            .update({
                ...values
            })
            .eq('group_id', group_id);


        if (error) {
            console.log('error', error);
            throw error;
        }

        // set submitting to false
        setSubmitting(false);
        notify();
    }

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={groupSettingSchema}
            onSubmit={onSubmit}
        >
            {({ values, setFieldValue, errors }) => (
                <Form>
                    <Block>
                        <LineWithText>Basic</LineWithText>
                        <FormikField
                            name="group_name"
                            type="text"
                            label="SHG Name"
                            required
                            placeholder="Name of the SHG"
                        />
                        <FormikField
                            name="phone_number"
                            type="text"
                            label="Phone Number"
                            placeholder="10 digit phone number"
                            required
                        />
                        <FormikField
                            name="email"
                            type="email"
                            label="Email"
                            placeholder="Email of the SHG"
                        />
                        <FormikField
                            name="address"
                            label="Address"
                            asType='textarea'
                            placeholder="Address of the SHG"
                        />
                        <FormikField
                            name="registration_numberr"
                            type="text"
                            label="Registration Number"
                            placeholder="Registration Number"
                        />
                        <FormikDateField
                            name="registration_date"
                            type="date"
                            label="Registration Date"
                            placeholder="Registration Date"
                            minDate={new Date('01/01/2000')}
                            maxDate={new Date()}
                        />
                        <FormikField
                            name="max_members"
                            type="number"
                            label="Max Members"
                            required
                            placeholder="Max Members"
                        />
                        <LineWithText>Contribution</LineWithText>
                        <FormikField
                            name="joining_fee"
                            type="number"
                            label="Joining Fee"
                            placeholder="Joining Fee"
                        />
                        <FormikSelectField
                            name="meeting_frequency"
                            label="Meeting Frequency"
                            required
                            options={meetingFrequencyOptions}
                        />
                        <FormikField
                            name="contribution_day"
                            type="number"
                            label="Contribution Day"
                            required
                            placeholder="Contribution Day"
                        />
                        <FormikField
                            name="contribution_penalty"
                            type="number"
                            label="Contribution Penalty"
                            required
                            placeholder="Contribution Penalty"
                        />
                        <LineWithText>Loan</LineWithText>
                        <FormikField
                            name="max_loan_amount"
                            type="number"
                            label="Max Loan Amount"
                            required
                            placeholder="Loan Limit"
                            helperText='Maximum loan amount that can be given to a member'
                        />
                        <FormikField
                            name="loan_interest_rate"
                            type="number"
                            label="Loan Interest Rate"
                            required
                            placeholder="Loan Interest Rate"
                            helperText='Interest rate in percentage'
                        />
                        <FormikField
                            name="max_loan_duration"
                            type="number"
                            label="Max Loan Duration"
                            required
                            placeholder="Loan Duration"
                            helperText='Maximum duration for loan repayment'
                        />
                        <FormikField
                            name="installment_penalty"
                            type="number"
                            label="Installment Penalty"
                            required
                            placeholder="Installment Penalty"
                        />
                        <BtnWrapper>
                            <Btn text='Update' type='submit' />
                        </BtnWrapper>
                    </Block>
                </Form>
            )}
        </Formik>

    )
}

export default EditGroupForm