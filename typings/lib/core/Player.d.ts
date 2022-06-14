export = Player;
/** @namespace */
declare class Player {
    /**
     * Represents the YouTube Web player script.
     *
     * @param {string} id - the id of the player.
     * @param {AxiosInstance} axios
     */
    constructor(id: string, axios: AxiosInstance);
    init(): Promise<Player>;
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
     * N-Token decipher algorithm.
     *
     * @readonly
     * @returns {string}
     */
    readonly get ntoken_decipher(): string;
    /**
     * Signature decipher algorithm.
     *
     * @readonly
     * @returns {string}
     */
    readonly get signature_decipher(): string;
    /**
     * Checks if the player script is cached.
     *
     * @returns {boolean}
     */
    isCached(): boolean;
    #private;
}
