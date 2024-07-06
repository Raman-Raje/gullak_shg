
// ui
import Btn from '@ui/Btn'

//form
import { Formik, Form } from 'formik'
import { FormikField } from '@ui/FormikField'

// validation
import loanValidationSchema from '@validation/loanValidation'

// styles
import { Block, BtnWrapper } from '../style'


const initialValues = {
    amount: 0,
    tenure: 0,
    reason: ''
}

const LoanForm = ({ handler }) => {

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
            validationSchema={loanValidationSchema}
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
                            placeholder="Loan amount"
                        />
                        <FormikField
                            name="tenure"
                            type="number"
                            label="Tenure"
                            required
                            placeholder="Tenure in months"
                        />
                        <FormikField
                            name="reason"
                            label="Reason"
                            placeholder="Reason for loan"
                            asType='textarea'
                        />
                    </Block>
                    <div style={{ marginTop: 10 }}>
                        <Btn text='Request' type='submit' />
                    </div>
                </Form>
            )}
        </Formik>

    )
}

export default LoanForm