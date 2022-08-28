import Parser from '..';

import Text from './misc/Text';
import Dropdown from './Dropdown';
import SettingsSwitch from './SettingsSwitch';
import SettingsCheckbox from './SettingsCheckbox';
import ChannelOptions from './ChannelOptions';
import CopyLink from './CopyLink';

import { YTNode } from '../helpers';

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
      this.options = Parser.parseArray(data.options, [ SettingsSwitch, Dropdown, CopyLink, SettingsCheckbox, ChannelOptions ]);
    }
  }
}

export default SettingsOptions;