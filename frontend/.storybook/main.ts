const path = require('path');
const {
  loadConfigFromFile,
  mergeConfig
} = require('vite');
module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials', '@storybook/addon-interactions'],
  framework: {
    name: '@storybook/react-vite',
    options: {}
  },
  features: {
    storyStoreV7: true,
    interactionsDebugger: true
  },
  async viteFinal(config, {
    configType
  }) {
    const {
      config: userConfig
    } = await loadConfigFromFile(path.resolve(__dirname, '../vite.config.ts'));
    return mergeConfig(config, {
      ...userConfig,
      plugins: []
    });
  },
  docs: {
    autodocs: true
  }
};