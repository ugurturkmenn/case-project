/* eslint-disable */
const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ESLintPlugin = require("eslint-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

const dotenv = require("dotenv").config({ path: __dirname + "/.env" });
const isDevelopment = process.env.NODE_ENV === "dev";

let requiredEnvs = {};

if (process.env) {
  Object.keys(process.env).forEach((key) => {
    if (key.includes("REACT_") || key === "env") {
      requiredEnvs[key] = process.env[key];
    }
  });
}

const styleLoader = isDevelopment
  ? "style-loader"
  : MiniCssExtractPlugin.loader;

let plugins = [
  new HtmlWebpackPlugin({
    template: path.join(__dirname, "public", "index.html"),
  }),

  new ESLintPlugin({
    extensions: [`js`, `jsx`, `ts`, `tsx`],
    exclude: [`node_modules`],
  }),
  new webpack.DefinePlugin({
    "process.env": JSON.stringify(requiredEnvs || {}),
    "process.env.NODE_ENV": JSON.stringify(
      isDevelopment ? "development" : "production"
    ),
  }),
  new MiniCssExtractPlugin(),
];

module.exports = function () {
  return {
    entry: path.join(path.resolve(__dirname, "src", "index.tsx")),
    output: {
      path: path.resolve(__dirname, "dist"),
      publicPath: "/",
      filename: "[name].[contenthash].js",
      chunkFilename: "[id].[chunkhash].js",
      clean: true,
    },

    mode: isDevelopment ? "development" : "production",
    devtool: isDevelopment ? "source-map" : false,
    devServer: {
      static: {
        directory: path.join(__dirname, "public"),
      },
      historyApiFallback: true,
      compress: true,
      port: 3000,
      open: false,
    },
    module: {
      rules: [
        {
          test: /\.(png|jpe?g|gif)$/i,
          use: [
            {
              loader: "file-loader",
              options: {
                name: "[name].[hash].[ext]",
              },
            },
          ],
        },
        {
          test: /\.tsx?$/,
          use: ["swc-loader"],
        },

        {
          test: /\.(sa|sc|c)ss$/i,
          exclude: /\.module\.(sa|sc|c)ss$/,
          use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"],
        },
      ],
    },
    resolve: {
      modules: ["node_modules", path.resolve(__dirname)],
      extensions: [".ts", ".tsx", ".js", ".jsx", ".json"],
      plugins: [],
      alias: {
        "@": path.resolve(__dirname, "src"),
      },
    },
    optimization: {
      minimizer: [new TerserPlugin(), new CssMinimizerPlugin()],
      splitChunks: {
        maxSize: 1000 * 244,
        cacheGroups: {
          default: false,
          commons: {
            test: /node_modules/,
            chunks: "all",
            filename: "vendor.[name].[contenthash].bundle.js",
          },
        },
      },
    },
    plugins: plugins,
  };
};
