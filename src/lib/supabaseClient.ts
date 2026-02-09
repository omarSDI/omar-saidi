import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";

// Check if URL is valid to prevent crash during module evaluation
const isValidUrl = (url: string) => {
    try {
        new URL(url);
        return url.startsWith('http');
    } catch {
        return false;
    }
};

export const supabase = isValidUrl(supabaseUrl) && supabaseAnonKey
    ? createClient(supabaseUrl, supabaseAnonKey)
    : (null as any);

if (!supabase) {
    console.warn("Supabase is not configured. Direct database features (like the contact form) will be disabled until NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY are set in .env.local");
}
