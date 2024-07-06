// components
import Page from '@layout/Page';
import GroupMembers from '@widgets/GroupMembers';

const MembersPage = () => {
    return (
        <Page>
            <div key="group_members">
                <GroupMembers />
            </div>
        </Page>
    )
}

export default MembersPage;