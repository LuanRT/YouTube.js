import type { ICache } from '../types/Cache.js';
import { Platform } from '../utils/Utils.js';
import evaluate from './jsruntime/jinter.js';
import { $INLINE_JSON } from 'ts-transformer-inline-file';
import sha1Hash from './polyfills/web-crypto.js';

const { homepage, version, bugs } = $INLINE_JSON('../../package.json');
const repo_url = homepage?.split('#')[0];

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
  info: {
    version: version,
    bugs_url: bugs?.url || `${repo_url}/issues`,
    repo_url
  },
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

export * from './lib.js';
import Innertube from './lib.js';
export default Innertube;
