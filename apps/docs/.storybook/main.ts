import type { StorybookConfig } from "@kachurun/storybook-solid-vite";

const config: StorybookConfig = {
  framework: "@kachurun/storybook-solid-vite",
  addons: [
    "@storybook/addon-onboarding",
    "@storybook/addon-docs",
    "@storybook/addon-a11y",
    "@storybook/addon-links",
    {
      name: "@storybook/addon-vitest",
      options: {
        cli: false,
      },
    },
  ],
  stories: ["../stories/**/*.mdx", "../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  viteFinal: async (config) => {
    const { mergeConfig } = await import("vite");

    return mergeConfig(config, {
      define: {
        "process.env": {},
      },
    });
  },
};

export default config;
