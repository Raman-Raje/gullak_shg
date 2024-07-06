// components
import Page from '@layout/Page';
import GroupNotifications from '@widgets/GroupNotifications';

const NotificationPage = () => {
    return (
        <Page>
            <div key="group_notifications">
                <GroupNotifications />
            </div>
        </Page>
    )
}

export default NotificationPage;