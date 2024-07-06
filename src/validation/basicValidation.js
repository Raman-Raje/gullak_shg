import * as Yup from 'yup';
import { phoneNumberRegex } from '@utils/validation';

const basicDetailsSchema = Yup.object().shape({
    group_name: Yup.string()
        .min(1)
        .max(255)
        .required('required'),
    address: Yup.string()
        .min(2)
        .max(200)
        .notRequired(),
    phone_number: Yup.string().matches(phoneNumberRegex, 'Invalid phone number').required('required'),
    email: Yup.string().email('Invalid email').lowercase().trim().notRequired(),
    max_members: Yup.number()
        .min(1)
        .max(100)
        .required('required'),
    is_registered: Yup.boolean(),
    registration_number: Yup.string().notRequired(),
    registration_date: Yup.date().notRequired(),
    lock_in_period: Yup.number().min(0).notRequired(),
});

export default basicDetailsSchema;

