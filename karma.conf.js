
module.exports = function(config) {
  config.set({

    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine', 'chai'],


    // list of files / patterns to load in the browser
    // we need angular and it's mocks for testing/loading modules
    files: [
      './www_dev/bundle.js', // Compliled app source
      './node_modules/angular-mocks/angular-mocks.js',
      './tests/**/*.js'
    ],

    reporters: ['progress'],
    port: 9876,
    colors: true,
    logLevel: 'INFO',
    captureTimeout: 60000,

    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,

    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true
  });
};
