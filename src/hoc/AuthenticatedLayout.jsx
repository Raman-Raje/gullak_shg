import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

// hooks
import usePageIsOverflow from '@hooks/usePageIsOverflow';
import useWindowSize from '@hooks/useWindowSize';

// components
import ScrollProgress from '@ui/ScrollProgress';
import Panel from '@layout/Panel';
import BottomMenu from '@layout/BottomMenu';
import WidgetsLoader from '@components/WidgetsLoader';


// Layout component for the authenticated routes
const AuthenticatedLayout = () => {
    const isOverflow = usePageIsOverflow();
    const { width } = useWindowSize();
    const isMobile = width < 768;

    return (
        <div className="app">
            {isOverflow ? <ScrollProgress /> : null}
            <div className="app_content">
                <Panel />
                <Suspense fallback={<WidgetsLoader />}>
                    <Outlet />
                </Suspense>
            </div>
            {isMobile ? <BottomMenu /> : null}
        </div>
    );
};

export default AuthenticatedLayout;
