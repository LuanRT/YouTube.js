import Parser from '../index.js';
import Text from './misc/Text.js';
import CompactLink from './CompactLink.js';
import { ObservedArray, YTNode } from '../helpers.js';

class SettingsSidebar extends YTNode {
  static type = 'SettingsSidebar';

  title: Text;
  items: ObservedArray<CompactLink>;

  constructor(data: any) {
    super();
    this.title = new Text(data.title);
    this.items = Parser.parseArray<CompactLink>(data.items, CompactLink);
  }

  get contents() {
    return this.items;
  }
}

export default SettingsSidebar;