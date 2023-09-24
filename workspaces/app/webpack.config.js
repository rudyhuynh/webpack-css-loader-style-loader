const path = require("path");

/** @type {import('webpack').Configuration} */
module.exports = {
  entry: "./src/main.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    assetModuleFilename: "[name].[hash][ext]",
    clean: true,
  },
  devtool: "source-map",
  mode: "development",
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: path.resolve("./my-loaders/loaderX"),
          },
        ],
      },
    ],
  },
};
