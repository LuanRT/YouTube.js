import type { ObservedArray } from '../helpers.js';
import { YTNode } from '../helpers.js';
import type { RawNode } from '../index.js';
import { Parser } from '../index.js';
import NavigationEndpoint from './NavigationEndpoint.js';

export default class CardItemContainer extends YTNode {
  static type = 'CardItemContainer';

  contents: ObservedArray<YTNode>;
  base_renderer: YTNode | null;
  endpoint: NavigationEndpoint | null;
  target_id: string | null;

  constructor(data: RawNode) {
    super();
    this.contents = Parser.parseArray(data.contents);
    this.base_renderer = Parser.parseItem(data.baseRenderer);
    this.endpoint = new NavigationEndpoint(data.onClickCommand);
    this.target_id = data.targetId || null;
  }
}
