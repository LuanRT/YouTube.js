// Node.js Platform Support
import { ReadableStream } from 'stream/web';
import type { ICache } from '../types/Cache.ts';
import { Platform } from '../utils/Utils.ts';
import crypto from 'crypto';
import path from 'path';
import os from 'os';
import fs from 'fs/promises';
import CustomEvent from './polyfills/node-custom-event.ts';
import { fileURLToPath } from 'url';
import evaluate from './jsruntime/default.ts';

const meta_url = import.meta.url;
const is_cjs = !meta_url;
const __dirname__ = is_cjs ? __dirname : path.dirname(fileURLToPath(meta_url));

class Cache implements ICache {
  #persistent_directory: string;
  #persistent: boolean;

  constructor(persistent = false, persistent_directory?: string) {
    this.#persistent_directory = persistent_directory || Cache.default_persistent_directory;
    this.#persistent = persistent;
  }

  static get temp_directory() {
    return `${os.tmpdir()}/youtubei.js`;
  }

  static get default_persistent_directory() {
    return path.resolve(__dirname__, '..', '..', '.cache', 'youtubei.js');
  }

  get cache_dir() {
    return this.#persistent ? this.#persistent_directory : Cache.temp_directory;
  }

  async #createCache() {
    const dir = this.cache_dir;
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
  }

  async get(key: string) {
    await this.#createCache();
    const file = path.resolve(this.cache_dir, key);
    try {
      const stat = await fs.stat(file);
      if (stat.isFile()) {
        const data: Buffer = await fs.readFile(file);
        return data.buffer as ArrayBuffer;
      }
      throw new Error('An unexpected file was found in place of the cache key');

    } catch (e: any) {
      if (e?.code === 'ENOENT')
        return undefined;
      throw e;
    }
  }

  async set(key: string, value: ArrayBuffer) {
    await this.#createCache();
    const file = path.resolve(this.cache_dir, key);
    await fs.writeFile(file, new Uint8Array(value));
  }

  async remove(key: string) {
    await this.#createCache();
    const file = path.resolve(this.cache_dir, key);
    try {
      await fs.unlink(file);
    } catch (e: any) {
      if (e?.code === 'ENOENT') return;
      throw e;
    }
  }
}

Platform.load({
  runtime: 'node',
  server: true,
  Cache: Cache,
  sha1Hash: async (data: string) => {
    return crypto.createHash('sha1').update(data).digest('hex');
  },
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
  ReadableStream: ReadableStream as unknown as typeof globalThis.ReadableStream,
  CustomEvent: CustomEvent as unknown as typeof globalThis.CustomEvent
});

export * from './lib.ts';
import Innertube from './lib.ts';
export default Innertube;
