module.exports = {
  testEnvironment: "jsdom",
  testRegex: "(/tests/.|.(test|spec)).(ts|tsx)$",
  watchPathIgnorePatterns: ["node_modules"],
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  transform: {
    "^.+.(t|j)sx?$": "@swc/jest",
  },
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  collectCoverageFrom: ["src/components/", "src/utils/"],
  collectCoverage: true,
  coveragePathIgnorePatterns: [
    "node_modules",
    ".mock.(ts|tsx)",
    ".translations.ts",
  ],
  moduleNameMapper: {
    ".(css|scss)$": "identity-obj-proxy",
    ".(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav)$":
      "<rootDir>/fileMock.js",
    "^@/(.*)$": "<rootDir>/src/$1",
  },
  verbose: true,
  testTimeout: 10000,
};
