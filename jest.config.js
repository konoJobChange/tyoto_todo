module.exports = {
  displayName: {
    name: 'CLIENT',
    color: '#acc',
  },
  verbose: true,
  preset: 'jest-puppeteer',
  // typescript
  roots: ['<rootDir>/src'],
  testMatch: [
    '**/__tests__/**/*.+(ts|tsx|js|jsx)',
    '**/?(*.)+(spec|test).+(ts|tsx|js|jsx)',
  ],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
    '^.+\\.(js|jsx)$': 'babel-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js'],
  moduleNameMapper: {
    '^src/(.*)$': '<rootDir>/src/$1',
  },
  // Setup Enzyme
  snapshotSerializers: ['enzyme-to-json/serializer'],
  setupFilesAfterEnv: ['<rootDir>/setupEnzyme.js'],
  globals: {
    'ts-jest': {
      babelConfig: true,
    },
  },
};
