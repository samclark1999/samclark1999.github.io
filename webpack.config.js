const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = (env, argv) => {
  const isProduction = argv.mode === "production";
  const isWatch = argv.watch || false;

  return {
    entry: "./src/index.js",
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: isProduction ? "[name].[contenthash].js" : "bundle.js",
      clean: true,
      publicPath: "/",
    },
    // Watch mode configuration
    watchOptions: {
      ignored: /node_modules/,
      aggregateTimeout: 300, // Delay before rebuilding (ms)
      poll: false, // Use file system events instead of polling
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env", "@babel/preset-react"],
            },
          },
        },
        {
          test: /\.(sa|sc|c)ss$/,
          use: ["style-loader", "css-loader", "sass-loader"],
        },
        {
          test: /\.(png|jpe?g|gif|svg)$/i,
          type: "asset/resource",
        },
        {
          test: /\.webp$/i,
          type: "asset/resource",
          generator: {
            filename: "images/[hash][ext][query]",
          },
        },
      ],
    },
    resolve: {
      extensions: [".js", ".jsx"],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "./public/index.html",
      }),
      new CopyWebpackPlugin({
        patterns: [
          { from: "favicon.ico", to: "favicon.ico" },
          { from: "favicon.svg", to: "favicon.svg" },
          { from: "favicon-96x96.png", to: "favicon-96x96.png" },
          { from: "apple-touch-icon.png", to: "apple-touch-icon.png" },
          {
            from: "web-app-manifest-192x192.png",
            to: "web-app-manifest-192x192.png",
          },
          {
            from: "web-app-manifest-512x512.png",
            to: "web-app-manifest-512x512.png",
          },
          { from: "site.webmanifest", to: "site.webmanifest" },
        ],
      }),
    ],
    devServer: {
      static: [
        {
          directory: path.join(__dirname, "dist"),
        },
        {
          directory: path.join(__dirname, "public"),
          publicPath: "/",
        },
      ],
      compress: true,
      port: 3000,
      open: false,
      hot: true,
      historyApiFallback: true,
    },
    mode: isProduction ? "production" : "development",
  };
};
