// style
import { Block, BtnWrapper } from '../../style'

// form
import { Formik, Form } from 'formik'
import { FormikField, FormikSelectField } from '@ui/FormikField'

// validation
import bankSchema from '@validation/bankValidation'

// options
import { accountTypeOptions } from '@constants/options';

// ui
import Btn from '@ui/Btn';

const BankDetailsForm = ({ initialValues, onNext, onBack, updateInitialValues }) => {

    const onSubmit = (values, { setSubmitting }) => {

        // TODO:- handle the contact us form
        updateInitialValues(values)
        onNext(); // Call handleNext after a successful form submission
        setSubmitting(false)
    }

    return (

        <Formik
            initialValues={initialValues}
            validationSchema={bankSchema}
            onSubmit={onSubmit}

        >
            {({ values, setFieldValue, errors }) => (
                <Form>
                    <Block>
                        <FormikField
                            name="bank_name"
                            type="text"
                            label="Bank Name"
                            required
                            placeholder="Bank Name"
                        />
                        <FormikField
                            name="bank_branch_name"
                            type="text"
                            label="Bank Branch"
                            placeholder="Bank Branch"
                        />
                        <FormikField
                            name="bank_account_number"
                            type="text"
                            label="Account Number"
                            required
                            placeholder="Account Number"
                        />
                        <FormikField
                            name="bank_ifsc_code"
                            type="text"
                            label="IFSC Code"
                            required
                            placeholder="IFSC Code"
                        />
                        <FormikField
                            name="bank_account_holder"
                            type="text"
                            label="Account Holder Name"
                            required
                            placeholder="Account Holder Name"

                        />
                        <FormikSelectField
                            name="bank_account_type"
                            label="Account Type"
                            required
                            options={accountTypeOptions}
                            placeholder="Account Type"
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

export default BankDetailsForm