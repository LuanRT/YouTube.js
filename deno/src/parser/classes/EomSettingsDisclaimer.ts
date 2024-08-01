import Text from './misc/Text.ts';
import { YTNode } from '../helpers.ts';
import { type RawNode } from '../index.ts';

export default class EomSettingsDisclaimer extends YTNode {
  static type = 'EomSettingsDisclaimer';

  disclaimer: Text;
  info_icon: {
    icon_type: string
  };
  usage_scenario: string;

  constructor(data: RawNode) {
    super();
    this.disclaimer = new Text(data.disclaimer);
    this.info_icon = {
      icon_type: data.infoIcon.iconType
    };
    this.usage_scenario = data.usageScenario;
  }
}
