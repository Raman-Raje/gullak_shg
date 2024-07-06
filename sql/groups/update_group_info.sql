CREATE OR REPLACE FUNCTION update_group_info(
  user_id_input UUID, 
  group_id_input UUID,
  new_group_name VARCHAR,
  new_phone_number TEXT,
  new_email TEXT,
  new_address TEXT,
  new_registration_number VARCHAR,
  new_registration_date DATE,
  new_max_members INTEGER,
  new_joining_fee NUMERIC,
  new_meeting_frequency VARCHAR,
  new_contribution_day INTEGER,
  new_contribution_penalty NUMERIC,
  new_max_loan_amount NUMERIC,
  new_loan_interest_rate NUMERIC,
  new_max_loan_duration NUMERIC,
  new_installment_penalty NUMERIC
) RETURNS VOID AS $$
BEGIN
  -- Check if the user is an admin in the specified group
  IF EXISTS (
    SELECT 1
    FROM memberships
    WHERE user_id = user_id_input
      AND group_id = user_id_input
      AND role = 'admin'
  ) THEN
    -- Update the group information
    UPDATE groups
    SET
      group_name = COALESCE(new_group_name, group_name),
      phone_number = COALESCE(new_phone_number, phone_number),
      email = COALESCE(new_email, email),
      address = COALESCE(new_address, address),
      registration_number = COALESCE(new_registration_number, registration_number),
      registration_date = COALESCE(new_registration_date, registration_date),
      max_members = COALESCE(new_max_members, max_members),
      joining_fee = COALESCE(new_joining_fee, joining_fee),
      meeting_frequency = COALESCE(new_meeting_frequency, meeting_frequency),
      contribution_day = COALESCE(new_contribution_day, contribution_day),
      contribution_penalty = COALESCE(new_contribution_penalty, contribution_penalty),
      max_loan_amount = COALESCE(new_max_loan_amount, max_loan_amount),
      loan_interest_rate = COALESCE(new_loan_interest_rate, loan_interest_rate),
      max_loan_duration = COALESCE(new_max_loan_duration, max_loan_duration),
      installment_penalty = COALESCE(new_installment_penalty, installment_penalty),
      updated_by = user_id_input  -- Set updated_by to the user_id making the update
    WHERE group_id = group_id_input;
  ELSE
    RAISE EXCEPTION 'User does not have admin rights for this group';
  END IF;
END;
$$ LANGUAGE plpgsql;
