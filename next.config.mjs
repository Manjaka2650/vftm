/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // domains: ["localhost"], // Ajouter votre domaine ici
    remotePatterns: [
      {
        protocol: "https",
        hostname: "Manjaka2650.github.io",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "http",
        hostname: "localhost",
        port: "5000",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
