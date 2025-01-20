import { Constants, FormatUtils } from '../../utils/index.js';
import { InnertubeError } from '../../utils/Utils.js';
import { getStreamingInfo } from '../../utils/StreamingInfo.js';

import type {
  INextResponse,
  IPlayabilityStatus,
  IPlaybackTracking,
  IPlayerConfig,
  IPlayerResponse,
  IStreamingData
} from '../../parser/index.js';

import { Parser } from '../../parser/index.js';
import { TranscriptInfo } from '../../parser/youtube/index.js';
import ContinuationItem from '../../parser/classes/ContinuationItem.js';
import PlayerMicroformat from '../../parser/classes/PlayerMicroformat.js';
import MicroformatData from '../../parser/classes/MicroformatData.js';

import type { Actions, ApiResponse } from '../index.js';
import type { DownloadOptions, FormatFilter, FormatOptions, URLTransformer } from '../../types/index.js';
import type Format from '../../parser/classes/misc/Format.js';
import type { DashOptions } from '../../types/DashOptions.js';
import type { ObservedArray } from '../../parser/helpers.js';

import type CardCollection from '../../parser/classes/CardCollection.js';
import type Endscreen from '../../parser/classes/Endscreen.js';
import type PlayerAnnotationsExpanded from '../../parser/classes/PlayerAnnotationsExpanded.js';
import type PlayerCaptionsTracklist from '../../parser/classes/PlayerCaptionsTracklist.js';
import type PlayerLiveStoryboardSpec from '../../parser/classes/PlayerLiveStoryboardSpec.js';
import type PlayerStoryboardSpec from '../../parser/classes/PlayerStoryboardSpec.js';

export default class MediaInfo {
  readonly #page: [IPlayerResponse, INextResponse?];
  readonly #actions: Actions;
  readonly #cpn: string;
  readonly #playback_tracking?: IPlaybackTracking;

  public basic_info;
  public annotations?: ObservedArray<PlayerAnnotationsExpanded>;
  public storyboards?: PlayerStoryboardSpec | PlayerLiveStoryboardSpec;
  public endscreen?: Endscreen;
  public captions?: PlayerCaptionsTracklist;
  public cards?: CardCollection;
  public streaming_data?: IStreamingData;
  public playability_status?: IPlayabilityStatus;
  public player_config?: IPlayerConfig;

  constructor(data: [ApiResponse, ApiResponse?], actions: Actions, cpn: string) {
    this.#actions = actions;

    const info = Parser.parseResponse<IPlayerResponse>(data[0].data.playerResponse ? data[0].data.playerResponse : data[0].data);
    const next = data[1]?.data ? Parser.parseResponse<INextResponse>(data[1].data) : undefined;

    this.#page = [ info, next ];
    this.#cpn = cpn;

    if (info.playability_status?.status === 'ERROR')
      throw new InnertubeError('This video is unavailable', info.playability_status);

    if (info.microformat && !info.microformat?.is(PlayerMicroformat, MicroformatData))
      throw new InnertubeError('Unsupported microformat', info.microformat);

    this.basic_info = { // This type is inferred so no need for an explicit type
      ...info.video_details,
      /**
       * Microformat is a bit redundant, so only
       * a few things there are interesting to us.
       */
      ...{
        embed: info.microformat?.is(PlayerMicroformat) ? info.microformat?.embed : null,
        channel: info.microformat?.is(PlayerMicroformat) ? info.microformat?.channel : null,
        is_unlisted: info.microformat?.is_unlisted,
        is_family_safe: info.microformat?.is_family_safe,
        category: info.microformat?.is(PlayerMicroformat) ? info.microformat?.category : null,
        has_ypc_metadata: info.microformat?.is(PlayerMicroformat) ? info.microformat?.has_ypc_metadata : null,
        start_timestamp: info.microformat?.is(PlayerMicroformat) ? info.microformat.start_timestamp : null,
        end_timestamp: info.microformat?.is(PlayerMicroformat) ? info.microformat.end_timestamp : null,
        view_count: info.microformat?.is(PlayerMicroformat) && isNaN(info.video_details?.view_count as number) ? info.microformat.view_count : info.video_details?.view_count,
        url_canonical: info.microformat?.is(MicroformatData) ? info.microformat?.url_canonical : null,
        tags: info.microformat?.is(MicroformatData) ? info.microformat?.tags : null
      },
      like_count: undefined as number | undefined,
      is_liked: undefined as boolean | undefined,
      is_disliked: undefined as boolean | undefined
    };

    this.annotations = info.annotations;
    this.storyboards = info.storyboards;
    this.endscreen = info.endscreen;
    this.captions = info.captions;
    this.cards = info.cards;
    this.streaming_data = info.streaming_data;
    this.playability_status = info.playability_status;
    this.player_config = info.player_config;
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
    const player_response = this.#page[0];

    if (player_response.video_details && (player_response.video_details.is_live)) {
      throw new InnertubeError('Generating DASH manifests for live videos is not supported. Please use the DASH and HLS manifests provided by YouTube in `streaming_data.dash_manifest_url` and `streaming_data.hls_manifest_url` instead.');
    }

    let storyboards;
    let captions;

    if (options.include_thumbnails && player_response.storyboards) {
      storyboards = player_response.storyboards;
    }

    if (typeof options.captions_format === 'string' && player_response.captions?.caption_tracks) {
      captions = player_response.captions.caption_tracks;
    }

    return FormatUtils.toDash(
      this.streaming_data,
      this.page[0].video_details?.is_post_live_dvr,
      url_transformer,
      format_filter,
      this.#cpn,
      this.#actions.session.player,
      this.#actions,
      storyboards,
      captions,
      options
    );
  }

