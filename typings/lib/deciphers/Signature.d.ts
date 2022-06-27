export namespace SignatureOperation {
    const REVERSE: number;
    const SPLICE: number;
    const SWAP: number;
}
export default Signature;
declare class Signature {
    static fromSourceCode(sig_decipher_sc: any): Signature;
    static fromArrayBuffer(buffer: any): Signature;
    /**
     * Extracts the functions used to modify the signature
     * and returns them in the correct order.
     *
     * @param {string} sc
     * @returns {Array.<string>}
     */
    static getFunctions(sc: string): Array<string>;
    static get LIBRARY_VERSION(): number;
    constructor(action_sequence: any);
    action_sequence: any;
    decipher(url: any): string;
    toJSON(): any[];
    toArrayBuffer(): ArrayBuffer;
}
