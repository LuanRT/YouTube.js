// React Native Platform Support
import type { ICache } from '../types/Cache.js';
import { Platform } from '../utils/Utils.js';
import sha1Hash from './polyfills/web-crypto.js';
import package_json from '../../package.json' assert { type: 'json' };
import evaluate from './jsruntime/jinter.js';

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

  #getStorage() {
    const storage = new ((globalThis as any).mmkvStorage as any)({ id: 'InnertubeCache' });
    return storage;
  }

  async get(key: string) {
    const storage = this.#getStorage();
    return storage.getBuffer(key)?.buffer;
  }

  async set(key: string, value: ArrayBuffer) {
    const storage = this.#getStorage();
    storage.set(key, new Uint8Array(value));
  }

  async remove(key: string) {
    const storage = this.#getStorage();
    storage.delete(key);
  }
}

Platform.load({
  runtime: 'react-native',
  server: false,
  info: {
    version: package_json.version,
    bugs_url: package_json.bugs.url,
    repo_url: package_json.homepage.split('#')[0]
  },
  Cache: Cache,
  sha1Hash,
  uuidv4() {
    if (globalThis.crypto?.randomUUID()) {
      return globalThis.crypto.randomUUID();
    }

    // See https://stackoverflow.com/a/2117523
    return '10000000-1000-4000-8000-100000000000'.replace(/[018]/g, (cc) => {
      const c = parseInt(cc);
      return (
        c ^
        (window.crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
      ).toString(16);
    });
  },
  eval: evaluate,
  fetch: globalThis.fetch,
  Request: globalThis.Request,
  Response: globalThis.Response,
  Headers: globalThis.Headers,
  FormData: globalThis.FormData,
  File: globalThis.File,
  ReadableStream: globalThis.ReadableStream,
  CustomEvent: globalThis.CustomEvent
});

export * from './lib.js';
import Innertube from './lib.js';
export default Innertube;
