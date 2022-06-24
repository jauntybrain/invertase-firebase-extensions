const packageJson = require('./package.json');

module.exports = {
  name: packageJson.name,
  displayName: packageJson.name,
  rootDir: './',
  preset: 'ts-jest',
  testMatch: ['**/__tests__/*.test.ts'],
  testEnvironment: 'node',
  testTimeout: 15000,
};
