import { getRuntime } from './Utils';

// Browser Cache is based off:
// https://github.com/elias551/simple-kvs/blob/master/src/index.ts

export default class UniversalCache {
  #persistent_directory: string;
  #persistent: boolean;
  constructor(persistent = false, persistent_directory?: string) {
    this.#persistent_directory = persistent_directory || UniversalCache.default_persistent_directory;
    this.#persistent = persistent;
  }

  static get temp_directory() {
    switch (getRuntime()) {
      case 'deno':
        const Deno: any = Reflect.get(globalThis, 'Deno');
        return `${Deno.env.get('TMPDIR') || Deno.env.get('TMP') || Deno.env.get('TEMP') || '/tmp'}/youtubei.js`;

      case 'node':
        return `${Reflect.get(module, 'require')('os').tmpdir()}/youtubei.js`;

      default:
        return '';
    }
  }

  static get default_persistent_directory() {
    switch (getRuntime()) {
      case 'deno':
        const Deno: any = Reflect.get(globalThis, 'Deno');
        return `${Deno.cwd()}/.cache/youtubei.js`;

      case 'node':
        return Reflect.get(module, 'require')('path').resolve(__dirname, '..', '..', '.cache', 'youtubei.js');

      default:
        return '';
    }
  }

  get cache_dir() {
    return this.#persistent ? this.#persistent_directory : UniversalCache.temp_directory;
  }

  async #createCache() {
    const dir = this.cache_dir;
    switch (getRuntime()) {
      case 'deno':
        const Deno: any = Reflect.get(globalThis, 'Deno');
        try {
          const cwd = await Deno.stat(dir);
          if (!cwd.isDirectory)
            throw new Error('An unexpected file was found in place of the cache directory');
        } catch (e) {
          if (e instanceof Deno.errors.NotFound)
            await Deno.mkdir(dir, { recursive: true });
          else
            throw e;
        }
        break;

      case 'node':
        const fs = Reflect.get(module, 'require')('fs/promises');
        try {
          const cwd = await fs.stat(dir);
          if (!cwd.isDirectory())
            throw new Error('An unexpected file was found in place of the cache directory');
        } catch (e: any) {
          if (e?.code === 'ENOENT')
            await fs.mkdir(dir, { recursive: true });
          else
            throw e;
        }
        break;
    }
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
    await this.#createCache();
    switch (getRuntime()) {
      case 'deno':
      {
        const file = `${this.cache_dir}/${key}`;
        const Deno: any = Reflect.get(globalThis, 'Deno');
        try {
          const stat = await Deno.stat(file);
          if (stat.isFile) {
            const data: Uint8Array = await Deno.readFile(file);
            return data.buffer;
          }
          throw new Error('An unexpected file was found in place of the cache key');

        } catch (e) {
          if (e instanceof Deno.errors.NotFound)
            return undefined;
          throw e;
        }
      }

      case 'node':
      {
        const fs = Reflect.get(module, 'require')('fs/promises');
        const file = Reflect.get(module, 'require')('path').resolve(this.cache_dir, key);
        try {
          const stat = await fs.stat(file);
          if (stat.isFile()) {
            const data: Buffer = await fs.readFile(file);
            return data.buffer;
          }
          throw new Error('An unexpected file was found in place of the cache key');

        } catch (e: any) {
          if (e?.code === 'ENOENT')
            return undefined;
          throw e;
        }
      }

      case 'browser':
      {
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
    }
  }

  async set(key: string, value: ArrayBuffer) {
    await this.#createCache();
    switch (getRuntime()) {
      case 'deno':
        {
          const Deno: any = Reflect.get(globalThis, 'Deno');
          const file = `${this.cache_dir}/${key}`;
          await Deno.writeFile(file, new Uint8Array(value));
        }
        break;

      case 'node':
        {
          const fs = Reflect.get(module, 'require')('fs/promises');
          const file = Reflect.get(module, 'require')('path').resolve(this.cache_dir, key);
          await fs.writeFile(file, new Uint8Array(value));
        }
        break;

      case 'browser':
        {
          const db = await this.#getBrowserDB();
          if (!db) return;

          return new Promise<void>((resolve, reject) => {
            const request = db.transaction('kv-store', 'readwrite').objectStore('kv-store').put({ k: key, v: value });
            request.onerror = reject;
            request.onsuccess = () => resolve();
          });
        }
        break;
    }
  }

  async remove(key: string) {
    await this.#createCache();
    switch (getRuntime()) {
      case 'deno':
        {
          const file = `${this.cache_dir}/${key}`;
          const Deno: any = Reflect.get(globalThis, 'Deno');
          try {
            await Deno.remove(file);
          } catch (e) {
            if (e instanceof Deno.errors.NotFound) return undefined;
            throw e;
          }
        }
        break;

      case 'node':
        {
          const fs = Reflect.get(module, 'require')('fs/promises');
          const file = Reflect.get(module, 'require')('path').resolve(this.cache_dir, key);
          try {
            await fs.unlink(file);
          } catch (e: any) {
            if (e?.code === 'ENOENT') return;
            throw e;
          }
        }
        break;

      case 'browser':
      {
        const db = await this.#getBrowserDB();
        if (!db) return;

        return new Promise<void>((resolve, reject) => {
          const request = db.transaction('kv-store', 'readwrite').objectStore('kv-store').delete(key);
          request.onerror = reject;
          request.onsuccess = () => resolve();
        });
      }
    }
  }
}