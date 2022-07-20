// Deno and browser runtimes

// Polyfill buffer
import { Buffer } from 'buffer';
if (!Reflect.has(globalThis, 'Buffer')) {
  Reflect.set(globalThis, 'Buffer', Buffer);
}

import Innertube from './src/Innertube';
export { default as Innertube } from './src/Innertube.js';
export * from './src/utils';
export default Innertube;
