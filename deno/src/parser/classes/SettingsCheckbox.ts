import Text from './misc/Text.ts';
import { YTNode } from '../helpers.ts';
import type { RawNode } from '../index.ts';

export default class SettingsCheckbox extends YTNode {
  static type = 'SettingsCheckbox';

  title: Text;
  help_text: Text;
  enabled: boolean;
  disabled: boolean;
  id: string;

  constructor(data: RawNode) {
    super();
    this.title = new Text(data.title);
    this.help_text = new Text(data.helpText);
    this.enabled = data.enabled;
    this.disabled = data.disabled;
    this.id = data.id;
  }
}