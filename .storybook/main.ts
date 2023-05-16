import type { StorybookConfig } from "@storybook/vue3-vite";
import { resolve } from 'path';
import { mergeConfig } from 'vite';

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  staticDirs: ['../public'],
  framework: {
    name: "@storybook/vue3-vite",
    options: {}, 
  },
  async viteFinal(config, { configType }) {
    // return the customized config
    return mergeConfig(config, {
        // customize the Vite config here
        resolve: {
            alias: [
                {
                    find: /^@inkline\/inkline\//,
                    replacement: `${resolve(__dirname, '..')}/src/`
                }
            ]
        },
        define: { 'process.env': {} }
    });
},
  docs: {
    autodocs: true,
  },
};
export default config;
