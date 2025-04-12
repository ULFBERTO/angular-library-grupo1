import type { StorybookConfig } from '@storybook/angular';

const config: StorybookConfig = {
  "stories": [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@storybook/addon-interactions"
  ],
  "framework": {
    "name": "@storybook/angular",
    "options": {
      enableNgcc: true,
      builder: {
        useSWC: true
      }
    }
  },
  docs: {
    autodocs: true
  },
  core: {
    builder: '@storybook/builder-webpack5'
  }
};
export default config;
