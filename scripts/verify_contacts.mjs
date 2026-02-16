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

const testContact = {
    name: "VERIFICATION_BOT",
    email: "verify@test.local",
    message: "Test message for contacts table migration.",
    created_at: new Date().toISOString()
};

console.log(`Verifying 'contacts' table at: ${url}...`);

try {
    const response = await fetch(`${url}/rest/v1/contacts`, {
        method: 'POST',
        headers: {
            'apikey': key,
            'Authorization': `Bearer ${key}`,
            'Content-Type': 'application/json',
            'Prefer': 'return=representation'
        },
        body: JSON.stringify(testContact)
    });

    if (response.ok) {
        console.log('/// SUCCESS: Mock message saved to contacts table. ///');
        const data = await response.json();
        console.log('Record inserted:', data);
    } else {
        console.error(`/// ERROR: ${response.status} ${response.statusText} ///`);
        const body = await response.text();
        console.error(`Response details: ${body}`);
    }
} catch (error) {
    console.error('/// CRITICAL: Verification failed ///', error);
}
