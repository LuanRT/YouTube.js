import { YTNode } from '../../helpers.ts';
import Text from '../misc/Text.ts';

import type { RawNode } from '../../index.ts';

export default class VoiceReplyContainerView extends YTNode {
  static type = 'VoiceReplyContainerView';

  voice_reply_unavailable_text : Text;
  transcript_text : Text;

  constructor(data: RawNode) {
    super();

    this.voice_reply_unavailable_text = Text.fromAttributed(data.voiceReplyUnavailableText);
    this.transcript_text = Text.fromAttributed(data.transcriptText);
  }
}