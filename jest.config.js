/** @type {import('ts-jest').JestConfigWithTsJest} */
export default {
  preset: 'ts-jest',
  testEnvironment: 'node',
  transform: { '^.+\\.(ts|tsx)$': 'ts-jest' },
  testTimeout: 30000,
  moduleFileExtensions: [ 'ts', 'tsx', 'js' ],
  testMatch: [ '**/*.test.ts' ],
  setupFiles: []
};