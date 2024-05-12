/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'bogvivspqbkcdficaxkc.supabase.co'
            }
        ]
    }
};

export default nextConfig;

