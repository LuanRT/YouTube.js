import { YTNode } from '../helpers.js';
import type { IRawResponse, RawNode } from '../index.js';

export default class YpcTrailer extends YTNode {
  static type = 'YpcTrailer';

  video_message: string;
  player_response: IRawResponse;

  constructor(data: RawNode) {
    super();
    this.video_message = data.fullVideoMessage;
    this.player_response = data.unserializedPlayerResponse;
  }
}