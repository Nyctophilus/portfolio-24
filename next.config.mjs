/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "github.com",
      },
      {
        protocol: "https",
        hostname: "nyctophilus.github.io",
      },
      {
        protocol: "https",
        hostname: "raw.githubusercontent.com",
        pathname: "/Nyctophilus/**",
      },
    ],
  },
};

export default nextConfig;
