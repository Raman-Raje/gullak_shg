// supabase client
import { createClient } from '@supabase/supabase-js'

// fetch env variables
const SUPABASE_URL = process.env.REACT_APP_SUPABASE_URL
const SUPABASE_ANON_KEY = process.env.REACT_APP_SUPABASE_ANON_KEY

// create supabase client
const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)

export default supabase