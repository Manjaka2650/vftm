/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // domains: ["localhost"], // Ajouter votre domaine ici
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "3000",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
