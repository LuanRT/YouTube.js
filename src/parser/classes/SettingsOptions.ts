import Parser from '..';

import Text from './misc/Text';
import Dropdown from './Dropdown';
import SettingsSwitch from './SettingsSwitch';
import ChannelOptions from './ChannelOptions';

import { ObservedArray, YTNode } from '../helpers';

class SettingsOptions extends YTNode {
  static type = 'SettingsOptions';

  title: Text;
  text?: string;
  options?: ObservedArray<Dropdown | SettingsSwitch | ChannelOptions>;

  constructor(data: any) {
    super();
    this.title = new Text(data.title);

    if (Reflect.has(data, 'text')) {
      this.text = new Text(data.text).toString();
    }

    if (Reflect.has(data, 'options')) {
      this.options = Parser.parseArray<SettingsSwitch | Dropdown | ChannelOptions>(data.options, [ SettingsSwitch, Dropdown, ChannelOptions ]);
    }
  }
}

export default SettingsOptions;