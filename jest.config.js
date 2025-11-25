/** @type {import('jest').Config} */
module.exports = {
  testEnvironment: "jest-environment-jsdom", // important!
  testMatch: ["**/__tests__/**/*.[jt]s?(x)", "**/?(*.)+(spec|test).[jt]s?(x)"],
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
};
