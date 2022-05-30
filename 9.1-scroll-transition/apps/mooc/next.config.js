const withTM = require("next-transpile-modules")(["@codely/design-system"]);

module.exports = withTM({
  experimental: {
    externalDir: true,
  },
  images: {
    domains: ["codely.tv"],
  },
  i18n: {
    locales: ["es-ES"],
    defaultLocale: "es-ES",
  },
  webpack: (config, { isServer }) => {
    // Fixes npm packages that depend on `fs` module
    if (!isServer) {
      config.resolve.fallback.fs = false;
    }

    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
});
