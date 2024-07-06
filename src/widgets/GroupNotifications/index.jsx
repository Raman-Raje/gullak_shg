// components
import Widget from '@components/Widget';
import WidgetHeader from '@components/Widget/WidgetHeader';
import WidgetBody from '@components/Widget/WidgetBody';

import Notifications from '@components/Notifications';

import Pill from '@ui/Pill';

import TodosLegend from '@components/Notifications/TodosLegend';
// data
import { notifications } from '@constants/shg';

// hooks
import { useRef } from 'react';
import useContentHeight from '@hooks/useContentHeight';

import { HorizontalLine } from './style';

const GroupNotifications = () => {

    const headerRef = useRef(null);
    const footerRef = useRef(null);
    const listRef = useRef(null);
    const height = useContentHeight(headerRef, footerRef);

    return (
        <Widget name="GroupNotifications">
            <WidgetHeader title="Notifications" style={{ paddingBottom: 18 }} elRef={headerRef}>
                <Pill text={"mark all as read"} />
            </WidgetHeader>
            <WidgetBody>
                <Notifications arr={notifications} />
                <HorizontalLine />
                <div ref={footerRef}>
                    <TodosLegend />
                </div>
            </WidgetBody>
        </Widget>
    )
}

export default GroupNotifications;