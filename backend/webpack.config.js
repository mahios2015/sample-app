const path = require("path");
const nodeExternals = require("webpack-node-externals");

module.exports = {
  entry: "./server.ts", // Entry point for Webpack
  target: "node", // Target environment (Node.js)
  mode: "production", // Use "development" for debugging
  externals: [nodeExternals()], // Exclude node_modules from bundle
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "server.js"
  },
  resolve: {
    extensions: [".ts", ".js"] // Resolve .ts and .js files
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
        exclude: /node_modules/
      }
    ]
  }
};
