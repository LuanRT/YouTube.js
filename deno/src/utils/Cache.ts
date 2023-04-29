import type { ICache } from '../types/Cache.ts';
import { Platform } from './Utils.ts';

export default class UniversalCache implements ICache {
  #cache: ICache;
  constructor(persistent: boolean, persistent_directory?: string) {
    this.#cache = new Platform.shim.Cache(persistent, persistent_directory);
  }
  get cache_dir() {
    return this.#cache.cache_dir;
  }
  get(key: string) {
    return this.#cache.get(key);
  }
  set(key: string, value: ArrayBuffer) {
    return this.#cache.set(key, value);
  }
  remove(key: string) {
    return this.#cache.remove(key);
  }
}