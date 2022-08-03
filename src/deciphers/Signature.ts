import { SIG_REGEX } from '../utils/Constants';

export enum SignatureOperation {
  REVERSE,
  SPLICE,
  SWAP
}

export type SignatureInstruction = [ SignatureOperation, number ];

export default class Signature {
  private action_sequence;

  constructor(action_sequence: SignatureInstruction[]) {
    this.action_sequence = action_sequence;
  }

  static fromSourceCode(raw_sc: string) {
    let func: RegExpExecArray | null;
    const functions = [];

    while ((func = SIG_REGEX.FUNCTIONS.exec(raw_sc)) !== null) {
      if (func[0].includes('reverse')) {
        functions[0] = func[1];
      } else if (func[0].includes('splice')) {
        functions[1] = func[1];
      } else {
        functions[2] = func[1];
      }
    }

    let actions: RegExpExecArray | null;

    const action_sequence: SignatureInstruction[] = [];

    while ((actions = SIG_REGEX.ACTIONS.exec(raw_sc)) !== null) {
      const action = actions.groups;
      if (!action) continue;
      switch (action.name) {
        case functions[0]:
          action_sequence.push([ SignatureOperation.REVERSE, 0 ]);
          break;
        case functions[1]:
          action_sequence.push([ SignatureOperation.SPLICE, parseInt(action.param) ]);
          break;
        case functions[2]:
          action_sequence.push([ SignatureOperation.SWAP, parseInt(action.param) ]);
          break;
        default:
      }
    }

    return new Signature(action_sequence);
  }

  decipher(url: string) {
    const args = new URLSearchParams(url);
    const signature = args.get('s')?.split('');

    if (!signature)
      throw new TypeError('Invalid input signature');

    for (const action of this.action_sequence) {
      switch (action[0]) {
        case SignatureOperation.REVERSE:
          signature.reverse();
          break;
        case SignatureOperation.SPLICE:
          signature.splice(0, action[1]);
          break;
        case SignatureOperation.SWAP:
          const index = action[1];
          const orig_arr = signature[0];
          signature[0] = signature[index % signature.length];
          signature[index % signature.length] = orig_arr;
          break;
        default:
          break;
      }
    }

    return signature.join('');
  }

  toJSON() {
    return [ ...this.action_sequence ];
  }

  toArrayBuffer() {
    // Array buffer encoding assumes that the index of the action is a short (16 bit unsigned)
    const buffer = new ArrayBuffer(4 + 4 + this.action_sequence.length * (1 + 2));
    const view = new DataView(buffer);

    let offset = 0;

    view.setUint32(offset, Signature.LIBRARY_VERSION, true);
    offset += 4;

    view.setUint32(offset, this.action_sequence.length, true);
    offset += 4;

    for (let i = 0; i < this.action_sequence.length; i++) {
      view.setUint8(offset, this.action_sequence[i][0]);
      offset += 1;

      view.setUint16(offset, this.action_sequence[i][1], true);
      offset += 2;
    }

    return buffer;
  }

  static fromArrayBuffer(buffer: ArrayBuffer) {
    const view = new DataView(buffer);

    let offset = 0;

    const version = view.getUint32(offset, true);
    offset += 4;

    if (version !== Signature.LIBRARY_VERSION)
      throw new TypeError('Invalid library version');

    const action_sequenceLength = view.getUint32(offset, true);
    offset += 4;

    const action_sequence = new Array<SignatureInstruction>(action_sequenceLength);

    for (let i = 0; i < action_sequenceLength; i++) {
      action_sequence[i] = [ view.getUint8(offset), view.getUint16(offset + 1, true) ];
      offset += 3;
    }

    return new Signature(action_sequence);
  }

  static get LIBRARY_VERSION() {
    return 1;
  }
}