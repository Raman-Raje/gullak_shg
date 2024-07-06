
// ui
import Btn from '@ui/Btn'

//form
import { Formik, Form } from 'formik'
import { FormikField, FormikSelectField } from '@ui/FormikField'

// validation
import contributionValidationSchema from '@validation/contributionValidation'

// styles
import { Block, BtnWrapper } from '../style'

// data
import { paymentModeOptions } from '@constants/options'

const initialValues = {
    amount: 0,
    paymentMode: '',
    remarks: ''
}

const ContributionForm = ({ handler }) => {

    const onSubmit = async (values, { setSubmitting, setErrors, resetForm }) => {

        // set submitting to true
        setSubmitting(true);

        console.log('values', values);

        // set submitting to false
        setSubmitting(false);
        handler(false);
        resetForm()
    }


    return (

        <Formik
            initialValues={initialValues}
            validationSchema={contributionValidationSchema}
            onSubmit={onSubmit}
        >
            {({ values, setFieldValue, errors }) => (
                <Form>
                    <Block>
                        <FormikField
                            name="amount"
                            type="number"
                            label="Amount"
                            required
                            placeholder="Contribution amount"
                        />
                        <FormikSelectField
                            name="paymentMode"
                            label="Payment Mode"
                            placeholder="Select Payment Mode..."
                            required
                            options={paymentModeOptions}
                        />
                        <FormikField
                            name="remarks"
                            label="Remarks"
                            placeholder="Remarks..."
                            asType='textarea'
                        />
                    </Block>
                    <div style={{ marginTop: 10 }}>
                        <Btn text='Submit' type='submit' />
                    </div>
                </Form>
            )}
        </Formik>

    )
}

export default ContributionForm