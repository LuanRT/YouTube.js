export = Player;
/** @namespace */
declare class Player {
    static get LIBRARY_VERSION(): number;
    /**
     * Represents the YouTube Web player script.
     *
     * @param {string} id - the id of the player.
     * @param {import('../utils/Request')} request
     */
    constructor(id: string, request: import('../utils/Request'));
    init(): Promise<Player>;
    decipher(url: any, signature_cipher: any, cipher: any): string;
    /**
     * Js player url.
     * @returns {string}
     */
    get url(): string;
    /**
     * Signature timestamp.
     * @returns {string}
     */
    get sts(): string;
    /**
     * Checks if the player script is cached.
     *
     * @returns {Promise<boolean>}
     */
    isCached(): Promise<boolean>;
    #private;
}
