CREATE OR REPLACE FUNCTION fetch_update_group_info(user_id_input UUID, group_id_input UUID)
RETURNS TABLE (
  group_name VARCHAR,
  phone_number TEXT,
  email TEXT,
  address TEXT,
  registration_number VARCHAR,
  registration_date DATE,
  max_members INTEGER,
  joining_fee NUMERIC,
  meeting_frequency VARCHAR,
  contribution_day INTEGER,
  contribution_penalty NUMERIC,
  max_loan_amount NUMERIC,
  loan_interest_rate NUMERIC,
  max_loan_duration NUMERIC,
  installment_penalty NUMERIC
) AS $$
BEGIN
  RETURN QUERY
  SELECT
      g.group_name,
      g.phone_number,
      g.email,
      g.address,
      g.registration_number,
      g.registration_date,
      g.max_members,
      g.joining_fee,
      g.meeting_frequency,
      g.contribution_day,
      g.contribution_penalty,
      g.max_loan_amount,
      g.loan_interest_rate,
      g.max_loan_duration,
      g.installment_penalty
  FROM
      groups g
  JOIN
      memberships m ON g.group_id = m.group_id
  WHERE
      m.user_id = user_id_input
      AND m.role = 'admin'
      AND g.group_id = group_id_input
  GROUP BY
      g.group_name,
      g.phone_number,
      g.email,
      g.address,
      g.registration_number,
      g.registration_date,
      g.max_members,
      g.joining_fee,
      g.meeting_frequency,
      g.contribution_day,
      g.contribution_penalty,
      g.max_loan_amount,
      g.loan_interest_rate,
      g.max_loan_duration,
      g.installment_penalty;
END;
$$ LANGUAGE plpgsql;
