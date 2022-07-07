'use strict';

const glob = require('glob');
const fs = require('fs');

const json = [ '{' ];

glob.sync('../lib/parser/contents/classes/**/*.js', { cwd: __dirname })
  .forEach((file) => {
    // Trim path
    file = file.replace('../lib/parser/contents/classes/', '').replace('.js', '');
    json.push(`'${file}': () => require('./classes/${file}'),`);
  });

json.push('}');

fs.writeFileSync(
  './lib/parser/contents/map.js',
  `// This file was auto generated, do not edit.
// See ./scripts/build-parser-json.js

/* eslint-disable */

const map = ${json.join('')};

module.exports = function req(name) {
  const func = map[name];
 
  if (!func) {
    const error = new Error('Module not found: ' + name);
    error.code = 'MODULE_NOT_FOUND';
    throw error;
  }
  
  return func();
}`
);
