export = Player;
/** @namespace */
declare class Player {
    /**
     * Represents the YouTube Web player script.
     * @param {string} id - the id of the player.
     * @constructor
     */
    constructor(id: string);
    init(): Promise<Player>;
    /**
     * Returns the current player's url.
     * @readonly
     * @returns {string}
     */
    readonly get url(): string;
    /**
     * Returns the signature timestamp.
     * @readonly
     * @returns {string}
     */
    readonly get sts(): string;
    /**
     * Returns the n-token decipher algorithm.
     * @readonly
     * @returns {string}
     */
    readonly get ntoken_decipher(): string;
    /**
     * Returns the signature decipher algorithm.
     * @readonly
     * @returns {string}
     */
    readonly get signature_decipher(): string;
    isCached(): boolean;
    #private;
}
