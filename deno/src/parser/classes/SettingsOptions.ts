import Parser from '../index.ts';

import Text from './misc/Text.ts';
import Dropdown from './Dropdown.ts';
import SettingsSwitch from './SettingsSwitch.ts';
import SettingsCheckbox from './SettingsCheckbox.ts';
import ChannelOptions from './ChannelOptions.ts';
import CopyLink from './CopyLink.ts';

import { YTNode } from '../helpers.ts';

class SettingsOptions extends YTNode {
  static type = 'SettingsOptions';

  title: Text;
  text?: string;
  options?;

  constructor(data: any) {
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

export default SettingsOptions;