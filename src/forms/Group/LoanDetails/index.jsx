
// style
import { Block, BtnWrapper } from '../../style'

// form
import { Formik, Form } from 'formik'
import { FormikField } from '@ui/FormikField'

// validation
import loanSchema from '@validation/loanValidation'

// ui
import Btn from '@ui/Btn'


const LoanDetailsForm = ({ initialValues, onNext, onBack, updateInitialValues }) => {

    const onSubmit = async (values, { setSubmitting, resetForm }) => {

        // TODO handle form submission
        updateInitialValues(values)
        onNext()

        setSubmitting(false)
        resetForm()
    }

    return (

        <Formik
            initialValues={initialValues}
            validationSchema={loanSchema}
            onSubmit={onSubmit}

        >
            {({ values, setFieldValue , errors}) => (
                <Form>
                    <Block>
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
                            <Btn text='Back' handler={onBack} />
                            <Btn text='Next' type='submit' />
                        </BtnWrapper>
                    </Block>

                </Form>
            )}
        </Formik>
    )
}

export default LoanDetailsForm