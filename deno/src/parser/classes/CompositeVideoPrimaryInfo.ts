import { YTNode } from '../helpers.ts';
import type { RawNode } from '../types/index.ts';

export default class CompositeVideoPrimaryInfo extends YTNode {
  static type = 'CompositeVideoPrimaryInfo';

  constructor(_data: RawNode) {
    super();
  }
}
