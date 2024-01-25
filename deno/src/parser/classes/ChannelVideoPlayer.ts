import Text from './misc/Text.ts';
import { YTNode } from '../helpers.ts';
import type { RawNode } from '../index.ts';
import { Log } from '../../utils/index.ts';

export default class ChannelVideoPlayer extends YTNode {
  static type = 'ChannelVideoPlayer';

  id: string;
  title: Text;
  description: Text;
  view_count: Text;
  published_time: Text;

  constructor(data: RawNode) {
    super();
    this.id = data.videoId;
    this.title = new Text(data.title);
    this.description = new Text(data.description);
    this.view_count = new Text(data.viewCountText);
    this.published_time = new Text(data.publishedTimeText);
  }

  /**
   * @deprecated
   * This will be removed in a future release.
   * Please use {@link ChannelVideoPlayer.view_count} instead.
   */
  get views(): Text {
    Log.warnOnce(ChannelVideoPlayer.type, 'ChannelVideoPlayer#views is deprecated. Please use ChannelVideoPlayer#view_count instead.');
    return this.view_count;
  }

  /**
   * @deprecated
   * This will be removed in a future release.
   * Please use {@link ChannelVideoPlayer.published_time} instead.
   */
  get published(): Text {
    Log.warnOnce(ChannelVideoPlayer.type, 'ChannelVideoPlayer#published is deprecated. Please use ChannelVideoPlayer#published_time instead.');
    return this.published_time;
  }
}