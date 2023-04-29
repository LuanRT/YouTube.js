import ItemSection from '../classes/ItemSection.ts';
import type NavigationEndpoint from '../classes/NavigationEndpoint.ts';
import PlayerOverlay from '../classes/PlayerOverlay.ts';
import SlimVideoMetadata from '../classes/SlimVideoMetadata.ts';
import TwoColumnWatchNextResults from '../classes/TwoColumnWatchNextResults.ts';

import type Actions from '../../core/Actions.ts';
import type { ApiResponse } from '../../core/Actions.ts';
import type { ObservedArray, YTNode } from '../helpers.ts';
import { MediaInfo } from '../../core/mixins/index.ts';

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