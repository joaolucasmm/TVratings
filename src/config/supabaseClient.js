import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://ifzeeugxkcbliqkhteji.supabase.co"
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlmemVldWd4a2NibGlxa2h0ZWppIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDY1NjAyMjEsImV4cCI6MjA2MjEzNjIyMX0.8t2JWkH25xDTZiNFOz1Y3QsYWIQg7aily7h4ql8_Mo8"
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;