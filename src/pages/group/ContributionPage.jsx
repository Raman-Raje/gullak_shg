// components
import Page from '@layout/Page';
import MonthlyContributions from '@widgets/MonthlyContributions';

const ContributionPage = () => {
    return (
        <Page>
            <div key="group_contributions">
                <MonthlyContributions />
            </div>
        </Page>
    )
}

export default ContributionPage;