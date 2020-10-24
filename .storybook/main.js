const path = require('path');

module.exports = {
  stories: [
    '../stories/**/*.stories.mdx',
    '../stories/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  typescript: {
    check: false,
    checkOptions: {},
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      tsconfigPath: '../tsconfig.json',
    },
  },
  webpackFinal: async (config) => {
    config.resolve.alias = {
      src: path.resolve(__dirname, '../src'),
    };
    return config;
  },
  babel: async (options) => {
    options.plugins.push('react-require');
    return options;
  },
};
