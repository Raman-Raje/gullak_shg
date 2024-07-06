// components
import Page from '@layout/Page';

import GroupLoans from '@widgets/GroupLoans';

const LoansPage = () => {
    return (
        <Page>
            <div key="group_loans">
                <GroupLoans />
            </div>
        </Page>
    )
}

export default LoansPage;