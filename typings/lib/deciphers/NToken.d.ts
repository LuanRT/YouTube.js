export namespace NTokenTransformOperation {
    const NO_OP: number;
    const PUSH: number;
    const REVERSE_1: number;
    const REVERSE_2: number;
    const SPLICE: number;
    const SWAP0_1: number;
    const SWAP0_2: number;
    const ROTATE_1: number;
    const ROTATE_2: number;
    const BASE64_DIA: number;
    const TRANSLATE_1: number;
    const TRANSLATE_2: number;
}
export namespace NTokenTransformOpType {
    const FUNC: number;
    const N_ARR: number;
    const LITERAL: number;
    const REF: number;
}
export default NToken;
export class NTokenTransforms {
    /**
     * Gets a base64 alphabet and uses it as a lookup table to modify n.
     *
     * @param {any[]} arr
     * @param {string} token
     * @param {boolean} is_reverse_base64
     * @returns {void}
     */
    static translate1(arr: any[], token: string, is_reverse_base64: boolean): void;
    static translate2(arr: any, token: any, characters: any): void;
    /**
     * Returns the requested base64 dialect, currently this is only used by 'translate2'.
     *
     * @param {boolean} is_reverse_base64
     * @returns {string[]}
     */
    static getBase64Dia(is_reverse_base64: boolean): string[];
    /**
     * Swaps the first element with the one at the given index.
     *
     * @param {any[]} arr
     * @param {number} index
     * @returns {void}
     */
    static swap0(arr: any[], index: number): void;
    /**
     * Rotates elements of the array.
     *
     * @param {any[]} arr
     * @param {number} index
     * @returns {void}
     */
    static rotate(arr: any[], index: number): void;
    /**
     * Deletes one element at the given index.
     *
     * @param {any[]} arr
     * @param {number} index
     * @returns {void}
     */
    static splice(arr: any[], index: number): void;
    static reverse(arr: any): void;
    static push(arr: any, item: any): void;
}
declare class NToken {
    static fromSourceCode(raw: any): NToken;
    static fromArrayBuffer(buffer: any): NToken;
    static get LIBRARY_VERSION(): number;
    static getFunc(el: any): any;
    static getTransformationData(raw: any): any;
    static refineNTokenData(data: any): any;
    constructor(transformer: any);
    transformer: any;
    evaluate(i: any, n_token: any, transformer: any): any;
    transform(n: any): any;
    getTransformerClone(): any[][];
    toJSON(): any[][];
    toArrayBuffer(): ArrayBuffer;
}
