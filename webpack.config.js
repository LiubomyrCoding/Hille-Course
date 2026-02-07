import path from "path";
import { fileURLToPath } from 'url';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
  mode: 'development',
  entry: "./lesson-15.js",
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ],
      },
      {
        test:/\.(?:js|mjs|cjs)$/,
        exclude: /node_modules/,
        use: {
        loader: 'babel-loader',
        options: {
        targets: "defaults",
        presets: [
          ['@babel/preset-env']
           ]
          }
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({ template: 'index.html' }),
  ],
}