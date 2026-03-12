/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,
  images: {
    remotePatterns: [
      { hostname: "yt3.ggpht.com" },
      { hostname: "yt3.googleusercontent.com" },
      { hostname: "i.ytimg.com" },
    ],
  },
};

export default nextConfig;
