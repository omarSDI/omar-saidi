import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";

// Safe initialization that won't crash the build if env vars are missing
export const supabase = (supabaseUrl && supabaseKey && supabaseUrl.startsWith('http'))
    ? createClient(supabaseUrl, supabaseKey)
    : null as any;

if (!supabase && typeof window !== 'undefined') {
    console.warn("Supabase is not configured. Features depending on backend will be disabled.");
}
