// Deno and browser runtimes

// Polyfill buffer
import { Buffer } from 'buffer';
if (!Reflect.has(globalThis, 'Buffer')) {
  Reflect.set(globalThis, 'Buffer', Buffer);
}

import Innertube from './lib/Innertube';
export { default as Innertube } from './lib/Innertube.js';
export * from './lib/utils';
export default Innertube;
