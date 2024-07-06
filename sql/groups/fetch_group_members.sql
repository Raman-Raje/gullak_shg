-- Function to get all members of a given group
CREATE OR REPLACE FUNCTION fetch_group_members(group_id_input UUID)
RETURNS TABLE (
    user_id UUID,
    full_name TEXT,
    email TEXT,
    phone_number TEXT,
    avatar_url TEXT,
    membership_status TEXT,
    role TEXT
) AS $$
BEGIN
    RETURN QUERY
    SELECT u.user_id, u.full_name, u.email, u.phone_number, u.avatar_url , m.membership_status::TEXT, m.role::TEXT
    FROM 
        users u
    JOIN 
        memberships m 
    ON 
        u.user_id = m.user_id
    WHERE 
        m.group_id = group_id_input;
END;
$$ LANGUAGE plpgsql;


-- to drop the function, run:
DROP FUNCTION fetch_group_members(UUID);

-- test the function
SELECT * FROM fetch_group_members('00000000-0000-0000-0000-000000000000');