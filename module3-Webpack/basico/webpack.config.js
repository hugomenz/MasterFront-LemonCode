/* const path = require("path"); */
/* const { CleanWebpackPlugin } = require("clean-webpack-plugin"); */
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const path = require("path");

module.exports = {
  context: path.resolve(__dirname, "./src"),
  resolve: { extensions: [".js", ".ts"] },
  entry: {
    app: "./index.ts",
    /*     appStyles: [
      "./totalScoreComponentStyles.scss",
      "./averageComponentStyles.scss",
    ], */
    /* estilosterceros: "../node_modules/bootstrap/dist/css/bootstrap.css", */
  },
  output: {
    filename: "[name].[chunkhash].js",
    clean: true,
    /*         path: path.resolve(__dirname, "dist"), */
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      {
        test: /\.css$/,
        /* exclude: /node_modules/, */
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|jpg|gif)$/,
        type: "asset/resource",
      },
      {
        test: /\.html$/,
        loader: "html-loader",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "./index.html",
      scriptLoading: "blocking",
    }),
    new MiniCssExtractPlugin({
      filename: "[name].[chunkhash].css",
    }),
  ],
  devServer: {
    hot: true,
    static: path.join(__dirname, "./src"),
    devMiddleware: {
      stats: "errors-only",
    },
  },
};
