import { useEffect, useState } from 'react';

// components
import Widget from '@components/Widget';
import WidgetHeader from '@components/Widget/WidgetHeader';
import WidgetBody from '@components/Widget/WidgetBody';
import WidgetsLoader from '@components/WidgetsLoader';

// forms
import EditGroupForm from '@forms/EditGroup';

// supabase
import supabase from '@client/client';

// store
import { useSelector } from 'react-redux';
import { selectMyGroup } from '@store/slices/myGroupSlice';

// hook
import useAuth from '@hooks/useAuth';

const EditGroup = () => {
    const [initialValues, setInitialValues] = useState({});
    const [loading, setLoading] = useState(true);
    const myGroup = useSelector(selectMyGroup);
    const { user_id } = useAuth();

    useEffect(() => {
        const fetchSHGSetting = async () => {
            try {
                // Call the stored procedure
                const { data: groupData, error: groupError } = await supabase.rpc('fetch_update_group_info', {
                    user_id_input: user_id,
                    group_id_input: myGroup.group_id
                });

                if (groupError) {
                    throw groupError;
                }

                console.log('SHG settings:', groupData);

                setInitialValues(groupData[0]);
            } catch (error) {
                console.error('Error fetching SHG settings:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchSHGSetting();
    }, [user_id, myGroup.group_id]);

    return (
        <Widget name="SHGSetting">
            <WidgetHeader title="SHG Setting" />
            <WidgetBody>
                {loading || !initialValues
                    ? <WidgetsLoader />
                    : <EditGroupForm initialValues={initialValues} group_id={myGroup.group_id} />
                }
            </WidgetBody>
        </Widget>
    );
};

export default EditGroup;
