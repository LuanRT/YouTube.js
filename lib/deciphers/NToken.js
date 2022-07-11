import { NTOKEN_REGEX, BASE64_DIALECT } from "../utils/Constants.js";

const NTokenTransformOperation = {
    NO_OP: 0,
    PUSH: 1,
    REVERSE_1: 2,
    REVERSE_2: 3,
    SPLICE: 4,
    SWAP0_1: 5,
    SWAP0_2: 6,
    ROTATE_1: 7,
    ROTATE_2: 8,
    BASE64_DIA: 9,
    TRANSLATE_1: 10,
    TRANSLATE_2: 11
};
const NTokenTransformOpType = {
    FUNC: 0,
    N_ARR: 1,
    LITERAL: 2,
    REF: 3
};
const OP_LOOKUP = {
    'd.push(e)': NTokenTransformOperation.PUSH,
    'd.reverse()': NTokenTransformOperation.REVERSE_1,
    'function(d){for(var': NTokenTransformOperation.REVERSE_2,
    'd.length;d.splice(e,1)': NTokenTransformOperation.SPLICE,
    'd[0])[0])': NTokenTransformOperation.SWAP0_1,
    'f=d[0];d[0]': NTokenTransformOperation.SWAP0_2,
    'reverse().forEach': NTokenTransformOperation.ROTATE_1,
    'unshift(d.pop())': NTokenTransformOperation.ROTATE_2,
    'function(){for(var': NTokenTransformOperation.BASE64_DIA,
    'function(d,e){for(var f': NTokenTransformOperation.TRANSLATE_1,
    'function(d,e,f){var': NTokenTransformOperation.TRANSLATE_2
};
class NTokenTransforms {
    /**
     * Gets a base64 alphabet and uses it as a lookup table to modify n.
     *
     * @param {any[]} arr
     * @param {string} token
     * @param {boolean} is_reverse_base64
     * @returns {void}
     */
    static translate1(arr, token, is_reverse_base64) {
        const characters = is_reverse_base64 ? BASE64_DIALECT.REVERSE : BASE64_DIALECT.NORMAL;
        const token_chars = token.split('');
        arr.forEach((char, index, loc) => {
            token_chars.push(loc[index] = characters[(characters.indexOf(char) - characters.indexOf(token_chars[index]) + 64) % characters.length]);
        });
    }
    static translate2(arr, token, characters) {
        let chars_length = characters.length;
        const token_chars = token.split('');
        arr.forEach((char, index, loc) => {
            token_chars.push(loc[index] = characters[(characters.indexOf(char) - characters.indexOf(token_chars[index]) + index + chars_length--) % characters.length]);
        });
    }
    /**
     * Returns the requested base64 dialect, currently this is only used by 'translate2'.
     *
     * @param {boolean} is_reverse_base64
     * @returns {string[]}
     */
    static getBase64Dia(is_reverse_base64) {
        const characters = is_reverse_base64 ? BASE64_DIALECT.REVERSE : BASE64_DIALECT.NORMAL;
        return characters;
    }
    /**
     * Swaps the first element with the one at the given index.
     *
     * @param {any[]} arr
     * @param {number} index
     * @returns {void}
     */
    static swap0(arr, index) {
        const old_elem = arr[0];
        index = (index % arr.length + arr.length) % arr.length;
        arr[0] = arr[index];
        arr[index] = old_elem;
    }
    /**
     * Rotates elements of the array.
     *
     * @param {any[]} arr
     * @param {number} index
     * @returns {void}
     */
    static rotate(arr, index) {
        index = (index % arr.length + arr.length) % arr.length;
        arr.splice(-index).reverse().forEach((el) => arr.unshift(el));
    }
    /**
     * Deletes one element at the given index.
     *
     * @param {any[]} arr
     * @param {number} index
     * @returns {void}
     */
    static splice(arr, index) {
        index = (index % arr.length + arr.length) % arr.length;
        arr.splice(index, 1);
    }
    static reverse(arr) {
        arr.reverse();
    }
    static push(arr, item) {
        if (Array.isArray(arr?.[0]))
            arr.push([NTokenTransformOpType.LITERAL, item]);
        else
            arr.push(item);
    }
}
const TRANSFORM_FUNCTIONS = [{
        [NTokenTransformOperation.PUSH]: NTokenTransforms.push,
        [NTokenTransformOperation.SPLICE]: NTokenTransforms.splice,
        [NTokenTransformOperation.SWAP0_1]: NTokenTransforms.swap0,
        [NTokenTransformOperation.SWAP0_2]: NTokenTransforms.swap0,
        [NTokenTransformOperation.ROTATE_1]: NTokenTransforms.rotate,
        [NTokenTransformOperation.ROTATE_2]: NTokenTransforms.rotate,
        [NTokenTransformOperation.REVERSE_1]: NTokenTransforms.reverse,
        [NTokenTransformOperation.REVERSE_2]: NTokenTransforms.reverse,
        [NTokenTransformOperation.BASE64_DIA]: () => NTokenTransforms.getBase64Dia(false),
        [NTokenTransformOperation.TRANSLATE_1]: (...args) => NTokenTransforms.translate1.apply(null, [...args, false]),
        [NTokenTransformOperation.TRANSLATE_2]: NTokenTransforms.translate2
    }, {
        [NTokenTransformOperation.PUSH]: NTokenTransforms.push,
        [NTokenTransformOperation.SPLICE]: NTokenTransforms.splice,
        [NTokenTransformOperation.SWAP0_1]: NTokenTransforms.swap0,
        [NTokenTransformOperation.SWAP0_2]: NTokenTransforms.swap0,
        [NTokenTransformOperation.ROTATE_1]: NTokenTransforms.rotate,
        [NTokenTransformOperation.ROTATE_2]: NTokenTransforms.rotate,
        [NTokenTransformOperation.REVERSE_1]: NTokenTransforms.reverse,
        [NTokenTransformOperation.REVERSE_2]: NTokenTransforms.reverse,
        [NTokenTransformOperation.BASE64_DIA]: () => NTokenTransforms.getBase64Dia(true),
        [NTokenTransformOperation.TRANSLATE_1]: (...args) => NTokenTransforms.translate1.apply(null, [...args, true]),
        [NTokenTransformOperation.TRANSLATE_2]: NTokenTransforms.translate2
    }];
