import { YTNode } from '../../../helpers.js';
import Text from '../../misc/Text.js';
import type { RawNode } from '../../../index.js';

class LiveChatRestrictedParticipation extends YTNode {
  message: Text;
  icon_type?: string;

  constructor(data: RawNode) {
    super();
    this.message = new Text(data.message);
    this.icon_type = data?.icon?.iconType;
    // TODO: parse onClickCommand
  }
}

export default LiveChatRestrictedParticipation;