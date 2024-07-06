CREATE OR REPLACE FUNCTION add_user_to_membership(user_id_input UUID, group_id_input UUID)
RETURNS VOID AS $$
DECLARE
    group_contribution_amount NUMERIC;
    group_contribution_frequency VARCHAR(20);
BEGIN
    -- check if current user is trying to add themselves
    IF auth.uid() = user_id_input THEN
        RAISE EXCEPTION 'Self-adding is not allowed';
    END IF;

    -- Check if exceutor is admin of the group
    IF NOT EXISTS (
        SELECT 1
        FROM memberships m
        WHERE m.user_id = auth.uid()
          AND m.group_id = group_id_input
          AND m.role = 'admin'
    ) THEN
        RAISE EXCEPTION 'Unauthorized user';
    END IF;

    -- Check if the user is already a member of the group
    IF EXISTS (
        SELECT 1
        FROM memberships m
        WHERE m.user_id = user_id_input
          AND m.group_id = group_id_input
    ) THEN
        RAISE EXCEPTION 'User is already a member of the group';
    END IF;
    
    -- Fetch contribution details from the group
    SELECT contribution_amount, contribution_frequency
    INTO group_contribution_amount, group_contribution_frequency
    FROM groups
    WHERE group_id = group_id_input;
    
    -- Insert the new membership with fetched contribution details
    INSERT INTO memberships (membership_id, group_id, user_id, membership_status, role, contribution_amount, contribution_frequency)
    VALUES (uuid_generate_v4(), group_id_input, user_id_input, 'inactive', 'member', group_contribution_amount, group_contribution_frequency);
END;
$$ LANGUAGE plpgsql security definer;

-- Drop function
DROP FUNCTION add_user_to_membership(UUID, UUID);
