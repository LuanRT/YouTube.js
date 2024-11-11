import { YTNode } from '../../helpers.js';
import type { RawNode } from '../../index.js';

export default class SignalAction extends YTNode {
  static type = 'SignalAction';

  public signal: string;

  constructor(data: RawNode) {
    super();
    this.signal = data.signal;
  }
}