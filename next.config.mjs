/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
            {
                source: '/linkedin',
                destination: 'https://www.linkedin.com/in/jiechen-sbu',
                permanent: true,
                basePath: false
            },
            {
                source: '/resume',
                destination: 'https://drive.google.com/file/d/1YYvgQczc_2N1tn6oSFrAqZYatgVpykkL/view?usp=drive_link',
                permanent: true,
                basePath: false
            },
            {
                source: '/github',
                destination: 'https://github.com/jiechenmc',
                permanent: true,
                basePath: false
            }
        ]
    },
};

export default nextConfig;
