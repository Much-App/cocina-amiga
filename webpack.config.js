const { watch } = require("fs");
const path = require("path");

module.exports = {
   entry: './src/index.js',
   output: {
      filename: "main.js",
      path: path.resolve(__dirname, 'dist'),
   },
   mode: "development",
   module: {
      rules: [
        {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: [{loader: "file-loader?name=/[name].[ext]"}]
      },
        {
        test: /\.s[ac]ss$/i,
        use: [
          "style-loader",
          "css-loader",
          "sass-loader",
        ],
      },
        {
         test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
         use: [
            {
              loader: 'file-loader',
              options: {
                name: '[name].[ext]',
                outputPath: 'fonts/'
              }
            }
          ]
  
        }
      ],
   },
   watch: true,
}