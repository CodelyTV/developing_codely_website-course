const path = require("path");

module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    {
      name: "@storybook/addon-essentials",
      options: {
        actions: false,
      },
    },
    "@storybook/addon-interactions",
    "@storybook/addon-a11y",
  ],
  framework: "@storybook/react",
  core: {
    builder: "webpack5",
  },
  staticDirs: ["../public"],
  webpackFinal: async (config) => {
    const pathToInlineSvg = path.resolve(__dirname, "../src/icons");
    const fileLoaderRule = config.module.rules.find((rule) => rule.test.test(".svg"));
    fileLoaderRule.exclude = pathToInlineSvg;

    config.module.rules.push({
      test: /\.svg$/i,
      include: pathToInlineSvg,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    });

    config.module.rules.push({
      test: /\.s[ac]ss$/i,
      use: [
        "style-loader",
        {
          loader: "css-loader",
          options: {
            url: false,
          },
        },
        "sass-loader",
      ],
    });

    return config;
  },
};
