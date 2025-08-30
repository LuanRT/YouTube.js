import type { ObservedArray } from '../helpers.js';
import type { RawNode } from '../types/RawResponse.js';
import { YTNode } from '../helpers.js';
import { Parser } from '../index.js';

import ListItemView from './ListItemView.js';

export default class ListView extends YTNode {
  static type = 'ListView';

  public items: ObservedArray<ListItemView>;

  constructor(data: RawNode) {
    super();

    this.items = Parser.parseArray(data.listItems, ListItemView);
  }
}