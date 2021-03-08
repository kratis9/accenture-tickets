const path = require("path")
const { defaults } = require("jest-config")

module.exports = {
  roots: [path.resolve(__dirname, "./src")],
  displayName: "local",
  moduleFileExtensions: [...defaults.moduleFileExtensions, "ts", "tsx"],
  testURL: "http://localhost",
}
