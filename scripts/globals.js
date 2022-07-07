'use strict';

global.XMLHttpRequest = class extends require('xhr2') {
  // This is for browser-like environments not necessarily a browser.
  // So disabling this is okay, sort of.
  _restrictedHeaders = {};
};