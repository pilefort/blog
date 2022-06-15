import withPlugins from 'next-compose-plugins'
import withPWA from 'next-pwa'

const rewriteSetting = {
  beforeFiles: [
    {
      source: '/',
      destination: '/scraps',
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
  // TODO: total blocking timeは短くなるが、next/linkの動きが悪くなる (クリックしても数秒間ページ遷移しない)
  // 今後の動向を見て、有効にするかどうか判断
  // swcMinify: true,
}

const pwaSetting = {
  pwa:
      {
        dest: 'public',
        register: true,
        skipWaiting: true,
        disable:
            process.env.NODE_ENV === 'development'
      },
}


/** @type {import('next').NextConfig} */
export default withPlugins([
    [withPWA, pwaSetting]
],
    nextConfig
)

