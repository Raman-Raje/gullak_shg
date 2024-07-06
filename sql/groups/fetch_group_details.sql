CREATE OR REPLACE FUNCTION fetch_group_details(user_id_input UUID, group_id_input UUID)
RETURNS TABLE (
  group_name VARCHAR,
  address TEXT,
  phone_number TEXT,
  email TEXT,
  image_url TEXT,
  max_members INTEGER,
  lock_in_period NUMERIC,
  is_registered BOOLEAN,
  registration_number VARCHAR,
  registration_date DATE,
  joining_fee NUMERIC,
  meeting_frequency VARCHAR,
  contribution_frequency VARCHAR,
  contribution_amount NUMERIC,
  contribution_day INTEGER,
  contribution_penalty NUMERIC,
  bank_name VARCHAR,
  bank_account_number VARCHAR,
  bank_account_type VARCHAR,
  bank_ifsc_code VARCHAR,
  bank_branch_name VARCHAR,
  bank_account_holder VARCHAR,
  max_loan_amount NUMERIC,
  loan_interest_rate NUMERIC,
  max_loan_duration NUMERIC,
  installment_penalty NUMERIC,
  membership_status VARCHAR,
  total_members INTEGER
) AS $$
BEGIN
  RETURN QUERY
  SELECT
      g.group_name,
      g.address,
      g.phone_number,
      g.email,
      g.image_url,
      g.max_members,
      g.lock_in_period,
      g.is_registered,
      g.registration_number,
      g.registration_date,
      g.joining_fee,
      g.meeting_frequency,
      g.contribution_frequency,
      g.contribution_amount,
      g.contribution_day,
      g.contribution_penalty,
      g.bank_name,
      g.bank_account_number,
      g.bank_account_type,
      g.bank_ifsc_code,
      g.bank_branch_name,
      g.bank_account_holder,
      g.max_loan_amount,
      g.loan_interest_rate,
      g.max_loan_duration,
      g.installment_penalty,
      m.membership_status,
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
      g.group_name,
      g.address,
      g.phone_number,
      g.email,
      g.image_url,
      g.max_members,
      g.lock_in_period,
      g.is_registered,
      g.registration_number,
      g.registration_date,
      g.joining_fee,
      g.meeting_frequency,
      g.contribution_frequency,
      g.contribution_amount,
      g.contribution_day,
      g.contribution_penalty,
      g.bank_name,
      g.bank_account_number,
      g.bank_account_type,
      g.bank_ifsc_code,
      g.bank_branch_name,
      g.bank_account_holder,
      g.max_loan_amount,
      g.loan_interest_rate,
      g.max_loan_duration,
      g.installment_penalty,
      m.membership_status;
END;
$$ LANGUAGE plpgsql;


-- test fetch_group_details
SELECT * FROM fetch_group_details('16540f5f-4c06-47bd-9432-4fba01ee654d', '6344d017-3b0b-4071-87bf-ef2268509b6f');