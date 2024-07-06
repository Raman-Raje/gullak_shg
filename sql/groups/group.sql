CREATE TABLE Groups (

    -- basic information
    group_id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    group_name VARCHAR(255) NOT NULL,
    address TEXT,
    phone_number TEXT CHECK (phone_number ~ '^\+?[0-9\s\-()]*$'),
    -- group email check if provided
    email TEXT,
    CHECK (email IS NULL OR email = '' OR email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z]{2,}$'),
    image_url TEXT,
    max_members INTEGER CHECK (max_members > 0),
    min_members INTEGER CHECK (min_members >= 1 AND min_members <= max_members), -- Ensure min is within valid range
    lock_in_period NUMERIC CHECK (lock_in_period >= 0), -- Lock-in period for members in months
    is_registered BOOLEAN,
    registration_number VARCHAR,
    registration_date DATE CHECK (registration_date <= CURRENT_DATE),

    -- contribution details
    joining_fee NUMERIC CHECK (joining_fee >= 0), -- Joining fee for new members
    meeting_frequency VARCHAR CHECK (meeting_frequency IN ('daily', 'weekly', 'monthly', 'quarterly')),
    contribution_frequency VARCHAR CHECK (contribution_frequency IN ('monthly', 'quarterly')), -- Contribution frequency
    contribution_amount NUMERIC CHECK (contribution_amount >= 0), -- Contribution amount
    contribution_day INTEGER CHECK (contribution_day >= 1 AND contribution_day <= 30), -- contribution day based on contribution_frequency (1-30)
    contribution_penalty NUMERIC CHECK (contribution_penalty >= 0), -- Penalty for late contributions

    -- bank details
    bank_name VARCHAR,
    bank_account_number VARCHAR,
    bank_account_type VARCHAR CHECK (bank_account_type IN ('savings', 'current', 'joint')),
    bank_ifsc_code VARCHAR,
    bank_branch_name VARCHAR,
    bank_account_holder VARCHAR,

    -- loan details
    max_loan_amount NUMERIC CHECK (max_loan_amount >= 0), -- Maximum loan amount SHG can provide
    loan_interest_rate NUMERIC CHECK (loan_interest_rate >= 0), -- Interest rate for loans
    max_loan_duration NUMERIC CHECK (max_loan_duration >= 0), -- Maximum loan duration in months
    installment_penalty NUMERIC CHECK (installment_penalty >= 0), -- Penalty for late loan installments

    -- other details
    created_by UUID, -- User who created the SHG    
    created_at TIMESTAMP WITH TIME ZONE DEFAULT current_timestamp,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT current_timestamp,
    updated_by UUID -- User who last updated the SHG
);

-- Enable Row Level Security
ALTER TABLE Groups ENABLE ROW LEVEL SECURITY;

-- Allow members to select only SHGs they belong to
CREATE POLICY member_select ON Groups
FOR SELECT
USING (EXISTS (
    SELECT 1
    FROM Memberships
    WHERE group_id = Groups.group_id AND user_id = auth.uid()
));

-- Allow authenticated users to insert new groups
CREATE POLICY insert_groups ON groups
FOR INSERT
WITH CHECK (auth.role() = 'authenticated');

-- Allow admins to update their own groups
CREATE POLICY admin_update_own_group ON groups
FOR UPDATE
USING (EXISTS (
    SELECT 1
    FROM memberships AS m
    WHERE m.user_id = auth.uid()
      AND m.role = 'admin'
      AND m.group_id = groups.group_id
));

-- Allow admins to delete their own groups
CREATE POLICY admin_delete_own_group ON groups
FOR DELETE
USING (EXISTS (
    SELECT 1
    FROM memberships AS m
    WHERE m.user_id = auth.uid()
      AND m.role = 'admin'
      AND m.group_id = groups.group_id
));