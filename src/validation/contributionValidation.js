import * as Yup from 'yup';

// -- contribution details
// joining_fee NUMERIC CHECK (joining_fee >= 0), -- Joining fee for new members
// meeting_frequency VARCHAR CHECK (meeting_frequency IN ('daily', 'weekly', 'monthly', 'quarterly')),
// contribution_frequency VARCHAR CHECK (contribution_frequency IN ('monthly', 'quarterly')), -- Contribution frequency
// contribution_amount NUMERIC CHECK (contribution_amount >= 0), -- Contribution amount
// contribution_day INTEGER CHECK (contribution_day >= 1 AND contribution_day <= 30), -- contribution day based on contribution_frequency (1-30)
// contribution_penalty NUMERIC CHECK (contribution_penalty >= 0), -- Penalty for late contributions

const contributionSchema = Yup.object().shape({
    meeting_frequency: Yup.string().oneOf(['daily', 'weekly', 'monthly', 'quarterly', 'annually'], 'Invalid meeting frequency').required('required'),
    joining_fee: Yup.number().min(0).notRequired(),

    contribution_frequency: Yup.string().oneOf(['monthly', 'quarterly', 'annually'], 'Invalid meeting frequency').required('required'),
    // contribution amount should be greater than 0
    contribution_amount: Yup.number().min(1).required('required'),
    // contribution late fee rate in percentage
    contribution_day: Yup.number().min(1).max(30).required('required'),
    contribution_penalty: Yup.number().min(0).required('required'),
});

export const updateContributionsSchema = Yup.object().shape({
    meeting_frequency: Yup.string().oneOf(['daily', 'weekly', 'monthly', 'quarterly', 'annually'], 'Invalid meeting frequency').notRequired(),
    joining_fee: Yup.number().min(0).notRequired(),

    contribution_frequency: Yup.string().oneOf(['monthly', 'quarterly', 'annually'], 'Invalid meeting frequency').notRequired(),
    // contribution late fee rate in percentage
    contribution_day: Yup.number().min(1).max(30).notRequired(),
    contribution_penalty: Yup.number().min(0).notRequired(),
});


export default contributionSchema;