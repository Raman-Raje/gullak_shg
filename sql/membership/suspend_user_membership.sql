CREATE OR REPLACE FUNCTION suspend_user_membership(user_id_input UUID, group_id_input UUID)
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
    
    -- Suspend the membership if it is active
    UPDATE memberships
    SET membership_status = 'suspended'
    WHERE user_id = user_id_input
      AND group_id = group_id_input
      AND membership_status = 'active';

    -- Check if the membership was actually updated
    IF NOT FOUND THEN
        RAISE EXCEPTION 'User is not an active member of the group';
    END IF;
END;
$$ LANGUAGE plpgsql SECURITY INVOKER;
