import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "image.tuasaude.com",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/guia-completo-para-hipertrofia-pos-bariatrica",
        destination: "/blog/7-deficiencias-nutricionais-pos-bariatrica",
        permanent: true,
      },
      {
        source: "/blog/guia-completo-para-hipertrofia-pos-bariatrica",
        destination: "/blog/7-deficiencias-nutricionais-pos-bariatrica",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;