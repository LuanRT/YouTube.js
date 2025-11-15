import { YTNode } from '../helpers.js';
import { type RawNode } from '../index.js';

export default class NextContinuationData extends YTNode {
  static type = 'NextContinuationData';

  continuation: string;

  constructor(data: RawNode) {
    super();
    this.continuation = data.continuation;
  }
}