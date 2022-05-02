module.exports = {
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/setupTests.ts"],
  testPathIgnorePatterns: ["node_modules", "<rootDir>/.next/"],
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "ts-jest",
  },
  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "jest-transform-stub",
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
        suiteName: "Mooc app tests",
        outputDirectory: "./test-results",
        outputName: "mooc.xml",
      },
    ],
  ],
};
