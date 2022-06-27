export = Player;
/** @namespace */
declare class Player {
    static get LIBRARY_VERSION(): number;
    /**
     * Represents the YouTube Web player script.
     *
     * @param {string} id - the id of the player.
     * @param {AxiosInstance} axios
     */
    constructor(id: string, axios: AxiosInstance);
    init(): Promise<Player>;
    decipher(url: any, signature_cipher: any, cipher: any): string;
    /**
     * Js player url.
     *
     * @readonly
     * @returns {string}
     */
    readonly get url(): string;
    /**
     * Signature timestamp.
     *
     * @readonly
     * @returns {string}
     */
    readonly get sts(): string;
    /**
     * Checks if the player script is cached.
     *
     * @returns {boolean}
     */
    isCached(): boolean;
    #private;
}
