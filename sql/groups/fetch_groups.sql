CREATE OR REPLACE FUNCTION fetch_groups(user_id_input UUID)
RETURNS TABLE (
  group_id UUID,
  group_name VARCHAR,
  bank_account_number VARCHAR,
  bank_ifsc_code VARCHAR,
  contribution_amount NUMERIC,
  contribution_frequency VARCHAR,
  membership_status VARCHAR,
  assigned_role VARCHAR,
  total_members INTEGER
) AS $$
BEGIN
  RETURN QUERY
  SELECT
      g.group_id,
      g.group_name,
      g.bank_account_number,
      g.bank_ifsc_code,
      m.contribution_amount,
      m.contribution_frequency,
      m.membership_status,
      m.role AS assigned_role,
      COUNT(m_all.user_id)::INTEGER AS total_members
  FROM
      groups g
  JOIN
      memberships m ON g.group_id = m.group_id
  JOIN
      memberships m_all ON g.group_id = m_all.group_id
  WHERE
      m.user_id = user_id_input
  GROUP BY
      g.group_id,
      g.group_name,
      m.contribution_amount,
      m.contribution_frequency,
      m.membership_status,
      m.role;
END;
$$ LANGUAGE plpgsql;


-- Replace 'your-user-id' with an actual UUID value of a user in your database
SELECT * FROM fetch_groups('16540f5f-4c06-47bd-9432-4fba01ee654d');