import { useState } from 'react';
import { motion } from 'framer-motion';

import { useLocation } from 'react-router';
import { useNavigate } from 'react-router-dom';

// styled components
import { Container, MenuModal } from './style';

// components
import ModalWindow from '@components/ModalWindow';
import MobileProfile from '@components/MobileProfile'
import { CreateSHG, OnboardSHG } from '@components/GroupControls';
import { ScaleControl, ContrastControl, ThemeControl } from '@components/GlobalSettingsControls';

// hooks
import { useSidebarContext } from '@contexts/sidebarContext';


const BottomMenu = () => {

    const navigate = useNavigate();
    const location = useLocation();
    const [openSettings, setOpenSettings] = useState(false);
    const [openProfile, setOpenProfile] = useState(false);
    const [openSHG, setOpenSHG] = useState(false);
    const { isSidebarOpen } = useSidebarContext();
    const isHomePage = location.pathname === '/';


    const buttons = [
        {
            label: 'Notifications',
            icon: 'comment-text',
            onClick: () => navigate('/notifications'),
        },

        {
            label: 'Profile',
            icon: 'user-light',
            onClick: () => setOpenProfile(true),
        },
        {
            label: 'Home',
            icon: isHomePage ? 'plus1' : 'house-solid',
            onClick: () => isHomePage ? setOpenSHG(true) : navigate('/'),
        },
        {
            label: 'Accessibility settings',
            icon: 'settings',
            onClick: () => setOpenSettings(true),
        },
        {
            label: 'Settings',
            icon: 'gear',
            onClick: () => navigate('/settings'),
            
        }
    ]

    return (
        <Container as={motion.div}
            initial={{ y: '100%' }}
            animate={{ y: isSidebarOpen ? '100%' : 0 }}
            transition={{ duration: .3, ease: 'linear', type: 'tween' }}
        >
            {
                buttons.map(btn => {
                    const { label, icon, onClick } = btn;
                    return (
                        <button key={label} aria-label={label} onClick={onClick}>
                            <i className={`icon icon-${icon}`}></i>
                        </button>
                    )
                })
            }
            <ModalWindow isVisible={openSettings} visibilityHandler={setOpenSettings}>
                <MenuModal style={{ gap: 20 }}>
                    <ThemeControl />
                    <ScaleControl />
                    <ContrastControl />
                </MenuModal>
            </ModalWindow>
            <ModalWindow isVisible={openProfile} visibilityHandler={setOpenProfile}>
                <MenuModal style={{ gap: 20 }}>
                    <MobileProfile />
                </MenuModal>
            </ModalWindow>
            <ModalWindow isVisible={openSHG} visibilityHandler={setOpenSHG}>
                <MenuModal style={{ gap: 20 }}>
                    <CreateSHG visibilityHandler={setOpenSHG} />
                    <OnboardSHG visibilityHandler={setOpenSHG} />
                </MenuModal>
            </ModalWindow>
        </Container>
    )
}

export default BottomMenu;