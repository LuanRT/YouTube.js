import { YTNode } from '../helpers.js';
import { type RawNode, Parser } from '../index.js';
import VideoOwner from './VideoOwner.js';

export default class VideoDescriptionChannelSection extends YTNode {
  static type = 'VideoDescriptionChannelSection';

  channel: VideoOwner | null;

  constructor(data: RawNode) {
    super();
    this.channel = Parser.parseItem(data.channel, VideoOwner);
  }
}