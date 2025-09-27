/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    trailingSlash: true,
    output: "export",
    images: {
        unoptimized: true // <-- if you're using <Image> and need static export compatibility
    },
};

export default nextConfig;
