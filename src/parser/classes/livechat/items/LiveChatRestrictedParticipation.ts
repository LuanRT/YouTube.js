import { YTNode } from '../../../helpers.js';
import Text from '../../misc/Text.js';
import type { RawNode } from '../../../index.js';

export default class LiveChatRestrictedParticipation extends YTNode {
  static type = 'LiveChatRestrictedParticipation';

  message: Text;
  icon_type?: string;

  constructor(data: RawNode) {
    super();
    this.message = new Text(data.message);
    if (Reflect.has(data, 'icon') && Reflect.has(data.icon, 'iconType')) {
      this.icon_type = data.icon.iconType;
    }
    // TODO: parse onClickCommand
  }
}