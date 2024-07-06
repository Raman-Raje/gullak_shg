import { useEffect, useMemo } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';

// store
import { useDispatch, useSelector } from 'react-redux';
import { fetchGroupInfo, clearMyGroup, selectLoading, selectError } from '@store/slices/myGroupSlice';

// hooks
import useAuth from '@hooks/useAuth';
import useGroupId from '@hooks/useGroupId';
import useNotistack from '@hooks/useNotistack';

// components
import WidgetsLoader from '@components/WidgetsLoader';

const ProtectedRoute = ({ allowedPaths }) => {

    const { user_id } = useAuth();
    const location = useLocation();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const group_id = useGroupId();
    const loading = useSelector(selectLoading);
    const error = useSelector(selectError);
    const { notify } = useNotistack('Not authorized to view this page', 'error');

    // Memoize allowedPaths to prevent unnecessary re-calculations
    const memoizedAllowedPaths = useMemo(() => allowedPaths, [allowedPaths]);

    useEffect(() => {
        const isPathAllowed = memoizedAllowedPaths.some((path) =>
            new RegExp(`^${path.replace(/:\w+/g, '[^/]+')}`).test(location.pathname)
        );

        if (!isPathAllowed) {
            dispatch(clearMyGroup());
        } else if (group_id) {
            dispatch(fetchGroupInfo({ user_id, group_id }));
        }

        // Cleanup function to clear group state when component unmounts
        return () => {
            console.log('ProtectedRoute unmounted');
            dispatch(clearMyGroup());
        };
    }, [location, dispatch, memoizedAllowedPaths, user_id, group_id]);

    useEffect(() => {
        if (error) {
            notify();
            navigate('/');
        }
    }, [error, notify]);

    if (loading) {
        return <WidgetsLoader />;
    }

    return <Outlet />;
};

export default ProtectedRoute;
