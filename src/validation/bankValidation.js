import * as Yup from 'yup';

const bankSchema = Yup.object().shape({

    bank_name: Yup.string().required('required'),
    bank_branch_name: Yup.string().notRequired(),
    bank_account_number: Yup.string().required('required'),
    bank_ifsc_code: Yup.string().required('required'),
    bank_account_holder: Yup.string().required('required'),
    bank_account_type: Yup.string().required('required'),
});

export default bankSchema;

