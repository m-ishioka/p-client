loadEnv(process.env.APP_ENV)
require('dotenv').config({ path: `./env/env.${process.env.ENVIRONMENT}.js` })

/**
 * @param {string} appEnv
 */
function loadEnv(appEnv = 'local') {
  const env = {
    ...require(`./env/env.${appEnv}.js`),

    NEXT_PUBLIC_APP_ENV: appEnv,
  }

  Object.entries(env).forEach(([key, value]) => {
    process.env[key] = value
  })
}

/** @type {import('next').NextConfig} */
const path = require('path')
const isProd = process.env.APP_ENV === 'production'

// socket hang up 対策
// @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Keep-Alive
// https://nextjs.org/docs/api-reference/next.config.js/disabling-http-keep-alive
// https://github.com/vercel/next.js/issues/36251
// httpAgentOptions: {
//   keepAlive: false,
// },
const nextConfig = {
  // production buildではソースが難読化されるのでssg-buildで検証する際は、以下のプロパティが必須（ソースマップが出力される）
  productionBrowserSourceMaps: true,
  // 下層ページをhoge/index.htmlと設定することで /hoge/でルーティング可能にする
  trailingSlash: true,
  reactStrictMode: true,

  // images: {
  //   loader: 'imgix',
  //   path: '',
  // },
  // typescript: {
  //   // !! 警告 !!
  //   // あなたのプロジェクトに型エラーがあったとしても、プロダクションビルドを正常に完了するために危険な許可をする。
  //   // !! 警告 !!
  //   ignoreBuildErrors: true,
  // },
  images: {
    domains: ['localhost'],
  },
  webpack(config) {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.join(__dirname, 'src'),
      '@components': path.join(__dirname, 'src/components/*'),
      '@pages': path.join(__dirname, 'src/pages/*'),
      '@hooks': path.join(__dirname, 'src/hooks/*'),
      '@styles': path.join(__dirname, 'src/styles/*'),
      '@utilities': path.join(__dirname, 'src/utilities/*'),
      '@viewmodels': path.join(__dirname, 'src/viewmodels/*'),
      '@constants': path.join(__dirname, 'src/constants/*'),
      '@types': path.join(__dirname, 'types/*'),
    }
    config.module.rules.push({
      test: /\.md$/,
      use: 'raw-loader',
    })
    return config
  },
  assetPrefix: process.env.NEXT_PUBLIC_DOCUMENT_ROOT,
  httpAgentOptions: {
    keepAlive: false,
  },
  compiler: {
    removeConsole: isProd,
  },
}

module.exports = nextConfig
