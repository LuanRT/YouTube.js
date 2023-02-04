

export default {
  projects: [
    {
      displayName: 'node',
      roots: [ '<rootDir>/test' ],
      testTimeout: 10000,
      transform: {
        "^.+\\.(ts|tsx)$": "ts-jest",
      },
      moduleFileExtensions: ["ts", "tsx", "js"],
      testMatch: [ '**/*.test.ts' ],
      setupFiles: []
    }
  ]
};