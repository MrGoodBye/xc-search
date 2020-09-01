/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable unicorn/prevent-abbreviations */
const { merge } = require('webpack-merge')
const common = require('./webpack.common.js')
const { SERVER_HOST, SERVER_PORT } = require('../consts')

module.exports = merge(common, {
  mode: 'development',
  devServer: {
    host: SERVER_HOST,
    port: SERVER_PORT,
    stats: 'errors-only',
    clientLogLevel: 'silent',
    compress: true,
    open: true,
    hot: true,
  },
})
