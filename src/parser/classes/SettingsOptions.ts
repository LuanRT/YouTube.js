import { YTNode, type ObservedArray } from '../helpers.js';
import { Parser, type RawNode } from '../index.js';
import ChannelOptions from './ChannelOptions.js';
import CopyLink from './CopyLink.js';
import Dropdown from './Dropdown.js';
import SettingsCheckbox from './SettingsCheckbox.js';
import SettingsSwitch from './SettingsSwitch.js';
import Text from './misc/Text.js';

export default class SettingsOptions extends YTNode {
  static type = 'SettingsOptions';

  title: Text;
  text?: string;
  options?: ObservedArray<SettingsSwitch | Dropdown | CopyLink | SettingsCheckbox | ChannelOptions>;

  constructor(data: RawNode) {
    super();
    this.title = new Text(data.title);

    if (Reflect.has(data, 'text')) {
      this.text = new Text(data.text).toString();
    }

    if (Reflect.has(data, 'options')) {
      this.options = Parser.parseArray(data.options, [
        SettingsSwitch, Dropdown, CopyLink,
        SettingsCheckbox, ChannelOptions
      ]);
    }
  }
}