// style
import { Block, RowBlock, BtnWrapper } from '../../style'

// form
import { Formik, Form } from 'formik'
import { FormikField, FormikSelectField } from '@ui/FormikField'

// validation
import contributionSchema from '@validation/contributionValidation'

// options
import { meetingFrequencyOptions, contributionFrequencyOptions } from '@constants/options';

// ui
import Btn from '@ui/Btn';


const ContributionDetailsForm = ({ initialValues, onNext, onBack, updateInitialValues }) => {

    const onSubmit = (values, { setSubmitting }) => {

        // TODO:- handle the contact us form
        updateInitialValues(values)
        onNext(); // Call handleNext after a successful form submission
        setSubmitting(false)
    }

    return (

        <Formik
            initialValues={initialValues}
            validationSchema={contributionSchema}
            onSubmit={onSubmit}

        >
            {({ values, setFieldValue }) => (
                <Form>
                    <Block>
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
                        <FormikSelectField
                            name="contribution_frequency"
                            label="Contribution Frequency"
                            required
                            options={contributionFrequencyOptions}
                        />
                        <FormikField
                            name="contribution_amount"
                            type="number"
                            label="Contribution Amount"
                            required
                            placeholder="Contribution Amount"
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

export default ContributionDetailsForm