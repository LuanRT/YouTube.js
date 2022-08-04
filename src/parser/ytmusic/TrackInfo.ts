import Parser, { ParsedResponse } from '..';
import Actions, { AxioslikeResponse } from '../../core/Actions';
import { InnertubeError } from '../../utils/Utils';

import Tab from '../classes/Tab';
import Tabbed from '../classes/Tabbed';
import WatchNextTabbedResults from '../classes/WatchNextTabbedResults';
import SingleColumnMusicWatchNextResults from '../classes/SingleColumnMusicWatchNextResults';
import MicroformatData from '../classes/MicroformatData';
import PlayerOverlay from '../classes/PlayerOverlay';

// TODO: add a way to get specific tabs
class TrackInfo {
  #page: [ ParsedResponse, ParsedResponse? ];
  #actions: Actions;

  basic_info;
  streaming_data;
  playability_status;
  storyboards;
  endscreen;

  tabs;
  current_video_endpoint;
  player_overlays;

  constructor(data: [AxioslikeResponse, AxioslikeResponse?], actions: Actions) {
    this.#actions = actions;

    const info = Parser.parseResponse(data[0].data);
    const next = data?.[1]?.data ? Parser.parseResponse(data[1].data) : undefined;

    this.#page = [ info, next ];

    if (info.playability_status?.status === 'ERROR')
      throw new InnertubeError('This video is unavailable', info.playability_status);

    if (!info.microformat?.is(MicroformatData))
      throw new InnertubeError('Invalid microformat', info.microformat);

    this.basic_info = {
      ...info.video_details,
      ...{
        description: info.microformat?.description,
        is_unlisted: info.microformat?.is_unlisted,
        is_family_safe: info.microformat?.is_family_safe,
        url_canonical: info.microformat?.url_canonical,
        tags: info.microformat?.tags
      }
    };

    this.streaming_data = info.streaming_data;
    this.playability_status = info.playability_status;
    this.storyboards = info.storyboards;
    this.endscreen = info.endscreen;

    if (next) {
      const single_col = next.contents.item().as(SingleColumnMusicWatchNextResults);
      const tabbed_results = single_col.contents.item().as(Tabbed).contents.item().as(WatchNextTabbedResults);

      this.tabs = tabbed_results.tabs.array().as(Tab);
      this.current_video_endpoint = next.current_video_endpoint;

      // TODO: update PlayerOverlay, YTMusic's is a little bit different.
      this.player_overlays = next.player_overlays.item().as(PlayerOverlay);
    }
  }

  get page() {
    return this.#page;
  }
}

export default TrackInfo;