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
    ],
  },
};

export default nextConfig;
