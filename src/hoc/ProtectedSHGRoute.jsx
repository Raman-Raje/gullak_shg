import React, { useEffect, useState, useMemo, useCallback } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import supabase from '@client/client';
import useAuth from '@hooks/useAuth';
import useGroupId from '@hooks/useGroupId';
import { fetchGroupInfo, clearMyGroup, selectLoading } from '@store/slices/myGroupSlice';
import WidgetsLoader from '@components/WidgetsLoader';

const ProtectedSHGRoute = ({ allowedPaths }) => {
  const { user_id } = useAuth();
  const group_id = useGroupId();
  const [loading, setLoading] = useState(true);
  const [valid, setValid] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const groupLoading = useSelector(selectLoading);

  const memoizedAllowedPaths = useMemo(() => allowedPaths, [allowedPaths]);

  const checkUserAccess = useCallback(async () => {
    setLoading(true);

    try {
      const { data, error } = await supabase.rpc('valid_user_for_shg', {
        user_id_input: user_id,
        group_id_input: group_id,
      });

      if (error) throw error;

      setValid(data[0]);
    } catch (error) {
      console.error('Error validating user access:', error.message);
      navigate('/404');
    } finally {
      setLoading(false);
    }
  }, [user_id, group_id, navigate]);

  useEffect(() => {
    if (user_id && group_id) {
      checkUserAccess();
    }
  }, [user_id, group_id, checkUserAccess]);

  useEffect(() => {
    if (!loading && !valid) {
      navigate('/404');
    }
  }, [loading, valid, navigate]);

  useEffect(() => {
    const isPathAllowed = memoizedAllowedPaths.some((path) =>
      new RegExp(`^${path.replace(/:\w+/g, '[^/]+')}`).test(location.pathname)
    );

    if (!isPathAllowed) {
      dispatch(clearMyGroup());
    } else if (group_id) {
      dispatch(fetchGroupInfo({ user_id, group_id }));
    }

    return () => {
      dispatch(clearMyGroup());
    };
  }, [location, dispatch, memoizedAllowedPaths, user_id, group_id]);

  if (loading || groupLoading) {
    return <WidgetsLoader />;
  }

  return valid ? <Outlet /> : null;
};

export default ProtectedSHGRoute;
