module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        useBuiltIns: "usage",
        corejs: "3.9.1",
      },
    ],
    "@babel/preset-typescript",
    "@babel/preset-react",
  ],
};
