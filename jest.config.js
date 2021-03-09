const path = require("path")
const { defaults } = require("jest-config")

module.exports = {
  roots: [path.resolve(__dirname, "./src")],
  transform: {
    "^.+\\.(ts|tsx|js|jsx)$": "ts-jest",
  },
  moduleFileExtensions: [...defaults.moduleFileExtensions, "ts", "tsx"],
  collectCoverage: true,
  clearMocks: true,
  coverageDirectory: "coverage",
}
