import { NTOKEN_REGEX, BASE64_DIALECT } from '../utils/Constants';
import { InnertubeError } from '../utils/Utils';

export enum NTokenTransformOperation {
    NO_OP = 0,
    PUSH,
    REVERSE_1,
    REVERSE_2,
    SPLICE,
    SWAP0_1,
    SWAP0_2,
    ROTATE_1,
    ROTATE_2,
    BASE64_DIA,
    TRANSLATE_1,
    TRANSLATE_2,
}

export enum NTokenTransformOpType {
    FUNC,
    N_ARR,
    LITERAL,
    REF
}

const OP_LOOKUP: Record<string, NTokenTransformOperation> = {
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

export class NTokenTransforms {
  /**
   * Gets a base64 alphabet and uses it as a lookup table to modify n.
   * @param arr
   * @param token
   * @param is_reverse_base64
   */
  static translate1(arr: any[], token: string, is_reverse_base64: boolean) {
    const characters = is_reverse_base64 && BASE64_DIALECT.REVERSE || BASE64_DIALECT.NORMAL;
    const that = token.split('');
    arr.forEach((char, index, loc) => {
      that.push(loc[index] = characters[(characters.indexOf(char) - characters.indexOf(that[index]) + 64) % characters.length]);
    });
  }

  static translate2(arr: any[], token: string, characters: string[]) {
    let chars_length = characters.length;
    const that = token.split('');
    arr.forEach((char, index, loc) => {
      that.push(loc[index] = characters[(characters.indexOf(char) - characters.indexOf(that[index]) + index + chars_length--) % characters.length]);
    });
  }

  /**
   * Returns the requested base64 dialect, currently this is only used by 'translate2'.
   * @param is_reverse_base64
   */
  static getBase64Dia(is_reverse_base64: boolean) {
    const characters = is_reverse_base64 && BASE64_DIALECT.REVERSE || BASE64_DIALECT.NORMAL;
    return characters;
  }

  /**
   * Swaps the first element with the one at the given index.
   * @param arr
   * @param index
   */
  static swap0(arr: any[], index: number) {
    const old_elem = arr[0];
    index = (index % arr.length + arr.length) % arr.length;
    arr[0] = arr[index];
    arr[index] = old_elem;
  }

  /**
   * Rotates elements of the array.
   * @param arr
   * @param index
   */
  static rotate(arr: any[], index: number) {
    index = (index % arr.length + arr.length) % arr.length;
    arr.splice(-index).reverse().forEach((el) => arr.unshift(el));
  }

  /**
   * Deletes one element at the given index.
   * @param arr
   * @param index
   */
  static splice(arr: any[], index: number) {
    index = (index % arr.length + arr.length) % arr.length;
    arr.splice(index, 1);
  }

  static reverse(arr: any[]) {
    arr.reverse();
  }

  static push(arr: any[], item: any) {
    if (Array.isArray(arr?.[0])) arr.push([ NTokenTransformOpType.LITERAL, item ]);
    else arr.push(item);
  }
}

const TRANSFORM_FUNCTIONS: [Record<number, any>, Record<number, any>] = [
  {
    [NTokenTransformOperation.PUSH]: NTokenTransforms.push,
    [NTokenTransformOperation.SPLICE]: NTokenTransforms.splice,
    [NTokenTransformOperation.SWAP0_1]: NTokenTransforms.swap0,
    [NTokenTransformOperation.SWAP0_2]: NTokenTransforms.swap0,
    [NTokenTransformOperation.ROTATE_1]: NTokenTransforms.rotate,
    [NTokenTransformOperation.ROTATE_2]: NTokenTransforms.rotate,
    [NTokenTransformOperation.REVERSE_1]: NTokenTransforms.reverse,
    [NTokenTransformOperation.REVERSE_2]: NTokenTransforms.reverse,
    [NTokenTransformOperation.BASE64_DIA]: () => NTokenTransforms.getBase64Dia(false),
    [NTokenTransformOperation.TRANSLATE_1]: (...args: any[]) => NTokenTransforms.translate1.apply(null, [ ...args, false ] as any),
    [NTokenTransformOperation.TRANSLATE_2]: NTokenTransforms.translate2
  },
  {
    [NTokenTransformOperation.PUSH]: NTokenTransforms.push,
    [NTokenTransformOperation.SPLICE]: NTokenTransforms.splice,
    [NTokenTransformOperation.SWAP0_1]: NTokenTransforms.swap0,
    [NTokenTransformOperation.SWAP0_2]: NTokenTransforms.swap0,
    [NTokenTransformOperation.ROTATE_1]: NTokenTransforms.rotate,
    [NTokenTransformOperation.ROTATE_2]: NTokenTransforms.rotate,
    [NTokenTransformOperation.REVERSE_1]: NTokenTransforms.reverse,
    [NTokenTransformOperation.REVERSE_2]: NTokenTransforms.reverse,
    [NTokenTransformOperation.BASE64_DIA]: () => NTokenTransforms.getBase64Dia(true),
    [NTokenTransformOperation.TRANSLATE_1]: (...args: any[]) => NTokenTransforms.translate1.apply(null, [ ...args, true ] as any),
    [NTokenTransformOperation.TRANSLATE_2]: NTokenTransforms.translate2
  }
];

export type NTokenCall = [number, number[]];
export type NTokenInstruction = [NTokenTransformOpType, (NTokenTransformOperation | number)?, number?];
export type NTokenTransformer = [NTokenInstruction[], NTokenCall[]];

export default class NToken {
  private transformer: NTokenTransformer;
  constructor(transformer: NTokenTransformer) {
    this.transformer = transformer;
  }
  static fromSourceCode(raw: string) {
    const transformationData = NToken.getTransformationData(raw);
    const transformations = transformationData.map((el) => {
      if (el != null && typeof el != 'number') {
        const is_reverse_base64 = el.includes('case 65:');
        const func = NToken.getFunc(el)?.[0];
        if (!func)
          throw new InnertubeError('Invalid transformation function.', { transformation: el });
        const opcode = OP_LOOKUP[func];
        if (opcode) {
          el = [ NTokenTransformOpType.FUNC, opcode, 0 + is_reverse_base64 ];
        } else if (el == 'b') {
          el = [ NTokenTransformOpType.N_ARR ];
        } else {
          el = [ NTokenTransformOpType.LITERAL, el ];
        }
      } else if (el != null) {
        el = [ NTokenTransformOpType.LITERAL, el ];
      }
      return el;
    });

    // Fills all placeholders with the transformations array
    const placeholder_indexes = [ ...raw.matchAll(NTOKEN_REGEX.PLACEHOLDERS) ].map((item) => parseInt(item[1]));
    placeholder_indexes.forEach((i) => transformations[i] = [ NTokenTransformOpType.REF ]);

    // Parses and emulates calls to the functions of the transformations array
    const function_body = raw.replace(/\n/g, '').match(/try\{(.*?)\}catch/s)?.[1];
    if (!function_body) {
      throw new InnertubeError('Invalid NToken transformation function.', { transformation: raw });
    }
    const function_calls = [
      ...function_body.matchAll(NTOKEN_REGEX.CALLS)
    ].map((params) =>
      [
        parseInt(params[1]),
        params[2].split(',').map((param: string) => {
          const param_value = param.match(/c\[(.*?)\]/)?.[1];
          if (!param_value) {
            throw new InnertubeError('Unexpected NToken transformation function parameter.', { transformation: raw, param });
          }
          return parseInt(param_value);
        })
      ] as NTokenCall
    );

    return new NToken([ transformations, function_calls ]);
  }

  private evaluate(i: NTokenInstruction, nToken: string[], transformer: NTokenTransformer) {
    switch (i[0]) {
      case NTokenTransformOpType.FUNC:
        return TRANSFORM_FUNCTIONS[i[2]!][i[1]!];
      case NTokenTransformOpType.N_ARR:
        return nToken;
      case NTokenTransformOpType.LITERAL:
        return i[1];
      case NTokenTransformOpType.REF:
        return transformer[0];
    }
  }

  transform(n: string) {
    const nToken = n.split('');

    // We must copy since we will modify the array
    const transformer: NTokenTransformer = this.getTransformerClone();

    try {
      transformer[1].forEach(([ index, param_index ]) => {
        const base64_dia = (param_index[2] !== undefined && this.evaluate(transformer[0][param_index[2]], nToken, transformer)());
        this.evaluate(transformer[0][index], nToken, transformer)(
          param_index[0] !== undefined && this.evaluate(transformer[0][param_index[0]], nToken, transformer) || undefined,
          param_index[1] !== undefined && this.evaluate(transformer[0][param_index[1]], nToken, transformer) || undefined,
          base64_dia || undefined
        );
      });
    } catch (e) {
      console.error(new Error(`Could not transform n-token, download may be throttled.\nOriginal Token:${n}Error:\n${e}`));
      return n;
    }
    return nToken.join('');
  }

  private getTransformerClone(): NTokenTransformer {
    return [ [ ...this.transformer[0] ], [ ...this.transformer[1] ] ];
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
          if (typeof instruction[1] === 'string') {
            size += 1 + 4 + new TextEncoder().encode(instruction[1] as string).byteLength;
          }
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
            const opcode = (instruction[0]! << 6) | instruction[2]!;
            view.setUint8(offset, opcode);
            offset += 1;
            view.setUint8(offset, instruction[1]!);
            offset += 1;
          }
          break;
        case NTokenTransformOpType.N_ARR:
        case NTokenTransformOpType.REF:
          {
            const opcode = (instruction[0]! << 6);
            view.setUint8(offset, opcode);
            offset += 1;
          }
          break;
        case NTokenTransformOpType.LITERAL:
          {
            const type = typeof instruction[1] === 'string' ? 1 : 0;
            const opcode = (instruction[0]! << 6) | type;
            view.setUint8(offset, opcode);
            offset += 1;
            if (type === 0) {
              view.setInt32(offset, instruction[1]!, true);
              offset += 4;
            } else {
              const encoded = new TextEncoder().encode(instruction[1] as any);
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

  static fromArrayBuffer(buffer: ArrayBuffer) {
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
    const transformations = new Array<NTokenInstruction>(transformations_length);
    for (let i = 0; i < transformations_length; i++) {
      const opcode = view.getUint8(offset++);
      const op = opcode >> 6;
      switch (op) {
        case NTokenTransformOpType.FUNC:
          {
            const is_reverse_base64 = opcode & 0b00000001;
            const operation = view.getUint8(offset++);
            transformations[i] = [ op, operation, is_reverse_base64 ];
          }
          break;

        case NTokenTransformOpType.N_ARR:
        case NTokenTransformOpType.REF:
          {
            transformations[i] = [ op ];
          }
          break;

        case NTokenTransformOpType.LITERAL:
          {
            const type = opcode & 0b00000001;
            if (type === 0) {
              const literal = view.getInt32(offset, true);
              offset += 4;
              transformations[i] = [ op, literal ];
            } else {
              const length = view.getUint32(offset, true);
              offset += 4;
              const literal = new Uint8Array(length);
              for (let i = 0; i < length; i++) {
                literal[i] = view.getUint8(offset++);
              }
              transformations[i] = [ op, new TextDecoder().decode(literal) as any ];
            }
          }
          break;

        default:
          throw new Error('Invalid opcode');
      }
    }
    const function_calls = new Array<NTokenCall>(function_calls_length);
    for (let i = 0; i < function_calls_length; i++) {
      const index = view.getUint8(offset++);
      const num_params = view.getUint8(offset++);
      const params = new Array<number>(num_params);
      for (let j = 0; j < num_params; j++) {
        params[j] = view.getUint8(offset++);
      }
      function_calls[i] = [ index, params ];
    }

    return new NToken([ transformations, function_calls ]);
  }

  static get LIBRARY_VERSION(): number {
    return 1;
  }

  static getFunc(el: string) {
    return el.match(NTOKEN_REGEX.FUNCTIONS);
  }

  static getTransformationData(raw: string) {
    const data = `[${raw.replace(/\n/g, '').match(/c=\[(.*?)\];c/s)?.[1]}]`;
    return JSON.parse(this.refineNTokenData(data)) as any[];
  }

  static refineNTokenData(data: string) {
    // TODO: refactor this
    return data
      .replace(/function\(d,e\)/g, '"function(d,e)').replace(/function\(d\)/g, '"function(d)')
      .replace(/function\(\)/g, '"function()').replace(/function\(d,e,f\)/g, '"function(d,e,f)')
      .replace(/\[function\(d,e,f\)/g, '["function(d,e,f)').replace(/,b,/g, ',"b",')
      .replace(/,b/g, ',"b"').replace(/b,/g, '"b",').replace(/b]/g, '"b"]')
      .replace(/\[b/g, '["b"').replace(/}]/g, '"]').replace(/},/g, '}",')
      .replace(/""/g, '').replace(/length]\)}"/g, 'length])}');
  }
}
