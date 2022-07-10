'use strict';

import openDB from 'idb';

class BrowserCache {
  constructor() {
    this._db = openDB('yt-cache', 1, {
      upgrade(db) {
        db.createObjectStore('cache');
      }
    });
  }

  /**
   * @param {string} key
   * @returns {Promise<ArrayBuffer>}
   */
  async read(key) {
    const data = await (await this._db).get('cache', key);
    return data;
  }

  /**
   * @param {string} key
   * @param {ArrayBuffer} data
   * @returns {Promise<void>}
   */
  async write(key, data) {
    await (await this._db).put('cache', data, key);
  }

  /**
   * @param {string} key
   * @returns {Promise<boolean>}
   */
  async exists(key) {
    const data = await (await this._db).get('cache', key);
    return data !== undefined;
  }

  /**
   * @param {string} key
   * @returns {Promise<void>}
   */
  async remove(key) {
    await (await this._db).delete('cache', key);
  }
}

export default new BrowserCache();