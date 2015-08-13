var webpack = require('webpack');

module.exports = {
  entry: './src/index.js',

  output: {
    library: 'Diffract',
    libraryTarget: 'umd',
    path: './public/diffract.min.js'
  },

  externals: [
    {
      "react": {
        root: "React",
        commonjs2: "react",
        commonjs: "react",
        amd: "react"
      }
    }
  ],

  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  },

  resolve: {
    extensions: ["", ".js"]
  },

  plugins: [
   new webpack.optimize.UglifyJsPlugin({
     compressor: { warnings: false }
   })
  ]
};
