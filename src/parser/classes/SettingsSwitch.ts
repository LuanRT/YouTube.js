import Text from './misc/Text.js';
import NavigationEndpoint from './NavigationEndpoint.js';
import { YTNode } from '../helpers.js';

class SettingsSwitch extends YTNode {
  static type = 'SettingsSwitch';

  title: Text;
  subtitle: Text;
  enabled: boolean;
  enable_endpoint: NavigationEndpoint;
  disable_endpoint: NavigationEndpoint;

  constructor(data: any) {
    super();
    this.title = new Text(data.title);
    this.subtitle = new Text(data.subtitle);
    this.enabled = data.enabled;
    this.enable_endpoint = new NavigationEndpoint(data.enableServiceEndpoint);
    this.disable_endpoint = new NavigationEndpoint(data.disableServiceEndpoint);
  }
}

export default SettingsSwitch;