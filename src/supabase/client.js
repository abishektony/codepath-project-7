import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://xcbijepxzaugefxlwpla.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhjYmlqZXB4emF1Z2VmeGx3cGxhIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc0NDk0MDA4NCwiZXhwIjoyMDYwNTE2MDg0fQ.GsUN-XN9aIMXOyTWAQRnf3j0jQsi_NklQULZw9EDWRI';
export const supabase = createClient(supabaseUrl, supabaseKey);
