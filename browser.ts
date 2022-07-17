// Deno and browser runtimes

// Polyfill buffer
import { Buffer } from 'buffer';
if (!Reflect.has(globalThis, 'Buffer')) {
  Reflect.set(globalThis, 'Buffer', Buffer);
}

export { default as Innertube } from './lib/Innertube.js';
export { default as UniversalCache } from './lib/utils/Cache';
export * as Utils from './lib/utils/Utils';
