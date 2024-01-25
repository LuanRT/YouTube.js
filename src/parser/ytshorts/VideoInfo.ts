import { Parser, ContinuationCommand } from '../index.js';
import { InnertubeError } from '../../utils/Utils.js';
import { Reel } from '../../core/endpoints/index.js';

import type NavigationEndpoint from '../classes/NavigationEndpoint.js';
import type PlayerOverlay from '../classes/PlayerOverlay.js';
import type { ApiResponse, Actions } from '../../core/index.js';
import type { ObservedArray, YTNode } from '../helpers.js';

class VideoInfo {
  #watch_next_continuation?: ContinuationCommand;
  #actions: Actions;

  basic_info;
  watch_next_feed?: ObservedArray<YTNode>;
  current_video_endpoint?: NavigationEndpoint;
  player_overlays?: PlayerOverlay;

  constructor(data: [ApiResponse, ApiResponse], actions: Actions) {
    this.#actions = actions;

    const info = Parser.parseResponse(data[0].data);

    const watch_next = Parser.parseResponse(data[1].data);

    this.basic_info = info.video_details;

    this.watch_next_feed = watch_next.entries?.array();
    this.#watch_next_continuation = watch_next.continuation_endpoint?.as(ContinuationCommand);
  }

  /**
   * Retrieves watch next feed continuation.
   */
  async getWatchNextContinuation(): Promise<VideoInfo> {
    if (!this.#watch_next_continuation)
      throw new InnertubeError('Watch next feed continuation not found');

    const response = await this.#actions.execute(Reel.WatchSequenceEndpoint.PATH, Reel.WatchSequenceEndpoint.build({
      sequenceParams: this.#watch_next_continuation.token
    }));

    if (!response.success) {
      throw new InnertubeError('Continue failed ', response.status_code);
    }

    const parsed = Parser.parseResponse(response.data);

    this.watch_next_feed = parsed.entries?.array();
    this.#watch_next_continuation = parsed.continuation_endpoint?.as(ContinuationCommand);

    return this;
  }
}

export default VideoInfo;