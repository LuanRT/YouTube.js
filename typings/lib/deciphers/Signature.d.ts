export = Signature;
declare class Signature {
    constructor(url: any, sig_decipher_sc: any);
    url: any;
    sig_decipher_sc: any;
    decipherBeta(): any;
    /**
     * Deciphers signature.
     *
     * @returns {string}
     */
    decipher(): string;
    #private;
}
