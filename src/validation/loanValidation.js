import * as Yup from 'yup';

const loanSchema = Yup.object().shape({

    // loan limit in rupees. greater than 0
    max_loan_amount: Yup.number().min(1).required('required'),
    loan_interest_rate: Yup.number().required('required'),
    // loan duration in months
    max_loan_duration: Yup.number().required('required'),
    // installment late fee rate in percentage
    installment_penalty: Yup.number().required('required'),
});

export default loanSchema;

