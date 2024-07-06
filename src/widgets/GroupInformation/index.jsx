
// components
import Widget from '@components/Widget';
import WidgetHeader from '@components/Widget/WidgetHeader';
import WidgetBody from '@components/Widget/WidgetBody';
import Information from '@components/Information';
import WidgetsLoader from '@components/WidgetsLoader';

import { DownloadIcon } from '@ui/LucidIcons/style';

// supabase
import supabase from '@client/client';

// hooks
import { useEffect, useState } from 'react';
import useAuth from '@hooks/useAuth';

// store
import { useSelector } from 'react-redux';
import { selectMyGroup } from '@store/slices/myGroupSlice';

const GroupInformation = () => {

    const { user_id } = useAuth();
    const myGroup = useSelector(selectMyGroup);
    const [groupData, setGroupData] = useState({});
    const [loading, setLoading] = useState(false);

    const fetchgroupData = async () => {
        setLoading(true);
        try {

            // Call the stored procedure
            const { data, error } = await supabase.rpc('fetch_group_details', { user_id_input: user_id, group_id_input: myGroup.group_id });

            if (error) throw error;

            setGroupData(data[0]);
        } catch (error) {
            console.error('Error fetching group details:', error.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {

        fetchgroupData();

    }, [user_id, myGroup.group_id]);

    const basicDetails = {
        group_name: groupData.group_name,
        address: groupData.address,
        phone_number: groupData.phone_number,
        email: groupData.email,
        max_members: groupData.max_members,
        is_registered: groupData.is_registered,
        registration_number: groupData.registration_number,
        registration_date: groupData.registration_date,
        lock_in_period: groupData.lock_in_period
    }

    const contributionDetails = {
        joining_fee: groupData.joining_fee,
        meeting_frequency: groupData.meeting_frequency,
        contribution_frequency: groupData.contribution_frequency,
        contribution_amount: groupData.contribution_amount,
        contribution_day: groupData.contribution_day,
        contribution_penalty: groupData.contribution_penalty
    }

    const bankDetails = {
        bank_name: groupData.bank_name,
        bank_branch_name: groupData.bank_branch_name,
        bank_account_number: groupData.bank_account_number,
        bank_ifsc_code: groupData.bank_ifsc_code,
        bank_account_holder: groupData.bank_account_holder,
        bank_account_type: groupData.bank_account_type
    }

    const loanDetails = {
        max_loan_amount: groupData.max_loan_amount,
        loan_interest_rate: groupData.loan_interest_rate,
        max_loan_duration: groupData.max_loan_duration,
        installment_penalty: groupData.installment_penalty
    }

    return (
        <Widget name="BasicInfo" >
            <WidgetHeader title={groupData.group_name} >
                <DownloadIcon onClick={() => console.log('Download')} />
            </WidgetHeader>
            <WidgetBody >
                {
                    loading
                        ? <WidgetsLoader />
                        : <Information basicDetails={basicDetails} contributionDetails={contributionDetails} bankDetails={bankDetails} loanDetails={loanDetails} />
                }
            </WidgetBody>
        </Widget>
    )
}

export default GroupInformation