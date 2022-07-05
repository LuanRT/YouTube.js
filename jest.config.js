'use strict';

module.exports = {
  projects: [
    {
      displayName: 'node',
      roots: [ '<rootDir>/test/node' ],
      testMatch: [ '**/*.test.js' ],
      testTimeout: 10000,
      setupFiles: [],
    },
    {
      displayName: 'browser',
      roots: [ '<rootDir>/test/browser' ],
      testMatch: [ '**/*.test.js' ],
      testTimeout: 10000,
      setupFiles: [
        'fake-indexeddb/auto',
        './scripts/globals.js',
        'fake-dom',
      ],
    }
  ]
};