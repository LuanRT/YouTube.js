const fs = require('fs')

class NodeCache {
  constructor() {
  }

  /**
   * 
   * @param {string} key 
   * @returns {Promise<ArrayBuffer>}
   */
  async read(key) {
    return (await fs.promises.readFile(key)).buffer;
  }

  /**
   * 
   * @param {string} key 
   * @param {ArrayBuffer} data 
   * @returns {Promise<void>}
   */
  async write(key, data) {
    // make sure the directory exists
    const parts = key.split('/').slice(0, -1);
    let current = '';
    for (let i = 0; i < parts.length; i++) {
      current += parts[i] + '/';
      if (!(await this.exists(current))) {
        await fs.promises.mkdir(current);
      }
    }

    return await fs.promises.writeFile(key, data);
  }

  /**
   * 
   * @param {string} key 
   * @returns {Promise<boolean>}
   */
  async exists(key) {
    return await fs.promises.stat(key).then(() => true).catch(() => false);
  }

  /**
   * 
   * @param {string} key 
   * @returns {Promise<void>}
   */
  async remove(key) {
    return await fs.promises.rm(key);
  }
}

module.exports = new NodeCache();