  /**
   * Get a cleaned up representation of the adaptive_formats
   */
  getStreamingInfo(url_transformer?: URLTransformer, format_filter?: FormatFilter) {
    return getStreamingInfo(
      this.streaming_data,
      this.page[0].video_details?.is_post_live_dvr,
      url_transformer,
      format_filter,
      this.cpn,
      this.#actions.session.player,
      this.#actions,
      this.#page[0].storyboards ? this.#page[0].storyboards : undefined
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
    const player_response = this.#page[0];

    if (player_response.video_details && (player_response.video_details.is_live || player_response.video_details.is_post_live_dvr)) {
      throw new InnertubeError('Downloading is not supported for live and Post-Live-DVR videos, as they are split up into 5 second segments that are individual files, which require using a tool such as ffmpeg to stitch them together, so they cannot be returned in a single stream.');
    }

    return FormatUtils.download(options, this.#actions, this.playability_status, this.streaming_data, this.#actions.session.player, this.cpn);
  }

  /**
   * Retrieves the video's transcript.
   */
  async getTranscript(): Promise<TranscriptInfo> {
    const next_response = this.page[1];

    if (!next_response)
      throw new InnertubeError('Cannot get transcript from basic video info.');

    if (!next_response.engagement_panels)
      throw new InnertubeError('Engagement panels not found. Video likely has no transcript.');

    const transcript_panel = next_response.engagement_panels.get({
      panel_identifier: 'engagement-panel-searchable-transcript'
    });

    if (!transcript_panel)
      throw new InnertubeError('Transcript panel not found. Video likely has no transcript.');

    const transcript_continuation = transcript_panel.content?.as(ContinuationItem);

    if (!transcript_continuation)
      throw new InnertubeError('Transcript continuation not found.');

    const response = await transcript_continuation.endpoint.call(this.actions);

    return new TranscriptInfo(this.actions, response);
  }

  /**
   * Adds video to the watch history.
   */
  async addToWatchHistory(client_name: string = Constants.CLIENTS.WEB.NAME, client_version: string = Constants.CLIENTS.WEB.VERSION, replacement = 'https://www.'): Promise<Response> {
    if (!this.#playback_tracking)
      throw new InnertubeError('Playback tracking not available');

    const url_params = {
      cpn: this.#cpn,
      fmt: 251,
      rtn: 0,
      rt: 0
    };

    const url = this.#playback_tracking.videostats_playback_url.replace('https://s.', replacement);

    return await this.#actions.stats(url, {
      client_name,
      client_version
    }, url_params);
  }

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
   * Parsed InnerTube response.
   */
  get page(): [IPlayerResponse, INextResponse?] {
    return this.#page;
  }
}