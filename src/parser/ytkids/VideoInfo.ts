import ItemSection from '../classes/ItemSection.js';
import type NavigationEndpoint from '../classes/NavigationEndpoint.js';
import PlayerOverlay from '../classes/PlayerOverlay.js';
import SlimVideoMetadata from '../classes/SlimVideoMetadata.js';
import TwoColumnWatchNextResults from '../classes/TwoColumnWatchNextResults.js';

import type Actions from '../../core/Actions.js';
import type { ApiResponse } from '../../core/Actions.js';
import type { ObservedArray, YTNode } from '../helpers.js';
import { MediaInfo } from '../../core/mixins/index.js';

class VideoInfo extends MediaInfo {
  basic_info;
  captions;

  slim_video_metadata?: SlimVideoMetadata;
  watch_next_feed?: ObservedArray<YTNode>;
  current_video_endpoint?: NavigationEndpoint;
  player_overlays?: PlayerOverlay;

  constructor(data: [ApiResponse, ApiResponse?], actions: Actions, cpn: string) {
    super(data, actions, cpn);

    const [ info, next ] = this.page;

    this.basic_info = info.video_details;

    this.captions = info.captions;

    const two_col = next?.contents?.item().as(TwoColumnWatchNextResults);

    const results = two_col?.results;
    const secondary_results = two_col?.secondary_results;

    if (results && secondary_results) {
      this.slim_video_metadata = results.firstOfType(ItemSection)?.contents?.firstOfType(SlimVideoMetadata);
      this.watch_next_feed = secondary_results.firstOfType(ItemSection)?.contents || secondary_results;
      this.current_video_endpoint = next?.current_video_endpoint;
      this.player_overlays = next?.player_overlays?.item().as(PlayerOverlay);
    }
  }

  /**
 * Adds video to the watch history.
 */
  async addToWatchHistory(): Promise<Response> {
    return super.addToWatchHistory();
  }
}

export default VideoInfo;