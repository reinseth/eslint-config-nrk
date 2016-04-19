module.exports = {
  env: {
    es6: true,
    browser: true,
    node: true
  },
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 6,
    ecmaFeatures: {
      experimentalObjectRestSpread: true // enable support for the experimental object rest/spread properties
    }
  },
  extends: [
    './rules/core.js',
    './rules/es6.js',
  ]
};
