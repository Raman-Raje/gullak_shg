import { Outlet } from "react-router";
import { useEffect, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import supabase from "@client/client";
import useAuth from "@hooks/useAuth";
import useGroupId from "@hooks/useGroupId";

import WidgetsLoader from "@components/WidgetsLoader";

const ProtectedSHG = () => {
  const { user_id } = useAuth();
  const group_id = useGroupId();
  const [loading, setLoading] = useState(true);
  const [valid, setValid] = useState(false);
  const navigate = useNavigate();

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
      navigate('/404'); // Navigate to error page or handle error appropriately
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

  if (loading) {
    return <WidgetsLoader />;
  }

  return valid ? <Outlet /> : null;
};

export default ProtectedSHG;
