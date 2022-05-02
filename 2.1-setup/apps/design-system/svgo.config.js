module.exports = {
  plugins: [
    {
      name: "preset-default",
      params: {
        overrides: {
          removeViewbox: false,
        },
      },
    },
    "removeDimensions",
  ],
};
