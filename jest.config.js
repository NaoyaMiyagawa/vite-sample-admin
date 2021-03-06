module.exports = {
  // verbose: true,
  preset: 'ts-jest',
  globals: {},
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.vue$': 'vue-jest',
    '^.+\\ts$': 'ts-jest',
  },
  moduleNameMapper: {
    '^@/(.+)$': '<rootDir>/src/$1',
    '^@components/(.+)$': '<rootDir>/src/components/$1',
    '^@views/(.+)$': '<rootDir>/src/views/$1',
  },
  moduleFileExtensions: ['vue', 'js', 'json', 'jsx', 'ts', 'tsx', 'node'],
  testMatch: ['<rootDir>/tests/**/*.ts'],
};
