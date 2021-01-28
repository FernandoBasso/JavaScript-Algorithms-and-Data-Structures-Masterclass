module.exports = {
  moduleFileExtensions: ["js", "mjs"],
  testRegex: ".spec.mjs",
  transform: {
    "^.+\\.mjs$": "babel-jest",
  },
  testPathIgnorePatterns: [
    "<rootDir>/node_modules/",
  ],
};
