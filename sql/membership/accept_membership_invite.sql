CREATE OR REPLACE FUNCTION accept_membership_invite(user_id_input UUID, group_id_input UUID)
RETURNS VOID AS $$
BEGIN
    -- Check if the current user is updating their own membership and the transition is from 'inactive' to 'active'
    IF auth.uid() = user_id_input THEN
        UPDATE memberships
        SET membership_status = 'active'
        WHERE user_id = user_id_input
          AND group_id = group_id_input
          AND membership_status = 'inactive';
    ELSE
        RAISE EXCEPTION 'Unauthorized user';
    END IF;
END;
$$ LANGUAGE plpgsql;
