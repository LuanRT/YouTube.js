export { default as Innertube } from './lib/Innertube.js';

import { getRuntime } from './lib/utils/Utils';

// Polyfill fetch for node
if (getRuntime() === 'node') {
  const undici = require('undici');
  Reflect.set(globalThis, 'fetch', undici.fetch);
  Reflect.set(globalThis, 'Headers', undici.Headers);
  Reflect.set(globalThis, 'Request', undici.Request);
  Reflect.set(globalThis, 'Response', undici.Response);
  Reflect.set(globalThis, 'FormData', undici.FormData);
  Reflect.set(globalThis, 'File', undici.File);
}
