// Deno Platform Support
import type { ICache } from '../types/Cache.js';
import { Platform } from '../utils/Utils.js';
import evaluate from './jsruntime/jinter.js';
import sha1Hash from './polyfills/web-crypto.js';
import package_json from '../../package.json' assert { type: 'json' };

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const Deno = globalThis.Deno as any;

class Cache implements ICache {
  #persistent_directory: string;
  #persistent: boolean;

  constructor(persistent = false, persistent_directory?: string) {
    this.#persistent_directory = persistent_directory || Cache.default_persistent_directory;
    this.#persistent = persistent;
  }

  static get temp_directory() {
    return `${Deno.env.get('TMPDIR') || Deno.env.get('TMP') || Deno.env.get('TEMP') || '/tmp'}/youtubei.js`;
  }

  static get default_persistent_directory() {
    return `${Deno.cwd()}/.cache/youtubei.js`;
  }

  get cache_dir() {
    return this.#persistent ? this.#persistent_directory : Cache.temp_directory;
  }

  async #createCache() {
    const dir = this.cache_dir;
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
  }

  async get(key: string) {
    await this.#createCache();
    const file = `${this.cache_dir}/${key}`;
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

  async set(key: string, value: ArrayBuffer) {
    await this.#createCache();
    const file = `${this.cache_dir}/${key}`;
    await Deno.writeFile(file, new Uint8Array(value));
  }

  async remove(key: string) {
    await this.#createCache();
    const file = `${this.cache_dir}/${key}`;
    try {
      await Deno.remove(file);
    } catch (e) {
      if (e instanceof Deno.errors.NotFound) return undefined;
      throw e;
    }
  }
}

Platform.load({
  runtime: 'deno',
  info: {
    version: package_json.version,
    bugs_url: package_json.bugs.url,
    repo_url: package_json.homepage.split('#')[0]
  },
  server: true,
  Cache: Cache,
  sha1Hash,
  uuidv4() {
    return crypto.randomUUID();
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
