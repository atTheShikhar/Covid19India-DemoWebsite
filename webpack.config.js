const path = require("path");

module.exports = {
  entry: "./src/script.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.bundle.js",
  },
  // module: {
  //   rules: [
  //     {
  //       test: /\.css$/,
  //       use: [
  //         { loader: "style-loader" },
  //         { loader: "css-loader", options: { modules: true } },
  //       ],
  //     },
  //   ],
  // },
  mode: "development",
};
