import Page from '@layout/Page';

// widgets
import GroupInfo from '@widgets/GroupInfo';
import Tiles from '@widgets/Tiles';

const GroupPage = () => {
    return (
        <Page>
            <div key="group_info">
                <GroupInfo />
            </div>
            <div key='tiles'>
                <Tiles />
            </div>
        </Page>
    )
}

export default GroupPage;