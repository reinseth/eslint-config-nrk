/* global describe, it */

import fs from 'fs';
import path from 'path';
import {assert} from 'chai';

function keysStartWith (keys, str) {
  return keys.filter(key => key.indexOf(str) === 0).length === keys.length;
}

function keysDoNotStartWith (keys, str) {
  return keys.filter(key => key.indexOf(str) === -1).length === keys.length;
}

describe('eslint-config-nrk', () => {
  it('should not combine base rules with react rules', done => {
    const files = fs.readdirSync(path.resolve(__dirname, '../rules'));

    files
      .forEach(file => {
        const config = require(`../rules/${file}`);

        if (file === 'react.js') {
          // Make sure all react rules starts with `react/`
          assert.equal(keysStartWith(Object.keys(config.rules), 'react/'), true);
        } else if (file === 'jsx.js') {
          // Naive test: make sure the config is an object
          assert.equal(typeof config === 'object', true);
        } else {
          // Make sure none of the base rules starts with `react/`
          assert.equal(keysDoNotStartWith(Object.keys(config.rules), 'react/'), true);
        }
      });

    done();
  });
});
