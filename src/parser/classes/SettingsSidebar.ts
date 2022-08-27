import Parser from '../index';
import Text from './misc/Text';
import CompactLink from './CompactLink';
import { ObservedArray, YTNode } from '../helpers';

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