import { useEffect } from 'react';

// components
import Widget from '@components/Widget';
import WidgetBody from '@components/Widget/WidgetBody';
import WidgetsLoader from '@components/WidgetsLoader';
import WidgetHeader from '@components/Widget/WidgetHeader';

// hook
import useAuth from '@hooks/useAuth';

// forms 
import ProfileIcon from '@forms/EditProfile/ProfileIcon';
import ProfileSettingForm from '@forms/EditProfile/Profile';

// store
import { useSelector, useDispatch } from 'react-redux';
import { fetchUserProfile, selectProfile, selectLoading } from '@store/slices/profileSlice';

const EditProfile = () => {

    const { user_id } = useAuth();
    const dispatch = useDispatch();
    const profile = useSelector(selectProfile);
    const loading = useSelector(selectLoading);

    useEffect(() => {

        dispatch(fetchUserProfile(user_id));
    }, [dispatch]);


    const initialValues = {
        firstName: profile?.full_name.split(' ')[0],
        lastName: profile?.full_name.split(' ')[1],
        date_of_birth: profile?.date_of_birth,
        phone_number: profile?.phone_number,
        email: profile?.email,
        address: profile?.address
    }

    const avatar = profile?.avatar_url;

    return (
        <Widget name="UserSettings">
            <WidgetHeader title="Settings" />
            <WidgetBody>
                {loading
                    ? <WidgetsLoader />
                    :
                    <>
                        <ProfileIcon avatarUrl={avatar} userId={user_id} />
                        <ProfileSettingForm initialValues={initialValues} userId={user_id} />
                    </>
                }
            </WidgetBody>
        </Widget>
    )
}

export default EditProfile;