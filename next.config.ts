import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // AVIF lebih kecil dari WebP; browser lama otomatis jatuh ke WebP.
    formats: ["image/avif", "image/webp"],
    // Cache hasil optimasi gambar selama 30 hari.
    minimumCacheTTL: 60 * 60 * 24 * 30,
  },

  // Hilangkan header "X-Powered-By: Next.js".
  poweredByHeader: false,

  // Kompresi gzip/brotli untuk HTML & aset teks.
  compress: true,
};

export default nextConfig;