class NToken {
    constructor(transformer) {
        this.transformer = transformer;
    }
    static fromSourceCode(raw) {
        const transformation_data = NToken.getTransformationData(raw);
        const transformations = transformation_data.map((el) => {
            if (el != null && typeof el != 'number') {
                const is_reverse_base64 = el.includes('case 65:');
                const opcode = OP_LOOKUP[NToken.getFunc(el)?.[0]];
                if (opcode) {
                    el = [
                        NTokenTransformOpType.FUNC,
                        opcode, 0 + is_reverse_base64
                    ];
                }
                else if (el == 'b') {
                    el = [NTokenTransformOpType.N_ARR];
                }
                else {
                    el = [NTokenTransformOpType.LITERAL, el];
                }
            }
            else if (el != null) {
                el = [NTokenTransformOpType.LITERAL, el];
            }
            return el;
        });
        // Fills all placeholders with the transformations array
        const placeholder_indexes = [...raw.matchAll(NTOKEN_REGEX.PLACEHOLDERS)].map((item) => parseInt(item[1]));
        placeholder_indexes.forEach((i) => transformations[i] = [NTokenTransformOpType.REF]);
        // Parses and emulates calls to the functions of the transformations array
        const function_calls = [...(raw.replace(/\n/g, '').match(/try\{(.*?)\}catch/s)[1])
                .matchAll(NTOKEN_REGEX.CALLS)].map((params) => [
            parseInt(params[1]),
            params[2].split(',').map((param) => parseInt(param.match(/c\[(.*?)\]/)?.[1]))
        ]);
        return new NToken([transformations, function_calls]);
    }
    evaluate(i, n_token, transformer) {
        switch (i[0]) {
            case NTokenTransformOpType.FUNC:
                return TRANSFORM_FUNCTIONS[i[2]][i[1]];
            case NTokenTransformOpType.N_ARR:
                return n_token;
            case NTokenTransformOpType.LITERAL:
                return i[1];
            case NTokenTransformOpType.REF:
                return transformer[0];
        }
    }
    transform(n) {
        const n_token = n.split('');
        // We must copy since we will modify the array
        const transformer = this.getTransformerClone();
        try {
            transformer[1].forEach(([index, param_index]) => {
                const base64_dia = (param_index[2] && this.evaluate(transformer[0][param_index[2]], n_token, transformer)());
                this.evaluate(transformer[0][index], n_token, transformer)(param_index[0] !== undefined &&
                    this.evaluate(transformer[0][param_index[0]], n_token, transformer), param_index[1] !== undefined &&
                    this.evaluate(transformer[0][param_index[1]], n_token, transformer), base64_dia);
            });
        }
        catch (err) {
            console.error(new Error(`Could not transform n-token, download may be throttled.\nOriginal Token:${n}Error:\n${err}`));
            return n;
        }
        return n_token.join('');
    }
    getTransformerClone() {
        return [
            [...this.transformer[0]],
            [...this.transformer[1]]
        ];
    }
    toJSON() {
        return this.getTransformerClone();
    }
    toArrayBuffer() {
        // (16 bit FUNC instructions) 2 bit op - 1 bit is_reverse_base64 - 4 bit nonce - 8 bit operation
        // (8 bit N_ARG and REF) 2 bit op - 6 bit nonce
        // (40 bit LITERAL) 2 bit op - 6 bit nonce - 32 bit value
        // NTokenCall will be 8 bit for the index, 8 bit for the number of parameters, and 8 bit for each parameter
        // We've got a 3 * 32 bit header to store the library version and the size of the two arrays
        let size = 4 * 3;
        for (const instruction of this.transformer[0]) {
            switch (instruction[0]) {
                case NTokenTransformOpType.FUNC:
                    size += 2;
                    break;
                case NTokenTransformOpType.N_ARR:
                case NTokenTransformOpType.REF:
                    size += 1;
                    break;
                case NTokenTransformOpType.LITERAL:
                    if (typeof instruction[1] === 'string')
                        size += 1 + 4 + new TextEncoder().encode(instruction[1]).byteLength;
                    size += 4 + 1;
                    break;
            }
        }
        for (const call of this.transformer[1]) {
            size += 2 + call[1].length;
        }
        const buffer = new ArrayBuffer(size);
        const view = new DataView(buffer);
        let offset = 0;
        view.setUint32(offset, NToken.LIBRARY_VERSION, true);
        offset += 4;
        view.setUint32(offset, this.transformer[0].length, true);
        offset += 4;
        view.setUint32(offset, this.transformer[1].length, true);
        offset += 4;
        for (const instruction of this.transformer[0]) {
            switch (instruction[0]) {
                case NTokenTransformOpType.FUNC:
                    {
                        const opcode = (instruction[0] << 6) | instruction[2];
                        view.setUint8(offset, opcode);
                        offset += 1;
                        view.setUint8(offset, instruction[1]);
                        offset += 1;
                    }
                    break;
                case NTokenTransformOpType.N_ARR:
                case NTokenTransformOpType.REF:
                    {
                        const opcode = (instruction[0] << 6);
                        view.setUint8(offset, opcode);
                        offset += 1;
                    }
                    break;
                case NTokenTransformOpType.LITERAL:
                    {
                        const type = typeof instruction[1] === 'string' ? 1 : 0;
                        const opcode = (instruction[0] << 6) | type;
                        view.setUint8(offset, opcode);
                        offset += 1;
                        if (type === 0) {
                            view.setInt32(offset, instruction[1], true);
                            offset += 4;
                        }
                        else {
                            const encoded = new TextEncoder().encode(instruction[1]);
                            view.setUint32(offset, encoded.byteLength, true);
                            offset += 4;
                            for (let i = 0; i < encoded.byteLength; i++) {
                                view.setUint8(offset, encoded[i]);
                                offset += 1;
                            }
                        }
                    }
                    break;
            }
        }
        for (const call of this.transformer[1]) {
            view.setUint8(offset, call[0]);
            offset += 1;
            view.setUint8(offset, call[1].length);
            offset += 1;
            for (const param of call[1]) {
                view.setUint8(offset, param);
                offset += 1;
            }
        }
        return buffer;
    }
    static fromArrayBuffer(buffer) {
        const view = new DataView(buffer);
        let offset = 0;
        const version = view.getUint32(offset, true);
        offset += 4;
        if (version !== NToken.LIBRARY_VERSION)
            throw new TypeError('Invalid library version');
        const transformations_length = view.getUint32(offset, true);
        offset += 4;
        const function_calls_length = view.getUint32(offset, true);
        offset += 4;
        const transformations = new Array(transformations_length);
        for (let i = 0; i < transformations_length; i++) {
            const opcode = view.getUint8(offset++);
            const op = opcode >> 6;
            switch (op) {
                case NTokenTransformOpType.FUNC:
                    {
                        const is_reverse_base64 = opcode & 0b00000001;
                        const operation = view.getUint8(offset++);
                        transformations[i] = [op, operation, is_reverse_base64];
                    }
                    break;
                case NTokenTransformOpType.N_ARR:
                case NTokenTransformOpType.REF:
                    transformations[i] = [op];
                    break;
                case NTokenTransformOpType.LITERAL:
                    {
                        const type = opcode & 0b00000001;
                        if (type === 0) {
                            const literal = view.getInt32(offset, true);
                            offset += 4;
                            transformations[i] = [op, literal];
                        }
                        else {
                            const length = view.getUint32(offset, true);
                            offset += 4;
                            const literal = new Uint8Array(length);
                            for (let i = 0; i < length; i++) {
                                literal[i] = view.getUint8(offset++);
                            }
                            transformations[i] = [op, new TextDecoder().decode(literal)];
                        }
                    }
                    break;
                default:
                    throw new Error('Invalid opcode');
            }
        }
        const function_calls = new Array(function_calls_length);
        for (let i = 0; i < function_calls_length; i++) {
            const index = view.getUint8(offset++);
            const num_params = view.getUint8(offset++);
            const params = new Array(num_params);
            for (let j = 0; j < num_params; j++) {
                params[j] = view.getUint8(offset++);
            }
            function_calls[i] = [index, params];
        }
        return new NToken([transformations, function_calls]);
    }
    static get LIBRARY_VERSION() {
        return 1;
    }
    static getFunc(el) {
        return el.match(NTOKEN_REGEX.FUNCTIONS);
    }
    static getTransformationData(raw) {
        const data = `[${raw.replace(/\n/g, '').match(/c=\[(.*?)\];c/s)?.[1]}]`;
        return JSON.parse(this.refineNTokenData(data));
    }
    // TODO: refactor this
    static refineNTokenData(data) {
        return data
            .replace(/function\(d,e\)/g, '"function(d,e)').replace(/function\(d\)/g, '"function(d)')
            .replace(/function\(\)/g, '"function()').replace(/function\(d,e,f\)/g, '"function(d,e,f)')
            .replace(/\[function\(d,e,f\)/g, '["function(d,e,f)').replace(/,b,/g, ',"b",')
            .replace(/,b/g, ',"b"').replace(/b,/g, '"b",').replace(/b]/g, '"b"]')
            .replace(/\[b/g, '["b"').replace(/}]/g, '"]').replace(/},/g, '}",')
            .replace(/""/g, '').replace(/length]\)}"/g, 'length])}');
    }
}
export { NTokenTransformOperation };
export { NTokenTransformOpType };
export { NTokenTransforms };
export default NToken;
