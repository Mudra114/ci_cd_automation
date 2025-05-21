module.exports = function (config) {
  config.set({
    browsers: ['ChromeHeadless'], // 👈 use headless Chrome
    customLaunchers: {
      ChromeHeadlessCI: {
        base: 'ChromeHeadless',
        flags: ['--no-sandbox', '--disable-gpu']
      }
    },
    // optionally, set this to use in CI
    singleRun: true,
    // other config...
  });
};
