import type { ObservedArray } from '../helpers.ts';
import type { RawNode } from '../types/RawResponse.ts';
import { YTNode } from '../helpers.ts';
import { Parser } from '../index.ts';

import ListItemView from './ListItemView.ts';

export default class ListView extends YTNode {
  static type = 'ListView';

  public items: ObservedArray<ListItemView>;

  constructor(data: RawNode) {
    super();

    this.items = Parser.parseArray(data.listItems, ListItemView);
  }
}