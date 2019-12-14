const path = require('path')
const webpack = require('webpack')
const AwsSamPlugin = require('aws-sam-webpack-plugin')

const awsSamPlugin = new AwsSamPlugin()

module.exports = (env, options) => ({
  entry: {
    X: './src/X',
    Y: './src/Y',
  },
  output: {
    filename: '[name]/app.js',
    libraryTarget: 'commonjs2',
    path: path.resolve('.aws-sam/build'),
  },
  target: 'node',
  //plugins: [
    //awsSamPlugin,
  //],
})
