import path from "path";
import { fileURLToPath } from 'url';
import baseConfig from './webpack.config.js'

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


export default {
  ...baseConfig,
  mode: 'production',
  entry: "./lesson-15.js",
  output: {
    filename: './bundle[contenthash].js',
    path: path.resolve(__dirname, 'dist')
  }
}