import { YTNode } from '../helpers.js';
import type { RawNode } from '../types/index.js';

export default class CompositeVideoPrimaryInfo extends YTNode {
  static type = 'CompositeVideoPrimaryInfo';

  constructor(_data: RawNode) {
    super();
  }
}
