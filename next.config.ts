import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export for optimal performance and hosting flexibility
  output: 'export',

  // Consistent URL structure
  trailingSlash: true,

  // Image optimization for static export
  images: {
    unoptimized: true,
  },

  // Performance optimizations
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ['lucide-react']
  },

  // Security and SEO
  generateEtags: false,
  poweredByHeader: false,

  // Enable gzip compression
  compress: true,

  // Redirects not available with static export
};

export default nextConfig;
