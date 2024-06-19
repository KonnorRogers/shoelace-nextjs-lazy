export default {
  preset: "ts-jest",
  collectCoverage: true,
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  coverageDirectory: "./coverage",
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": ["babel-jest", { presets: ["next/babel"] }],
  },
  transformIgnorePatterns: [
    "/node_modules/(?!(@lit|lit|@shoelace-style))", // Ensure lit modules are transformed
    // Add other patterns as needed
  ],

  testEnvironment: "jest-environment-jsdom", // Use Node.js environment for testing
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  collectCoverageFrom: [
    "**/*.{tsx,js,jsx}",
    "!**/coverage/**",
    "!**/public/**",
    "!**/.next/**",
    "!**/node_modules/**",
    "!**/next.config.mjs",
    "!**/jest.config.mjs",
    "!**/jest.setup.js",
    "!**/next-env.d.ts",
  ],
  globals: { "ts-jest": { diagnostics: false } },
};
