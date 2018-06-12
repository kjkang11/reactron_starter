const path = require('path');
const SRC_DIR = path.join(__dirname, '/client');
const DIST_DIR = path.join(__dirname, '/dist');

module.exports = {
    entry: path.resolve(SRC_DIR, 'index.js'),
    output: {
        path: DIST_DIR,
        filename: 'app.min.js',
    },
    module: {
        rules: [
          {
            test: /\.jsx?/,
            include: SRC_DIR,
            loader: 'babel-loader',
            query: {
              presets: ['react', 'es2015']
            }
          }
        ]
      }
};