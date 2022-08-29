/** @type {import('next').NextConfig} */

const { withSentryConfig } = require('@sentry/nextjs');
const withLess = require('next-with-less');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});
const path = require('path');
const xmEnv = require('./env.config.js');
const packageJson = require('./package.json');
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = withBundleAnalyzer(
  withLess({
    lessLoaderOptions: {
      // 修改antd样式
      // modifyVars: {
      //   "primary-color": "#9900FF",
      //   "border-radius-base": "2px",
      // },
      additionalData: (content) =>
        `${content}\n\n@import '${path.resolve('styles/variables.less')}';`,
    },
    reactStrictMode: true,
    swcMinify: true,
    distDir: 'dist',
    env: {
      XM_ENV: xmEnv[process.env.XM],
    },
    assetPrefix: isProd
      ? `//xmcdn.oss-cn-shanghai.aliyuncs.com/${packageJson.name}/${packageJson.version}/${process.env.XM}`
      : undefined,
    images: {
      domains: ['xmcdn.oss-cn-shanghai.aliyuncs.com', 'community-wscdn.xiaomawang.com'],
    },
    sentry: {
      disableServerWebpackPlugin: true,
      disableClientWebpackPlugin: true,
    },
  })
);

module.exports = withSentryConfig(nextConfig, {});
