-- Create a table for public users
create table users (
  user_id uuid references auth.users on delete cascade not null primary key,
  created_at timestamp with time zone default now(),
  updated_at timestamp with time zone,
  username text unique,
  full_name text,
  email text,  -- Add email column
  avatar_url text,
  website text,
  provider text,
  date_of_birth DATE CHECK (date_of_birth <= CURRENT_DATE AND date_of_birth >= '1900-01-01'),
  address TEXT,
  phone_number TEXT CHECK (phone_number ~ '^\+?[0-9\s\-()]*$'),

  constraint username_length check (char_length(username) >= 3),
  constraint email_format check (email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$')  -- Email format check
);

-- policies
-- Set up Row Level Security (RLS)
alter table users
  enable row level security;

create policy "Users profiles are viewable by everyone." on users
  for select using (true);

  -- Allow authenticated users to select all users
create policy "Authenticated users can select all users." on users
  for select using (auth.role() = 'authenticated');

create policy "Profiles can insert their own profile." on users
  for insert with check ((select auth.uid()) = user_id);

create policy "Profiles can update own profile." on users
  for update using ((select auth.uid()) = user_id);


-- This trigger automatically creates a users entry when a new user signs up via Supabase Auth.
create function public.handle_new_user()
returns trigger as $$
begin
  insert into public.users (user_id, full_name, email, avatar_url, provider )
  values (new.id, new.raw_user_meta_data->>'full_name',new.raw_user_meta_data->>'email', new.raw_user_meta_data->>'avatar_url', new.raw_app_meta_data->>'provider');
  return new;
end;
$$ language plpgsql security definer;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();