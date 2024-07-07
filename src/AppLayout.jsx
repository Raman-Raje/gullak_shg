import { lazy } from 'react';

// hooks
import { useRef, useEffect } from 'react';

import { AuthProvider } from '@contexts/AuthContext';

// components
import { Route, Routes } from 'react-router-dom';
import AuthenticatedLayout from '@hoc/AuthenticatedLayout';

// hoc
import ProtectedRoute from '@hoc/ProtectedRoute';

// pages
const PageNotFound = lazy(() => import('@pages/Public/PageNotFound'));
const HomePage = lazy(() => import('@pages/group/HomePage'));
const GroupPage = lazy(() => import('@pages/group/GroupPage'));
const MembersPage = lazy(() => import('@pages/group/MembersPage'));
const ContributionPage = lazy(() => import('@pages/group/ContributionPage'));
const LoansPage = lazy(() => import('@pages/group/LoansPage'));
const InformationPage = lazy(() => import('@pages/group/InformationPage'));
const EditGroupPage = lazy(() => import('@pages/group/EditGroupPage'));
const NotificationPage = lazy(() => import('@pages/group/NotificationPage'));
const EditProfilePage = lazy(() => import('@pages/EditProfilePage'));
const CreateGroupPage = lazy(() => import('@pages/group/CreateGroupPage'));
const OnBoardGroupPage = lazy(() => import('@pages/group/OnBoardGroupPage'));

const AppLayout = () => {
    const appRef = useRef(null);

    useEffect(() => {
        if (appRef.current) {
            appRef.current.scrollTo(0, 0);
        }
    }, []);

    return (
        <div ref={appRef}>
            <Routes basename={"/gullak_shg"}>
                <Route element={<AuthProvider />}>
                    <Route element={<AuthenticatedLayout />}>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/group/:group_id" element={<ProtectedRoute allowedPaths={['/group/:group_id', '/group/:group_id/members', '/group/:group_id/loans', '/group/:group_id/installments', '/group/:group_id/information', '/group/:group_id/edit']} />}>
                            <Route path="" element={<GroupPage />} />
                            <Route path="members" element={<MembersPage />} />
                            <Route path="loans" element={<LoansPage />} />
                            <Route path="contributions" element={<ContributionPage />} />
                            <Route path="information" element={<InformationPage />} />
                            <Route path="edit" element={<EditGroupPage />} />
                        </Route>
                        <Route path="/settings" element={<EditProfilePage />} />
                        <Route path="/notifications" element={<NotificationPage />} />
                        <Route path="/new-group" element={<CreateGroupPage />} />
                        <Route path="/onboard-group" element={<OnBoardGroupPage />} />
                        <Route path="*" element={<PageNotFound />} />
                    </Route>
                </Route>
            </Routes>
        </div>
    );
}

export default AppLayout;