CREATE OR REPLACE FUNCTION reactivate_user_membership(user_id_input UUID, group_id_input UUID)
RETURNS VOID AS $$
BEGIN
    -- Check if the executor is an admin of the group
    IF NOT EXISTS (
        SELECT 1
        FROM memberships m
        WHERE m.user_id = auth.uid()
          AND m.group_id = group_id_input
          AND m.role = 'admin'
    ) THEN
        RAISE EXCEPTION 'Unauthorized user';
    END IF;
    
    -- Reactivate the membership if it is suspended
    UPDATE memberships
    SET membership_status = 'active'
    WHERE user_id = user_id_input
      AND group_id = group_id_input
      AND membership_status = 'suspended';

    -- Check if the membership was actually updated
    IF NOT FOUND THEN
        RAISE EXCEPTION 'User is not a suspended member of the group';
    END IF;
END;
$$ LANGUAGE plpgsql SECURITY INVOKER;

