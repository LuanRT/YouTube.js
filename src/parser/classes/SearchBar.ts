import { YTNode } from '../helpers.js';

import type { RawNode } from '../types/index.js';

export default class SearchBar extends YTNode {
  static type = 'SearchBar';

  hack: boolean;

  constructor(data: RawNode) {
    super();
    this.hack = !!data.hack;
  }
}
