import * as Yup from 'yup';

// schema validation for contribution form. Fields like amount, payment mode, etc.
const contributionValidationSchema = Yup.object().shape({
    amount: Yup.number()
        .min(100, 'Minimum installment amount is 100')
        .max(100000, 'Maximum installment amount is 100000')
        .required('required'),
    paymentMode: Yup.string().oneOf(['card', 'netbanking', 'upi', 'cash', 'other'], 'Invalid payment mode').lowercase().trim(),
    remarks: Yup.string()
        .min(5)
        .max(500),
});

export default contributionValidationSchema;