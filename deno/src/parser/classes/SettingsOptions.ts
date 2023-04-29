import { YTNode, type ObservedArray } from '../helpers.ts';
import Parser, { type RawNode } from '../index.ts';
import ChannelOptions from './ChannelOptions.ts';
import CopyLink from './CopyLink.ts';
import Dropdown from './Dropdown.ts';
import SettingsCheckbox from './SettingsCheckbox.ts';
import SettingsSwitch from './SettingsSwitch.ts';
import Text from './misc/Text.ts';

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