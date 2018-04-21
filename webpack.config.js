const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const env = process.argv[3];

module.exports = {
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: { minimize: true }
          }
        ]
      },
      {
        test: /\.(png|jpe?g|svg)/i,
        use: [
          {
            loader: "url-loader",
            options: {
              name: "./assets/images/[name].[ext]",
              limit: 10000
            }
          },
          {
            loader: "img-loader"
          }
        ]
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"]
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              sourceMap: env === "development" || false,
            },
          },
          {
            loader: "css-loader",
            options: {
              sourceMap: env === "development" || false,
            },
          },
          {
            loader: "postcss-loader",
            options: {
              sourceMap: env === "development" || false,
            },
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: env === "development" || false,
            },
          },
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    })
  ]
};
