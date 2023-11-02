import { YTNode, type ObservedArray } from '../helpers.js';
import { Parser, type RawNode } from '../index.js';
import CompactLink from './CompactLink.js';
import Text from './misc/Text.js';

export default class SettingsSidebar extends YTNode {
  static type = 'SettingsSidebar';

  title: Text;
  items: ObservedArray<CompactLink>;

  constructor(data: RawNode) {
    super();
    this.title = new Text(data.title);
    this.items = Parser.parseArray(data.items, CompactLink);
  }

  // XXX: Alias for consistency.
  get contents() {
    return this.items;
  }
}