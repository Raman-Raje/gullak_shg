CREATE OR REPLACE FUNCTION valid_user_for_shg(user_id_input UUID, group_id_input UUID)
RETURNS BOOLEAN AS $$
DECLARE
    is_valid BOOLEAN;
BEGIN
    SELECT CASE 
               WHEN membership_status IN ('active', 'suspended') THEN TRUE
               ELSE FALSE
           END INTO is_valid
    FROM memberships
    WHERE user_id = user_id_input
      AND group_id = group_id_input
      AND membership_status IN ('active', 'suspended');

    RETURN is_valid;
END;
$$ LANGUAGE plpgsql;

-- drop function
DROP FUNCTION valid_user_for_shg(UUID, UUID);

-- test function
SELECT valid_user_for_shg('b1b4b3b2-b1b4-b3b2-b1b4-b3b2b1b4b3', 'b1b4b3b2-b1b4-b3b2-b1b4-b3b2b1b4b3');
