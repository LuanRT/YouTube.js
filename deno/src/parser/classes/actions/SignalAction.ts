import { YTNode } from '../../helpers.ts';
import type { RawNode } from '../../index.ts';

export default class SignalAction extends YTNode {
  static type = 'SignalAction';

  public signal: string;

  constructor(data: RawNode) {
    super();
    this.signal = data.signal;
  }
}