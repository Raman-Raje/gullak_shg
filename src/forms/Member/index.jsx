
// ui
import Btn from '@ui/Btn'

//form
import { Formik, Form } from 'formik'
import { FormikField } from '@ui/FormikField'

// validation
import addMemberSchema from '@validation/addMemberValidation'

// styles
import { Block, BtnWrapper } from '../style'

import supabase from '@client/client'

const initialValues = {
    email: '',
    phone: ''
}

const MemberForm = ({ handler , setUsers }) => {

    const onSubmit = async (values, { setSubmitting, setErrors, resetForm }) => {

        // set submitting to true
        setSubmitting(true);

        console.log('values')
        console.log(values)

        // fetch user from supabase
        const { data, error } = await supabase.rpc('fetch_user_if_exists', { phone_number_input: values.phone, email_input: values.email });

        if (error) {
            setErrors({ email: error.message });
            setSubmitting(false);
            return;
        }

        console.log('data')
        console.log(data)

        // set submitting to false
        setSubmitting(false);
        setUsers(data)
        resetForm()
    }


    return (

        <Formik
            initialValues={initialValues}
            validationSchema={addMemberSchema}
            onSubmit={onSubmit}
        >
            {({ values, setFieldValue, errors }) => (
                <Form>
                    <Block>
                        <FormikField
                            name="email"
                            type="text"
                            label="Email"
                            required
                            placeholder="Email Address"
                        />
                        <FormikField
                            name="phone"
                            type="number"
                            label="Phone"
                            required
                            placeholder="Phone Number"
                        />
                    </Block>
                    <div style={{ marginTop: 10 }}>
                        <Btn text='Search' type='submit' />
                    </div>
                </Form>
            )}
        </Formik>

    )
}

export default MemberForm