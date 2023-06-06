const path = require("path");
const autoprefixer = require("autoprefixer");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const MiniCSS = require("mini-css-extract-plugin");

module.exports = {
  entry: ["whatwg-fetch", `./src/index.js`],
  output: {
    filename: "out.js",
    path: path.resolve(__dirname, `./build`),
  },
  mode: "development",
  devtool: "source-map",
  devServer: {
    contentBase: path.join(__dirname, `public`),
    publicPath: "/build/",
    compress: true,
    port: 3007,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          "style-loader",
          // MiniCSS.loader,
          {
            loader: "css-loader",
            options: {
              sourceMap: true,
            },
          },
          {
            loader: "postcss-loader",
            options: {
              plugins: () => [autoprefixer()],
              sourceMap: true,
            },
          },
          "sass-loader",
        ],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        loader: "file-loader",
        options: {
          name: "[name].[ext]",
          publicPath: `/public/assets/`,
          outputPath: `/build/assets/`,
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: `index.html`,
      template: `public/index.html`,
    }),
    new CopyWebpackPlugin([{ from: "public/assets", to: "assets" }]),
    new MiniCSS({
      filename: "QuickStats.css",
    }),
  ],
};
