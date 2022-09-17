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
  try {
    // eslint-disable-next-line
    const { ReadableStream } = require('node:stream/web');
    Reflect.set(globalThis, 'ReadableStream', ReadableStream);
  } catch { /* do nothing */ }
}

import Innertube from './src/Innertube';

export * from './src/utils';
export { YTNodes } from './src/parser/map';
export { default as Parser } from './src/parser';
export { default as Innertube } from './src/Innertube';
export default Innertube;