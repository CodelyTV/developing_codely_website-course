const path = require("path");

module.exports = {
  extends: ["plugin:@next/next/recommended"],
  rules: {
    "@next/next/no-html-link-for-pages": [2, path.join(__dirname, "src/pages")],
  },
};
