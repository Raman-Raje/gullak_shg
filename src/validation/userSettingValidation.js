import * as Yup from 'yup';
import { phoneNumberRegex } from "@utils/validation";

const userSettingValidation = Yup.object().shape({

    firstName: Yup.string().required('First name is required'),
    lastName: Yup.string().required('Last name is required'),
    dateOfBirth: Yup.string().notRequired(),
    phoneNumber: Yup.string()
        .matches(phoneNumberRegex, 'Phone number is not valid')
        .notRequired(),
    email: Yup.string()
        .email('Invalid email format')
        .required('Email is required'),
    address: Yup.string().notRequired(),

});

export default userSettingValidation;