global.XMLHttpRequest = class extends require('xhr2') {
  // this is for browser-like environments not nessacarily a browser
  // so disabling this is okay, sort of
  _restrictedHeaders = {}
};