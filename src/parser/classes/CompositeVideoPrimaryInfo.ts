import { YTNode } from '../helpers.js';
import type { RawNode } from '../types/RawResponse.js';

export default class CompositeVideoPrimaryInfo extends YTNode {
  static type = 'CompositeVideoPrimaryInfo';

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  constructor(data: RawNode) {
    super();
  }
}
