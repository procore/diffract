var webpack = require('webpack');

module.exports = {
  output: {
    library: 'Diffract',
    libraryTarget: 'umd',
  },

  externals: [
    {
      "react": {
        root: "React",
        commonjs2: "react",
        commonjs: "react",
        amd: "react"
      }
    },
    {
      "react/addons": {
        root: "React/addons",
        commonjs2: "react/addons",
        commonjs: "react/addons",
        amd: "react/addons"
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
