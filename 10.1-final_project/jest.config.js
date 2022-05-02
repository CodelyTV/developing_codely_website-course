module.exports = {
  testMatch: ["<rootDir>/tests/**/*.spec.ts"],
  setupFiles: ["<rootDir>/tests/setupTests.ts"],
  testPathIgnorePatterns: ["node_modules"],
  transform: {
    "^.+\\.ts$": "ts-jest",
  },
  reporters: [
    "default",
    [
      "jest-junit",
      {
        suiteName: "Contexts tests",
        outputDirectory: "./test-results",
        outputName: "contexts.xml",
      },
    ],
  ],
};
