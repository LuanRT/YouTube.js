// Deno Platform Support
import { ICache } from '../types/Cache.ts';
import { Platform } from '../utils/Utils.ts';
import sha1Hash from './polyfills/web-crypto.ts';
import package_json from '../../package.json' assert { type: 'json' };
import evaluate from './jsruntime/jinter.ts';

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

  #getBrowserDB() {
    const indexedDB: IDBFactory = Reflect.get(globalThis, 'indexedDB') || Reflect.get(globalThis, 'webkitIndexedDB') || Reflect.get(globalThis, 'mozIndexedDB') || Reflect.get(globalThis, 'msIndexedDB');

    if (!indexedDB) return console.log('IndexedDB is not supported. No cache will be used.');

    return new Promise<IDBDatabase>((resolve, reject) => {
      const request = indexedDB.open('youtubei.js', 1);
      request.onsuccess = function () {
        resolve(this.result);
      };

      request.onerror = function (event) {
        reject('indexedDB request error');
        console.error(event);
      };

      request.onupgradeneeded = function () {
        const store = this.result.createObjectStore('kv-store', {
          keyPath: 'k'
        });

        store.transaction.oncomplete = function () {
          resolve(this.db);
        };
      };
    });
  }

  async get(key: string) {
    const db = await this.#getBrowserDB();
    if (!db) return;

    return new Promise<ArrayBuffer | undefined>((resolve, reject) => {
      const request = db.transaction('kv-store', 'readonly').objectStore('kv-store').get(key);
      request.onerror = reject;
      request.onsuccess = function () {
        const result: Uint8Array | undefined = this.result?.v;
        resolve(result ? result.buffer : undefined);
      };
    });
  }

  async set(key: string, value: ArrayBuffer) {
    const db = await this.#getBrowserDB();
    if (!db) return;

    return new Promise<void>((resolve, reject) => {
      const request = db.transaction('kv-store', 'readwrite').objectStore('kv-store').put({ k: key, v: value });
      request.onerror = reject;
      request.onsuccess = () => resolve();
    });
  }

  async remove(key: string) {
    const db = await this.#getBrowserDB();
    if (!db) return;

    return new Promise<void>((resolve, reject) => {
      const request = db.transaction('kv-store', 'readwrite').objectStore('kv-store').delete(key);
      request.onerror = reject;
      request.onsuccess = () => resolve();
    });
  }
}

Platform.load({
  runtime: 'browser',
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
      return (c ^ window.crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16);
    });
  },
  eval: evaluate,
  DOMParser: globalThis.DOMParser,
  serializeDOM(document) {
    return new XMLSerializer().serializeToString(document);
  },
  fetch: globalThis.fetch,
  Request: globalThis.Request,
  Response: globalThis.Response,
  Headers: globalThis.Headers,
  FormData: globalThis.FormData,
  File: globalThis.File,
  ReadableStream: globalThis.ReadableStream
});

export * from './lib.ts';
import Innertube from './lib.ts';
export default Innertube;