import mdx from "@next/mdx";

const withMDX = mdx({
  extension: /\.mdx?$/,
  options: {},
});

const isProd = process.env.NODE_ENV === 'production';

// Check if using custom domain (no basePath needed) or GitHub Pages subdirectory
const useCustomDomain = true; // Set to true when using custom domain like devhimanshu.space

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: useCustomDomain ? '' : (isProd ? '/magic-portfolio' : ''),
  assetPrefix: useCustomDomain ? '' : (isProd ? '/magic-portfolio' : ''),
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  pageExtensions: ["ts", "tsx", "md", "mdx"],
  transpilePackages: ["next-mdx-remote"],
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.google.com",
        pathname: "**",
      },
    ],
  },
  sassOptions: {
    compiler: "modern",
    silenceDeprecations: ["legacy-js-api"],
  },
  trailingSlash: true,
  productionBrowserSourceMaps: false,
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production' ? {
      exclude: ['error', 'warn'],
    } : false,
  },
};

export default withMDX(nextConfig);
