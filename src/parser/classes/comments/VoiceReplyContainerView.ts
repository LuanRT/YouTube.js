import { YTNode } from '../../helpers.js';
import Text from '../misc/Text.js';

import type { RawNode } from '../../index.js';

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