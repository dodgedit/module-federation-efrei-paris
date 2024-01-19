const ModuleFederationPlugin = require('webpack').container.ModuleFederationPlugin;
const { dependencies } = require('./package.json');

module.exports = {
  // Module Federation plugin configuration
  plugins: [
    new ModuleFederationPlugin({
      name: 'remote',
      exposes: {
        './Button': './src/Button',
      },
      filename: 'remoteEntry.js',
      shared: {
        ...dependencies,
        react: {
          singleton: true,
          requiredVersion: dependencies['react'],
        },
        'react-dom': {
          singleton: true,
          requiredVersion: dependencies['react-dom'],
        },
      },
    }),
  ],

  // TypeScript configuration
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
};