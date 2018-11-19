module.exports = {
  verbose: true,
  setupTestFrameworkScriptFile: "./test/jest-setup.js",
  moduleFileExtensions: ["js"],
  testEnvironment: "node",
  coverageReporters: ["text", "text-summary"],
  testRegex: ".*\\.test\\.js$",
  collectCoverageFrom: ["src/**/*.js"]
};
