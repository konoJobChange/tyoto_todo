module.exports = {
    preset: "ts-jest",
    testEnvironment: "node",
    moduleFileExtensions: ["ts", "tsx", "js"],
    transform: {
      "^.+\\.(ts|tsx)$": "ts-jest"
    },
    globals: {
      "ts-jest": {
        tsConfig: "tsconfig.json"
      }
    },
    testMatch: ["**/__tests__/**/*.test.ts"],
    moduleNameMapper: {
        '^src/(.*)$': '<rootDir>/src/$1'
      }
  };
  