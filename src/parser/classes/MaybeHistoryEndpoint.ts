import { YTNode } from '../helpers.js';
import { type RawNode, Parser } from '../index.js';
import NavigationEndpoint from './NavigationEndpoint.js';
import PreviewButton from './PreviewButton.js';

export default class MaybeHistoryEndpoint extends YTNode {
  static type = 'MaybeHistoryEndpoint';

  use_prev_history_item?: boolean;
  endpoint?: NavigationEndpoint;
  use_next_history_item?: boolean;
  item?: PreviewButton | null;

  constructor(data: RawNode) {
    super();
    this.use_prev_history_item = Reflect.has(data, 'usePrevHistoryItem') ? data.usePrevHistoryItem : undefined;
    this.endpoint = Reflect.has(data, 'endpoint') ? new NavigationEndpoint(data.endpoint) : undefined;
    this.use_next_history_item = Reflect.has(data, 'useNextHistoryItem') ? data.useNextHistoryItem : undefined;
    this.item = Reflect.has(data, 'item') ? Parser.parseItem(data.item, PreviewButton) : undefined;
  }
}