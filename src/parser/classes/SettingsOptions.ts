import Parser from '../index.js';

import Text from './misc/Text.js';
import Dropdown from './Dropdown.js';
import SettingsSwitch from './SettingsSwitch.js';
import SettingsCheckbox from './SettingsCheckbox.js';
import ChannelOptions from './ChannelOptions.js';
import CopyLink from './CopyLink.js';

import { YTNode } from '../helpers.js';

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