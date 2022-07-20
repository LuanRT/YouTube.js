import { getRuntime } from './src/utils/Utils';

// Polyfill fetch for node
if (getRuntime() === 'node') {
  // eslint-disable-next-line
  const undici = require('undici');
  Reflect.set(globalThis, 'fetch', undici.fetch);
  Reflect.set(globalThis, 'Headers', undici.Headers);
  Reflect.set(globalThis, 'Request', undici.Request);
  Reflect.set(globalThis, 'Response', undici.Response);
  Reflect.set(globalThis, 'FormData', undici.FormData);
  Reflect.set(globalThis, 'File', undici.File);
}

import Innertube from './src/Innertube';
export { default as Innertube } from './src/Innertube.js';
export * from './src/utils';
export default Innertube;
