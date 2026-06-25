import { YTNode } from '../helpers.js';
import { type RawNode } from '../index.js';

export default class ReloadContinuationData extends YTNode {
  static type = 'ReloadContinuationData';

  continuation: string;

  constructor(data: RawNode) {
    super();
    this.continuation = data.continuation;
  }
}