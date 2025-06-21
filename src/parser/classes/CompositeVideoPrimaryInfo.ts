import { YTNode } from '../helpers.js';
import type { RawNode } from '../types/RawResponse.js';

export default class CompositeVideoPrimaryInfo extends YTNode {
  static type = 'CompositeVideoPrimaryInfo';
  data: RawNode;

  constructor(data: RawNode) {
    super();
    this.data = data;
  }
}
