CREATE OR REPLACE FUNCTION reject_membership_invite(user_id_input UUID, group_id_input UUID)
RETURNS VOID AS $$
BEGIN
    -- Check if the current user is removing their own membership and the status is 'inactive'
    IF auth.uid() = user_id_input THEN
        DELETE FROM memberships
        WHERE user_id = user_id_input
          AND group_id = group_id_input
          AND membership_status = 'inactive';
    ELSE
        RAISE EXCEPTION 'Unauthorized user';
    END IF;
END;
$$ LANGUAGE plpgsql;

-- drop the function if it already exists
DROP FUNCTION IF EXISTS reject_membership_invite(UUID, UUID);