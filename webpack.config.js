const htmlWebpackPlugin = require('html-webpack-plugin');
const cleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
  mode: 'development',
  entry: './src/index.js',
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  output: {
    path: path.resolve(__dirname, './dist'), // 결과물 경로
    filename: 'bundle.js', // 결과물 파일명
  },
  rules: [
    {
      test: /\.(js|jsx)$/,
      exclude: '/node_modules/',
      loader: 'babel-loader',
    },
    {
      test: /\.css$/,
      // use: ['style-loader', 'css-loader'],
      use: [MiniCssExtractPlugin.loader, 'css-loader'],
    },
    {
      test: /\.(jpeg|jpg)$/,
      loader: 'file-loader',
      options: {
        name: '[name].[ext]',
      },
    },
  ],
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
    new MiniCssExtractPlugin({filename: 'app.css'}),
  ],
  devtool: 'eval-cheap-source-map',
  devServer: {
    port: 5500,
    overlay: true,
    hot: true,
    writeToDisk: true,
  },
};
