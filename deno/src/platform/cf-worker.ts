import type { ICache } from '../types/Cache.ts';
import { Platform } from '../utils/Utils.ts';
import evaluate from './jsruntime/default.ts';
import sha1Hash from './polyfills/web-crypto.ts';

class Cache implements ICache {
  #persistent_directory: string;
  #persistent: boolean;

  constructor(persistent = false, persistent_directory?: string) {
    this.#persistent_directory = persistent_directory || '';
    this.#persistent = persistent;
  }

  get cache_dir() {
    return this.#persistent ? this.#persistent_directory : '';
  }

  async get(key: string) {
    const cache = await caches.open('yt-api');

    const response = await cache.match(key);
    if (!response) return undefined;

    return response.arrayBuffer();
  }

  async set(key: string, value: ArrayBuffer) {

    const cache = await caches.open('yt-api');
    cache.put(key, new Response(value));
  }

  async remove(key: string) {
    const cache = await caches.open('yt-api');

    await cache.delete(key);
  }
}

Platform.load({
  runtime: 'cf-worker',
  server: true,
  Cache: Cache,
  sha1Hash,
  uuidv4() {
    return crypto.randomUUID();
  },
  eval: evaluate,
  fetch: fetch.bind(globalThis),
  Request: Request,
  Response: Response,
  Headers: Headers,
  FormData: FormData,
  File: File,
  ReadableStream: ReadableStream,
  CustomEvent: CustomEvent
});

export * from './lib.ts';
import Innertube from './lib.ts';
export default Innertube;
