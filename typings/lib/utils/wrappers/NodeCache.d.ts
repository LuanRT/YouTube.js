declare const _exports: NodeCache;
export = _exports;
declare class NodeCache {
    /**
     * @param {string} key
     * @returns {Promise<ArrayBuffer>}
     */
    read(key: string): Promise<ArrayBuffer>;
    /**
     * @param {string} key
     * @param {ArrayBuffer} data
     * @returns {Promise<void>}
     */
    write(key: string, data: ArrayBuffer): Promise<void>;
    /**
     * @param {string} key
     * @returns {Promise<boolean>}
     */
    exists(key: string): Promise<boolean>;
    /**
     * @param {string} key
     * @returns {Promise<void>}
     */
    remove(key: string): Promise<void>;
}
