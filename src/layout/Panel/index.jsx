// styled components
import { Actions, Header, Wrapper, Controls, MenuModal, Search, Input, Label } from './style';
import { toast } from 'react-toastify';

// fetch the route path
import { useLocation } from 'react-router';

// components
import Logo from '@ui/Logo';
import MenuButton from '@ui/MenuButton';
import ShapeButton from '@ui/ShapeButton';
import { motion } from 'framer-motion';
import CurrentUser from '@layout/Panel/CurrentUser';

// hooks
import useWindowSize from '@hooks/useWindowSize';
import usePanelScroll from '@hooks/usePanelScroll';
import useMobileDetect from 'use-mobile-detect-hook';
import { useSidebarContext } from '@contexts/sidebarContext';
import { useRef, useEffect } from 'react';

import {
    ContrastControl,
    FullscreenControl,
    ThemeControl,
} from '@components/GlobalSettingsControls';
import { ControlWrapper } from '@components/GlobalSettingsControls/style';

import { useState } from 'react';
import ModalWindow from '@components/ModalWindow';
import MobileProfile from '@components/MobileProfile';

// react-router
import { useNavigate } from 'react-router-dom';


// ui
import { Translate } from '@ui/LucidIcons/style';

// widgets
import Languages from '@components/Languages';

const Panel = () => {
    const { width } = useWindowSize();
    const location = useLocation();

    const device = useMobileDetect();
    const isMobile = width < 768;
    const isTablet = width > 767.98;
    const isLaptopL = width >= 1279.98;
    const classname = usePanelScroll();
    const { isSidebarOpen } = useSidebarContext();
    const headerRef = useRef(null);
    const [loading, setLoading] = useState(false);

    const [openProfile, setOpenProfile] = useState(false);
    const [openTranslate, setOpenTranslate] = useState(false);
    const isHomeRoute = location.pathname === '/';


    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate(-1);
    };

    useEffect(() => {
        document.documentElement.style.setProperty('--header-height', `${headerRef.current.offsetHeight}px`);
    }, [width]);

    return (
        <Header as={motion.header}
            animate={{ y: isSidebarOpen && isMobile ? '-100%' : 0 }}
            transition={{ duration: .3, ease: 'linear', type: 'tween' }}
            className={classname}
            ref={headerRef}>
            {
                !isLaptopL && (
                    <div className="logo-wrapper">
                        <Logo compact={isMobile} />
                    </div>
                )
            }
            <Search>
                <Input type="search" id="globalSearch" placeholder={width < 414 ? 'Search' : 'Search groups'} />
                <Label htmlFor="globalSearch">
                    <i className="icon icon-search"></i>
                </Label>
            </Search>
            <Translate onClick={() => setOpenTranslate(true)} />
            <ShapeButton shape="round" icon='chevron-left' label={'Back'} handler={handleGoBack} width={'32px'} disabled={isHomeRoute} />
            <Wrapper as={motion.div}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: .4 }}
                viewport={{ once: true }}>

                {
                    isTablet &&
                    <Controls>
                        {
                            device.isDesktop() && (
                                <>
                                    <ControlWrapper>
                                        <FullscreenControl />
                                    </ControlWrapper>
                                </>
                            )
                        }
                        <ControlWrapper>
                            <ContrastControl />
                        </ControlWrapper>
                        <ControlWrapper>
                            <ThemeControl />
                        </ControlWrapper>
                    </Controls>
                }
            </Wrapper>
            {
                isMobile ?
                    null
                    :
                    <Actions>
                        <ShapeButton shape="square" label="Notification" icon="spinner11" handler={() => console.log('Notification')} />
                        {
                            isLaptopL ?
                                <CurrentUser /> : <ShapeButton shape="square" label="Profile" icon="user" handler={() => setOpenProfile(true)} />
                        }
                        {width < 1279.98 && !isHomeRoute && <MenuButton />}
                    </Actions>
            }
            <ModalWindow isVisible={openProfile} visibilityHandler={setOpenProfile}>
                <MenuModal style={{ gap: 20 }}>
                    <MobileProfile />
                </MenuModal>
            </ModalWindow>

            <ModalWindow isVisible={openTranslate} visibilityHandler={setOpenTranslate}>
                <MenuModal style={{ gap: 20 }}>
                    <Languages />
                </MenuModal>
            </ModalWindow>
        </Header>
    )
}

export default Panel;