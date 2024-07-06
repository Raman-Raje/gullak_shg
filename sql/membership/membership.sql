CREATE TABLE Memberships (
    membership_id UUID PRIMARY KEY DEFAULT uuid_generate_v4(), -- Auto-generate UUIDs for new records
    group_id UUID NOT NULL,
    user_id UUID NOT NULL,
    role VARCHAR(20) NOT NULL CHECK (role IN ('admin', 'member', 'crp')), -- Define valid roles
    membership_status VARCHAR(20) NOT NULL CHECK (membership_status IN ('active', 'inactive', 'left', 'suspended')), -- Define valid statuses
    contribution_amount NUMERIC CHECK (contribution_amount >= 0), -- Ensure non-negative contribution amount
    contribution_frequency VARCHAR(20) CHECK (contribution_frequency IN ('monthly', 'quarterly', 'yearly')), -- Define valid frequencies
    FOREIGN KEY (group_id) REFERENCES Groups(group_id) ON DELETE CASCADE,
    FOREIGN KEY (user_id) REFERENCES Users(user_id) ON DELETE CASCADE
);

-- Add indexes to improve performance
CREATE INDEX idx_memberships_group_id ON Memberships(group_id);
CREATE INDEX idx_memberships_user_id ON Memberships(user_id);

-- ************************************ POLICIES ************************************

-- Enable Row Level Security
ALTER TABLE Memberships ENABLE ROW LEVEL SECURITY;

-- Policy: Allow users to select their own memberships
CREATE POLICY user_select_own_memberships ON memberships
FOR SELECT
USING (user_id = auth.uid());

-- Policy: Allow users to update their own inactive memberships to active
CREATE POLICY user_update_own_inactive_memberships ON memberships
FOR UPDATE
USING (
    user_id = auth.uid() AND membership_status = 'inactive'
)
WITH CHECK (
    user_id = auth.uid() AND membership_status IN ('inactive', 'active')
);

-- Policy: Allow users to delete their own inactive memberships
CREATE POLICY user_delete_own_inactive_memberships ON memberships
FOR DELETE
USING (
    user_id = auth.uid() AND membership_status = 'inactive'
);

-- TOD: Causing Recursive Error
-- Policy: Allow users to select other members within their group
CREATE POLICY user_select_group_memberships ON memberships
FOR SELECT
USING (
    user_id = auth.uid() OR EXISTS (
        SELECT 1
        FROM memberships m
        WHERE m.user_id = auth.uid()
          AND m.group_id = memberships.group_id
    )
);

-- TODO: Causing Recursive Error
-- Policy: Allow admins to manage memberships within their groups
CREATE POLICY admin_manage_group_memberships ON memberships
FOR ALL
USING (
    EXISTS (
        SELECT 1
        FROM memberships m
        WHERE m.user_id = auth.uid()
          AND m.role = 'admin'
          AND m.group_id = memberships.group_id
    )
)
WITH CHECK (
    EXISTS (
        SELECT 1
        FROM memberships m
        WHERE m.user_id = auth.uid()
          AND m.role = 'admin'
          AND m.group_id = memberships.group_id
    )
);

-- Policy: Allow admins to insert new memberships within their groups
CREATE POLICY admin_insert_group_memberships ON memberships
FOR INSERT
WITH CHECK (
    EXISTS (
        SELECT 1
        FROM memberships m
        WHERE m.user_id = auth.uid()
          AND m.role = 'admin'
          AND m.group_id = memberships.group_id
    )
);


-- Allow all authenticated users to read the memberships table
CREATE POLICY select_all_memberships ON memberships
FOR SELECT
USING (auth.role() = 'authenticated');


-- ************************************ TRIGGERS ************************************

-- create a trigger to assign a admin role to the first user who creates the group

create or replace function public.assign_admin_role()
returns trigger as $$
begin

    -- Disable row level security temporarily
    perform set_config('row_security', 'off', true);

    insert into memberships (group_id, user_id, role, membership_status, contribution_amount, contribution_frequency)
    values (new.group_id, new.created_by, 'admin', 'active', new.contribution_amount, new.contribution_frequency);

    -- Re-enable row level security
    perform set_config('row_security', 'on', true);
    
    return new;
end;
$$ language plpgsql security definer;

create trigger assign_admin_role
after insert on groups
for each row
execute function public.assign_admin_role();