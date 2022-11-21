// .storybook/main.ts

import type { StorybookViteConfig } from '@storybook/builder-vite';

const config: StorybookViteConfig = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions'
  ],
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-vite'
  },
  features: {
    storyStoreV7: true
  },
  refs: {
    '@chakra-ui/react': { disable: true }
  },
  async viteFinal(config, options) {
    return config;
  }
};

export default config;
