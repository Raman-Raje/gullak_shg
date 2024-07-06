import * as Yup from 'yup';
import { phoneNumberRegex } from '@utils/validation';

// add member to SHG. Fields: name, number

const addMemberSchema = Yup.object().shape({

    email: Yup.string().trim().lowercase().email().when('phone', {
        is: (phone) => !phone || phone.length === 0,
        then: () => Yup.string().email().required('phone or email is required'),
    }),
    phone: Yup.string().matches(phoneNumberRegex, 'Invalid phone number').when('email', {
        is: (email) => !email || email.length === 0,
        then: () => Yup.string().required('phone or email is required'),
    })

}, [['email', 'phone']]);

export default addMemberSchema;