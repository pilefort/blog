import mdx from '@next/mdx'

const withMDX = mdx({
  extension: /\.mdx?$/,
})

/** @type {import('next').NextConfig} */
export default {
  reactStrictMode: true,
  images: {
    domains: ['images.microcms-assets.io'],
  },
  async rewrites() {
    return {
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
              key: 'tags',
              value: '(?<tag>.*)',
            },
          ],
          destination: '/snippets/tags/:tag',
        },
      ],
    }
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback.fs = false
    }
    return config
  },
  withMDX: withMDX({
    pageExtensions: ['ts', 'tsx', 'mdx'],
  }),
}
