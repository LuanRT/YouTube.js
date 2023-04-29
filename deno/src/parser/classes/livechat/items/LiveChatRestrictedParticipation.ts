import { YTNode } from '../../../helpers.ts';
import Text from '../../misc/Text.ts';
import type { RawNode } from '../../../index.ts';

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