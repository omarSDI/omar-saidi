import fs from 'fs';
import path from 'path';

const envPath = path.join(process.cwd(), '.env.local');

if (!fs.existsSync(envPath)) {
    console.error('.env.local not found');
    process.exit(1);
}

const envContent = fs.readFileSync(envPath, 'utf8');

const getEnvVar = (name) => {
    const match = envContent.match(new RegExp(`${name}=(.*)`));
    return match ? match[1].trim() : null;
};

const url = getEnvVar('NEXT_PUBLIC_SUPABASE_URL');
const key = getEnvVar('NEXT_PUBLIC_SUPABASE_ANON_KEY');

if (!url || !key) {
    console.error('Missing Supabase configuration in .env.local');
    process.exit(1);
}

console.log(`Pinging Supabase project: ${url}...`);

try {
    const response = await fetch(`${url}/rest/v1/contacts?select=*&limit=1`, {
        headers: {
            'apikey': key,
            'Authorization': `Bearer ${key}`
        }
    });

    if (response.ok) {
        console.log('/// SUCCESS: Signal transmitted. Project activity recorded. ///');
    } else {
        console.error(`/// ERROR: ${response.status} ${response.statusText} ///`);
        const body = await response.text();
        console.error(`Response details: ${body}`);
        console.log('\nTip: If the "contacts" table doesn\'t exist yet, this still counts as API activity for Supabase.');
    }
} catch (error) {
    console.error('/// CRITICAL: Failed to reach Supabase server ///', error);
}
