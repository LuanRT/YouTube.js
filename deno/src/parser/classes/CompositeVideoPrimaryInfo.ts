import { YTNode } from '../helpers.ts';
import type { RawNode } from '../types/index.ts';

export default class CompositeVideoPrimaryInfo extends YTNode {
  static type = 'CompositeVideoPrimaryInfo';

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  constructor(data: RawNode) {
    super();
  }
}
