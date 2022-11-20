import withPWA from 'next-pwa'
import withBundleAnalyzer from '@next/bundle-analyzer'

const rewriteSetting = {
  beforeFiles: [
    {
      source: '/',
      destination: '/latestScrap',
    },
    {
      source: '/snippets',
      has: [
        {
          type: 'query',
          key: 'tag',
          value: '(?<tag>.*)',
        },
      ],
      destination: '/snippets/tag/:tag',
    },
  ],
}

const nextConfig = {
  pageExtensions: ['ts', 'tsx', 'md', 'mdx'],
  reactStrictMode: true,
  images: {
    formats: ['image/webp'],
    domains: ['images.microcms-assets.io'],
  },
  async rewrites() {
    return rewriteSetting
  },
  webpack: (config, options) => {
    if (!options.isServer) {
      config.resolve.fallback.fs = false
    }
    return config
  },
  swcMinify: true,
}

const usePWAPlugin = withPWA({
  dest: 'public',
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === 'development'
})

const useBundleAnalyzer = withBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true'
})

/** @type {import('next').NextConfig} */
const nextConfigSetting = () => {
  const plugins = [usePWAPlugin, useBundleAnalyzer]
  return plugins.reduce((acc, plugin) => plugin(acc), { ...nextConfig })
}

export default nextConfigSetting

