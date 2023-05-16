// jest.config.js
module.exports = {
  testEnvironment: 'jsdom',
  testEnvironmentOptions: {
    customExportConditions: [
      'node',
      'node-addons'
    ]
  },
  transform: {
    '^.+\\.js$': 'babel-jest',
		'^.+\\.vue$': '@vue/vue3-jest',
  }
}
