import Parser from '../index.ts';
import Text from './misc/Text.ts';
import CompactLink from './CompactLink.ts';
import { ObservedArray, YTNode } from '../helpers.ts';

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