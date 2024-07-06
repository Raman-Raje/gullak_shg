
// style
import { Block, BtnWrapper } from '../../style'

// form
import { Formik, Form } from 'formik'
import { FormikField, FormikDateField } from '@ui/FormikField'

// validation
import basicDetailsSchema from '@validation/basicValidation'

// ui
import Btn from '@ui/Btn'

const BasicDetailsForm = ({ initialValues, onNext, updateInitialValues }) => {

    const onSubmit = async (values, { setSubmitting, setFieldError }) => {

        // set submitting to true
        setSubmitting(true);

        console.log('values', values);

        updateInitialValues(values)
        setSubmitting(false);
        onNext(); // Call handleNext after a successful form submission
    }

    return (

        <Formik
            initialValues={initialValues}
            validationSchema={basicDetailsSchema}
            onSubmit={onSubmit}

        >
            {({ values, setFieldValue }) => (
                <Form>
                    <Block>
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
                            label="Phone"
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
                        <FormikField
                            name="lock_in_period"
                            type="number"
                            label="Lock in Period"
                            placeholder="Period in months" 
                        />
                        <BtnWrapper>
                            <Btn text='Next' type='submit' />
                        </BtnWrapper>
                    </Block>

                </Form>
            )}
        </Formik>

    )
}

export default BasicDetailsForm