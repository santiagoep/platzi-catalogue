process.env.TZ = 'GMT-5';

module.exports = {
  testRegex: '((\\.|/*.)(test))\\.js?$',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/src/__mocks__/fileMock.js',
    '^@assets/(.*)$': '<rootDir>/src/assets/$1',
    '^@utils/(.*)$': '<rootDir>/src/utils/$1',
    '^@store/(.*)$': '<rootDir>/src/store/$1',
    '^@components/(.*)$': '<rootDir>/src/components/$1',
    '^@pages/(.*)$': '<rootDir>/src/pages/$1',
    '^@constants/(.*)$': '<rootDir>/src/constants/$1',
    '^@hooks/(.*)$': '<rootDir>/src/hooks/$1',
    '^@__mocks__/(.*)$': '<rootDir>/src/__mocks__/$1',
    '^@config/(.*)$': '<rootDir>/src/config/$1',
    '^@cms/(.*)$': '<rootDir>/src/cms/$1',
    '^@mixins/(.*)$': '<rootDir>/src/mixins/$1',
    '^@strategies/(.*)$': '<rootDir>/src/strategies/$1'
  },
  snapshotSerializers: ['enzyme-to-json/serializer'],
  transform: {
    '^.+\\.js$': 'babel-jest'
  }
};
