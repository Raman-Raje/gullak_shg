-- Set up Storage!
-- Create a bucket named 'avatars'
insert into storage.buckets (id, name) values ('avatars', 'avatars');

-- Enable RLS on storage.objects
alter table storage.objects enable row level security;

-- Create a policy to allow authenticated users to read all files in the 'avatars' bucket
create policy "Authenticated users can read all avatars" on storage.objects
  for select using (auth.role() = 'authenticated' and bucket_id = 'avatars');

-- Create a policy to allow authenticated users to insert their own files into the 'avatars' bucket
create policy "Authenticated users can insert their own avatars" on storage.objects
  for insert with check (auth.role() = 'authenticated' and bucket_id = 'avatars');

-- Create a policy to allow authenticated users to update their own files in the 'avatars' bucket
create policy "Authenticated users can update their own avatars" on storage.objects
  for update with check (auth.role() = 'authenticated' and bucket_id = 'avatars');

-- Create a policy to allow authenticated users to delete their own files in the 'avatars' bucket
create policy "Authenticated users can delete their own avatars" on storage.objects
  for delete using (auth.role() = 'authenticated' and bucket_id = 'avatars');

-- Create a trigger function to update the avatar URL in the users table
CREATE OR REPLACE FUNCTION public.update_avatar_url()
RETURNS TRIGGER AS $$
DECLARE
  new_avatar_url TEXT;
  extracted_user_id UUID;
BEGIN
  -- Construct the public URL directly in the function
  new_avatar_url := 'https://uorqkiflhqvfimjgrzmv.supabase.co/storage/v1/object/public/avatars/' || NEW.name;

  -- Extract the user_id from the metadata
  extracted_user_id := split_part(NEW.name, '/', 1)::UUID;

  -- Update the avatar_url in the users table
  UPDATE users
  SET avatar_url = new_avatar_url,
      updated_at = NOW()
  WHERE user_id = extracted_user_id;

  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create the trigger on the storage.objects table
CREATE TRIGGER on_avatar_updated
AFTER INSERT OR UPDATE ON storage.objects
FOR EACH ROW
WHEN (NEW.bucket_id = 'avatars')
EXECUTE FUNCTION public.update_avatar_url();