import type { ApiResponse } from '../Actions.js';
import type Actions from '../Actions.js';
import * as Constants from '../../utils/Constants.js';
import type { DownloadOptions, FormatFilter, FormatOptions, URLTransformer } from '../../types/FormatUtils.js';
import * as FormatUtils from '../../utils/FormatUtils.js';
import { InnertubeError } from '../../utils/Utils.js';
import type Format from '../../parser/classes/misc/Format.js';
import type { INextResponse, IPlayerResponse } from '../../parser/index.js';
import Parser from '../../parser/index.js';
import type { DashOptions } from '../../types/DashOptions.js';
import PlayerStoryboardSpec from '../../parser/classes/PlayerStoryboardSpec.js';
import { getStreamingInfo } from '../../utils/StreamingInfo.js';

export default class MediaInfo {
  #page: [IPlayerResponse, INextResponse?];
  #actions: Actions;
  #cpn: string;
  #playback_tracking;
  streaming_data;
  playability_status;

  constructor(data: [ApiResponse, ApiResponse?], actions: Actions, cpn: string) {
    this.#actions = actions;

    const info = Parser.parseResponse<IPlayerResponse>(data[0].data);
    const next = data?.[1]?.data ? Parser.parseResponse<INextResponse>(data[1].data) : undefined;

    this.#page = [ info, next ];
    this.#cpn = cpn;

    if (info.playability_status?.status === 'ERROR')
      throw new InnertubeError('This video is unavailable', info.playability_status);

    this.streaming_data = info.streaming_data;
    this.playability_status = info.playability_status;
    this.#playback_tracking = info.playback_tracking;
  }

  /**
   * Generates a DASH manifest from the streaming data.
   * @param url_transformer - Function to transform the URLs.
   * @param format_filter - Function to filter the formats.
   * @param options - Additional options to customise the manifest generation
   * @returns DASH manifest
   */
  async toDash(url_transformer?: URLTransformer, format_filter?: FormatFilter, options: DashOptions = { include_thumbnails: false }): Promise<string> {
    let storyboards;

    if (options.include_thumbnails && this.#page[0].storyboards?.is(PlayerStoryboardSpec)) {
      storyboards = this.#page[0].storyboards;
    }

    return FormatUtils.toDash(this.streaming_data, url_transformer, format_filter, this.#cpn, this.#actions.session.player, this.#actions, storyboards);
  }

  /**
   * Get a cleaned up representation of the adaptive_formats
   */
  getStreamingInfo(url_transformer?: URLTransformer, format_filter?: FormatFilter) {
    return getStreamingInfo(
      this.streaming_data,
      url_transformer,
      format_filter,
      this.cpn,
      this.#actions.session.player,
      this.#actions,
      this.#page[0].storyboards?.is(PlayerStoryboardSpec) ? this.#page[0].storyboards : undefined
    );
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
  async addToWatchHistory(client_name = Constants.CLIENTS.WEB.NAME, client_version = Constants.CLIENTS.WEB.VERSION, replacement = 'https://www.'): Promise<Response> {
    if (!this.#playback_tracking)
      throw new InnertubeError('Playback tracking not available');

    const url_params = {
      cpn: this.#cpn,
      fmt: 251,
      rtn: 0,
      rt: 0
    };

    const url = this.#playback_tracking.videostats_playback_url.replace('https://s.', replacement);

    const response = await this.#actions.stats(url, {
      client_name,
      client_version
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
  get cpn(): string {
    return this.#cpn;
  }

  /**
   * Original parsed InnerTube response.
   */
  get page(): [IPlayerResponse, INextResponse?] {
    return this.#page;
  }
}