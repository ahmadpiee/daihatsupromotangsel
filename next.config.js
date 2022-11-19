const runtimeCaching = require('next-pwa/cache')
const isProd = process.env.NODE_ENV === 'production'

const WithPWA = require('next-pwa')({
  disable: isProd ? false : true,
  dest: 'public',
  runtimeCaching,
})

module.exports = WithPWA({
  devIndicators: {
    buildActivityPosition: 'bottom-left',
  },
  poweredByHeader: false,
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    locales: ['id', 'en'],
    defaultLocale: 'id',
    localeDetection: false,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        // port: '',
        // pathname: '/account123/**',
      },
      {
        protocol: 'https',
        hostname: 'asset.cloudinary.com',
      },
    ],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.(ogg|mp3|wav|mpe?g|mp4)$/i,
      use: {
        loader: 'file-loader',
        options: {
          publicPath: '/_next/static/',
          outputPath: 'static/',
          name: '[name].[ext]',
          esModule: false,
        },
      },
    })

    return config
  },

  async headers() {
    return [
      {
        // Apply these headers to all routes in your application.
        source: '/(.*)',
        headers: [
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload',
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'Permissions-Policy',
            value:
              'camera=(https://daihatsupromotangsel.com), microphone=(https://daihatsupromotangsel.com), geolocation=(https://daihatsupromotangsel.com), interest-cohort=(https://daihatsupromotangsel.com), fullscreen=(https://daihatsupromotangsel.com)',
          }, // change the link to real production domain or leave it empty see: https://www.w3.org/TR/permissions-policy-1/
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
      },
    ]
  },
})
