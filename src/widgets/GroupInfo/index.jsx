
// components
import Widget from '@components/Widget';
import WidgetHeader from '@components/Widget/WidgetHeader';
import WidgetBody from '@components/Widget/WidgetBody';
import InfoCard from '@components/InfoCard';

//ui
import { RefreshIcon } from '@ui/LucidIcons/style';

const GroupInfo = () => {

    return (
        <Widget name="BasicInfo" >
            <WidgetHeader title="Profile" style={{ paddingBottom: 0 }} >
                <RefreshIcon />
            </WidgetHeader>
            <WidgetBody >
                <InfoCard />
            </WidgetBody>
        </Widget>
    )
}

export default GroupInfo;