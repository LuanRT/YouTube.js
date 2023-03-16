import { YTNode } from '../helpers.ts';
import { RawNode } from '../index.ts';

class YpcTrailer extends YTNode {
  static type = 'YpcTrailer';

  video_message: string;
  player_response;

  constructor(data: RawNode) {
    super();
    this.video_message = data.fullVideoMessage;
    this.player_response = data.unserializedPlayerResponse;
  }
}

export default YpcTrailer;