// styled components
import { Content, Widgets } from './style';
import Grid from '@layout/Grid';

// utils
import PropTypes from 'prop-types';

// hooks
import useMobileDetect from 'use-mobile-detect-hook';
// import { useLocation } from 'react-router-dom';

import { useRef, useEffect } from 'react';

// redux
import { useSelector } from 'react-redux';
import { selectSideBarIndex } from '@store/slices/sideBarSlice';

const Page = ({ children }) => {
    const pageRef = useRef(null);
    const device = useMobileDetect();

    const layoutKey = useSelector(selectSideBarIndex);
    const layouts = useSelector(state => state['layout'].layout);
    const columnLayout = useSelector(state => state['layout'].columnLayout);
    const current = layouts[layoutKey];
    const customCols = columnLayout[layoutKey];


    console.log('+++++++++++++ Page +++++++++++++')
    console.log(layoutKey)
    console.log(layouts)
    console.log(current)

    useEffect(() => {
        if (pageRef.current) {
            pageRef.current.scrollTop = 0;
        }
    }, [layoutKey]);

    
    return (
        <Content ref={pageRef}>
            <Widgets>
                {current ? <Grid id={layoutKey} layouts={current} desktop={device.isDesktop()} customCols={customCols}>{children}</Grid> : children}
            </Widgets>
        </Content>
    )
}

Page.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired,
    hasBadge: PropTypes.bool,
    hasTitle: PropTypes.bool,
    qty: PropTypes.number,
}

export default Page;