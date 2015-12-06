var pkg = require('../package.json');
var webpack = require('webpack');
var path = require('path');
var autoprefixer = require('autoprefixer');

var publicPath = '/' + (process.env.NODE_ENV === 'production' ? pkg.name + '/' : '');

var scssIncludePaths = [
  path.join(__dirname, 'app/assets/bower_components'),
  path.join(__dirname, 'node_modules')
];

var autoprefixerOptions = {
  browsers: [
    'ie >= 10',
    'ie_mob >= 10',
    'ff >= 30',
    'chrome >= 34',
    'safari >= 7',
    'opera >= 23',
    'ios >= 7',
    'android >= 4.4',
    'bb >= 10'
  ]
};

var alias = {
  actions: path.join(__dirname, 'app/actions'),
  assets: path.join(__dirname, 'app/assets'),
  components: path.join(__dirname, 'app/components'),
  constants: path.join(__dirname, 'app/constants'),
  services: path.join(__dirname, 'app/services'),
  stores: path.join(__dirname, 'app/stores'),
  utils: path.join(__dirname, 'app/utils')
};
alias[pkg.name + '$'] = path.join(__dirname, '../src/index.js');
alias[pkg.name + '/src'] = path.join(__dirname, '../src');

module.exports = {
  entry: {
    app: ['webpack-hot-middleware/client', path.join(__dirname, 'app/app.js')]
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
    chunkFilename: '[name].chunk.js',
    publicPath: publicPath
  },
  resolve: {
    root: path.join(__dirname, 'app'),
    extensions: ['', '.jsx', '.js'],
    alias: alias
  },
  module: {
    preLoaders: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'eslint-loader'
      }
    ],
    loaders: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader'
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      },
      {
        test: /\.scss$/,
        loader: 'style-loader!css-loader!postcss-loader!sass-loader?outputStyle=expanded&' + scssIncludePaths.join('&includePaths[]=')
      },
      {
        test: /\.sass$/,
        loader: 'style-loader!css-loader!postcss-loader!sass-loader?indentedSyntax=sass'
      },
      {
        test: /\.less$/,
        loader: 'style-loader!css-loader!postcss-loader!less-loader'
      },
      {
        test: /\.(png|jpg|gif)$/,
        loader: 'file-loader?name=[name].[ext]'
      },
      {
        test: /\.(ttf|eot|svg|woff(2)?)(\S+)?$/,
        loader: 'file-loader?name=[name].[ext]'
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        BROWSER: JSON.stringify(true),
        NODE_ENV: JSON.stringify(process.env.NODE_ENV)
      }
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  eslint: {
    configFile: path.join(__dirname, '../.eslintrc'),
    failOnError: false,
    emitError: false
  },
  postcss: function () {
    return [autoprefixer(autoprefixerOptions)];
  },
  node: {
    net: 'mock',
    dns: 'mock'
  },
  debug: true,
  devtool: 'eval'
};
