CREATE OR REPLACE FUNCTION fetch_group_info(user_id_input UUID, group_id_input UUID)
RETURNS TABLE (
  group_id UUID,
  group_name VARCHAR,
  contribution_frequency VARCHAR,
  contribution_amount NUMERIC,
  contribution_day INTEGER,
  bank_account_number VARCHAR,
  bank_ifsc_code VARCHAR,
  membership_status VARCHAR,
  assigned_role VARCHAR,
  total_members INTEGER
) AS $$
BEGIN
  RETURN QUERY
  SELECT
      g.group_id,
      g.group_name,
      g.contribution_frequency,
      g.contribution_amount,
      g.contribution_day,
      g.bank_account_number,
      g.bank_ifsc_code,
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
      AND g.group_id = group_id_input
  GROUP BY
      g.group_id,
      g.group_name,
      g.contribution_frequency,
      g.contribution_amount,
      g.contribution_day,
      g.bank_account_number,
      g.bank_ifsc_code,
      m.membership_status,
      m.role;
END;
$$ LANGUAGE plpgsql;


-- test fetch_group_info
SELECT * FROM fetch_group_info('16540f5f-4c06-47bd-9432-4fba01ee654d', '6344d017-3b0b-4071-87bf-ef2268509b6f');