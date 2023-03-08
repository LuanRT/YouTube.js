import { YTNode } from '../../../helpers.ts';
import Text from '../../misc/Text.ts';
import type { RawNode } from '../../../index.ts';

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