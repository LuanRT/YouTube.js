import { MediaInfo } from '../../core/mixins/index.ts';
import ItemSection from '../classes/ItemSection.ts';
import PlayerOverlay from '../classes/PlayerOverlay.ts';
import SlimVideoMetadata from '../classes/SlimVideoMetadata.ts';
import TwoColumnWatchNextResults from '../classes/TwoColumnWatchNextResults.ts';

import type { ApiResponse, Actions } from '../../core/index.ts';
import type { ObservedArray, YTNode } from '../helpers.ts';
import type NavigationEndpoint from '../classes/NavigationEndpoint.ts';

export default class VideoInfo extends MediaInfo {
  public slim_video_metadata?: SlimVideoMetadata;
  public watch_next_feed?: ObservedArray<YTNode>;
  public current_video_endpoint?: NavigationEndpoint;
  public player_overlays?: PlayerOverlay;

  constructor(data: [ApiResponse, ApiResponse?], actions: Actions, cpn: string) {
    super(data, actions, cpn);

    const next = this.page[1];

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
}