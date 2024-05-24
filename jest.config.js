module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    roots: ['<rootDir>/src'],
    moduleFileExtensions: ['js', 'json', 'ts'],
    testRegex: '.*\\.spec\\.ts$',
    transform: {
      '^.+\\.(t|j)s$': 'ts-jest',
    },
    collectCoverageFrom: [
      'src/**/*.{js,ts}',
    ],
    coverageDirectory: './coverage',
    testPathIgnorePatterns: [
      '/node_modules/',
      '/dist/',
    ],
  };
  