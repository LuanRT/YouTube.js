import { SIG_REGEX } from '../utils/Constants';

export enum SignatureOperation {
    REVERSE,
    SPLICE,
    SWAP
}

export type SignatureInstruction = [SignatureOperation, number];

export default class Signature {
  private actionSequence;

  constructor(actionSequence: SignatureInstruction[]) {
    this.actionSequence = actionSequence;
  }

  static fromSourceCode(sigDecipherSc: string) {
    let func: RegExpExecArray | null;
    const functions = [];

    while ((func = SIG_REGEX.FUNCTIONS.exec(sigDecipherSc)) !== null) {
      if (func[0].includes('reverse')) {
        functions[0] = func[1];
      } else if (func[0].includes('splice')) {
        functions[1] = func[1];
      } else {
        functions[2] = func[1];
      }
    }

    let actions: RegExpExecArray | null;

    const actionSequence: SignatureInstruction[] = [];

    while ((actions = SIG_REGEX.ACTIONS.exec(sigDecipherSc)) !== null) {
      const action = actions.groups;
      if (!action) continue;
      switch (action.name) {
        case functions[0]:
          actionSequence.push([ SignatureOperation.REVERSE, 0 ]);
          break;
        case functions[1]:
          actionSequence.push([ SignatureOperation.SPLICE, parseInt(action.param) ]);
          break;
        case functions[2]:
          actionSequence.push([ SignatureOperation.SWAP, parseInt(action.param) ]);
          break;
        default:
      }
    }

    return new Signature(actionSequence);
  }

  decipher(url: string) {
    const args = new URLSearchParams(url);
    const signature = args.get('s')?.split('');
    if (!signature)
      throw new TypeError('Invalid input signature');

    for (const action of this.actionSequence) {
      switch (action[0]) {
        case SignatureOperation.REVERSE:
          signature.reverse();
          break;

        case SignatureOperation.SPLICE:
          signature.splice(0, action[1]);
          break;

        case SignatureOperation.SWAP:
          const index = action[1];
          const origArrI = signature[0];
          signature[0] = signature[index % signature.length];
          signature[index % signature.length] = origArrI;
          break;

        default:
          break;
      }
    }

    return signature.join('');
  }

  toJSON() {
    return [ ...this.actionSequence ];
  }

  toArrayBuffer() {
    // Array buffer encoding assumes that the index of the action is a short (16 bit unsigned)
    const buffer = new ArrayBuffer(4 + 4 + this.actionSequence.length * (1 + 2));
    const view = new DataView(buffer);
    let offset = 0;
    view.setUint32(offset, Signature.LIBRARY_VERSION, true);
    offset += 4;
    view.setUint32(offset, this.actionSequence.length, true);
    offset += 4;
    for (let i = 0; i < this.actionSequence.length; i++) {
      view.setUint8(offset, this.actionSequence[i][0]);
      offset += 1;
      view.setUint16(offset, this.actionSequence[i][1], true);
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

    const actionSequenceLength = view.getUint32(offset, true);
    offset += 4;
    const actionSequence = new Array<SignatureInstruction>(actionSequenceLength);
    for (let i = 0; i < actionSequenceLength; i++) {
      actionSequence[i] = [ view.getUint8(offset), view.getUint16(offset + 1, true) ];
      offset += 3;
    }
    return new Signature(actionSequence);
  }

  static get LIBRARY_VERSION() {
    return 1;
  }
}