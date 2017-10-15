module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              modules: true,
            },
          },
        ],
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: "babel-loader"
          },
          {
            loader: "react-svg-loader",
            options: {
              jsx: true
            }
          },
        ],
      },
      {
        test: /\.json$/,
        use: [
          {
            loader: "json-loader"
          },
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|jpg|png)$/,
        use: [
          {
            loader: "file-loader"
          },
        ],
      },
    ],
  },
}
