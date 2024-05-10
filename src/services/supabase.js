import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://dhrcwgucmuxqcfvsffjv.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRocmN3Z3VjbXV4cWNmdnNmZmp2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDcyNzIxNjYsImV4cCI6MjAyMjg0ODE2Nn0.dHHiVGaYDB-epHFwgGB0CDGp7piBSgdV7II0bzZXLnI";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
