import Parser, { ParsedResponse } from '..';

import ItemSection from '../classes/ItemSection';
import NavigationEndpoint from '../classes/NavigationEndpoint';
import PlayerOverlay from '../classes/PlayerOverlay';
import SlimVideoMetadata from '../classes/SlimVideoMetadata';
import TwoColumnWatchNextResults from '../classes/TwoColumnWatchNextResults';

import type Format from '../classes/misc/Format';
import type Actions from '../../core/Actions';
import type { ApiResponse } from '../../core/Actions';
import type { ObservedArray, YTNode } from '../helpers';

import { Constants } from '../../utils';
import { InnertubeError } from '../../utils/Utils';

import FormatUtils, { DownloadOptions, FormatOptions, URLTransformer } from '../../utils/FormatUtils';

class VideoInfo {
  #page: [ParsedResponse, ParsedResponse?];
  #actions: Actions;
  #cpn: string;

  basic_info;
  streaming_data;
  playability_status;

  #playback_tracking;

  slim_video_metadata?: SlimVideoMetadata | null;
  watch_next_feed?: ObservedArray<YTNode> | null;
  current_video_endpoint?: NavigationEndpoint | null;
  player_overlays?: PlayerOverlay;

  constructor(data: [ApiResponse, ApiResponse?], actions: Actions, cpn: string) {
    this.#actions = actions;

    const info = Parser.parseResponse(data[0].data);
    const next = data?.[1]?.data ? Parser.parseResponse(data[1].data) : undefined;

    this.#page = [ info, next ];
    this.#cpn = cpn;

    if (info.playability_status?.status === 'ERROR')
      throw new InnertubeError('This video is unavailable', info.playability_status);

    this.basic_info = info.video_details;

    this.streaming_data = info.streaming_data;
    this.playability_status = info.playability_status;

    this.#playback_tracking = info.playback_tracking;

    const two_col = next?.contents.item().as(TwoColumnWatchNextResults);

    const results = two_col?.results;
    const secondary_results = two_col?.secondary_results;

    if (results && secondary_results) {
      this.slim_video_metadata = results.firstOfType(ItemSection)?.contents?.firstOfType(SlimVideoMetadata);
      this.watch_next_feed = secondary_results.firstOfType(ItemSection)?.contents || secondary_results;
      this.current_video_endpoint = next?.current_video_endpoint;
      this.player_overlays = next?.player_overlays.item().as(PlayerOverlay);
    }
  }

  /**
   * Generates a DASH manifest from the streaming data.
   * @param url_transformer - Function to transform the URLs.
   * @returns DASH manifest
   */
  toDash(url_transformer: URLTransformer = (url) => url): string {
    return FormatUtils.toDash(this.streaming_data, url_transformer, this.#cpn, this.#actions.session.player);
  }

  /**
   * Selects the format that best matches the given options.
   * @param options - Options
   */
  chooseFormat(options: FormatOptions): Format {
    return FormatUtils.chooseFormat(options, this.streaming_data);
  }

  /**
   * Downloads the video.
   * @param options - Download options.
   */
  async download(options: DownloadOptions = {}): Promise<ReadableStream<Uint8Array>> {
    return FormatUtils.download(options, this.#actions, this.playability_status, this.streaming_data, this.#actions.session.player, this.cpn);
  }

  /**
 * Adds video to the watch history.
 */
  async addToWatchHistory(): Promise<Response> {
    if (!this.#playback_tracking)
      throw new InnertubeError('Playback tracking not available');

    const url_params = {
      cpn: this.#cpn,
      fmt: 251,
      rtn: 0,
      rt: 0
    };

    const url = this.#playback_tracking.videostats_playback_url.replace('https://s.', 'https://www.');

    const response = await this.#actions.stats(url, {
      client_name: Constants.CLIENTS.WEB.NAME,
      client_version: Constants.CLIENTS.WEB.VERSION
    }, url_params);

    return response;
  }

  /**
 * Actions instance.
 */
  get actions(): Actions {
    return this.#actions;
  }

  /**
   * Content Playback Nonce.
   */
  get cpn(): string | undefined {
    return this.#cpn;
  }

  get page(): [ParsedResponse, ParsedResponse?] {
    return this.#page;
  }
}

export default VideoInfo;