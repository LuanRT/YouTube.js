import Text from './misc/Text.js';
import { YTNode } from '../helpers.js';

class SettingsCheckbox extends YTNode {
  static type = 'SettingsCheckbox';

  title: Text;
  help_text: Text;
  enabled: boolean;
  disabled: boolean;
  id: string;

  constructor(data: any) {
    super();
    this.title = new Text(data.title);
    this.help_text = new Text(data.helpText);
    this.enabled = data.enabled;
    this.disabled = data.disabled;
    this.id = data.id;
  }
}

export default SettingsCheckbox;