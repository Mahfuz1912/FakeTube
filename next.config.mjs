/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,
  images: {
    remotePatterns: [
      { hostname: "yt3.ggpht.com" },
      { hostname: "i.ytimg.com" },
    ],
  },
};

export default nextConfig;
