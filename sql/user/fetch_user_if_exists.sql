CREATE OR REPLACE FUNCTION fetch_user_if_exists(phone_number_input TEXT, email_input TEXT) 
RETURNS TABLE (
    user_id UUID,
    full_name TEXT,
    email TEXT,
    phone_number TEXT
) AS $$
BEGIN
    RETURN QUERY
    SELECT u.user_id, u.full_name, u.email, u.phone_number
    FROM users u
    WHERE (phone_number_input IS NOT NULL AND u.phone_number = phone_number_input)
       OR (email_input IS NOT NULL AND u.email = email_input)
    LIMIT 1;
END;
$$ LANGUAGE plpgsql;

-- to drop the function, run:
DROP FUNCTION fetch_user_if_exists(text,text);

-- test the function
SELECT * FROM fetch_user_if_exists('1234567890', NULL);
