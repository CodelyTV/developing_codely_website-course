module.exports = {
  testEnvironment: "jsdom",
  preset: "ts-jest",
  setupFilesAfterEnv: ["<rootDir>/setupTests.ts"],
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "ts-jest",
  },
  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/tests/media.mock.js",
    "\\.(svg)$": "<rootDir>/tests/svg.mock.js",
  },
  globals: {
    "ts-jest": {
      babelConfig: true,
      tsconfig: {
        jsx: "react-jsx",
      },
    },
  },
  reporters: [
    "default",
    [
      "jest-junit",
      {
        suiteName: "Design system tests",
        outputDirectory: "./test-results",
        outputName: "design-system.xml",
      },
    ],
  ],
};
