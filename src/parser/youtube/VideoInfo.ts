import { InnertubeError } from '../../utils/Utils.js';
import { MediaInfo } from '../../core/mixins/index.js';

import ChipCloud from '../classes/ChipCloud.js';
import ChipCloudChip from '../classes/ChipCloudChip.js';
import CommentsEntryPointHeader from '../classes/comments/CommentsEntryPointHeader.js';
import ContinuationItem from '../classes/ContinuationItem.js';
import ItemSection from '../classes/ItemSection.js';
import LiveChat from '../classes/LiveChat.js';
import MerchandiseShelf from '../classes/MerchandiseShelf.js';
import PlayerMicroformat from '../classes/PlayerMicroformat.js';
import PlayerOverlay from '../classes/PlayerOverlay.js';
import RelatedChipCloud from '../classes/RelatedChipCloud.js';
import RichMetadata from '../classes/RichMetadata.js';
import RichMetadataRow from '../classes/RichMetadataRow.js';
import SegmentedLikeDislikeButton from '../classes/SegmentedLikeDislikeButton.js';
import SegmentedLikeDislikeButtonView from '../classes/SegmentedLikeDislikeButtonView.js';
import ToggleButton from '../classes/ToggleButton.js';
import TwoColumnWatchNextResults from '../classes/TwoColumnWatchNextResults.js';
import VideoPrimaryInfo from '../classes/VideoPrimaryInfo.js';
import VideoSecondaryInfo from '../classes/VideoSecondaryInfo.js';
import NavigationEndpoint from '../classes/NavigationEndpoint.js';
import PlayerLegacyDesktopYpcTrailer from '../classes/PlayerLegacyDesktopYpcTrailer.js';
import YpcTrailer from '../classes/YpcTrailer.js';
import StructuredDescriptionContent from '../classes/StructuredDescriptionContent.js';
import VideoDescriptionMusicSection from '../classes/VideoDescriptionMusicSection.js';
import LiveChatWrap from './LiveChat.js';

import type { RawNode } from '../index.js';
import { ReloadContinuationItemsCommand } from '../index.js';
import AppendContinuationItemsAction from '../classes/actions/AppendContinuationItemsAction.js';

import type { Actions, ApiResponse } from '../../core/index.js';
import type { ObservedArray, YTNode } from '../helpers.js';

export default class VideoInfo extends MediaInfo {
  public primary_info?: VideoPrimaryInfo | null;
  public secondary_info?: VideoSecondaryInfo | null;
  public playlist?: TwoColumnWatchNextResults['playlist'];
  public game_info?;
  public merchandise?: MerchandiseShelf | null;
  public related_chip_cloud?: ChipCloud | null;
  public watch_next_feed?: ObservedArray<YTNode> | null;
  public player_overlays?: PlayerOverlay | null;
  public comments_entry_point_header?: CommentsEntryPointHeader | null;
  public livechat?: LiveChat | null;
  public autoplay?: TwoColumnWatchNextResults['autoplay'];

  #watch_next_continuation?: ContinuationItem;
  
  constructor(data: [ApiResponse, ApiResponse?], actions: Actions, cpn: string) {
    super(data, actions, cpn);

    const [ info, next ] = this.page;

    if (this.streaming_data) {
      const default_audio_track = this.streaming_data.adaptive_formats.find((format) => format.audio_track?.audio_is_default);
      if (default_audio_track) {
        // The combined formats only exist for the default language, even for videos with multiple audio tracks
        // So we can copy the language from the default audio track to the combined formats
        this.streaming_data.formats.forEach((format) => format.language = default_audio_track.language);
      } else if (this.captions?.caption_tracks && this.captions?.caption_tracks.length > 0) {
        // For videos with a single audio track and captions, we can use the captions to figure out the language of the audio and combined formats
        const auto_generated_caption_track = this.captions.caption_tracks.find((caption) => caption.kind === 'asr');
        const language_code = auto_generated_caption_track?.language_code;

        this.streaming_data.adaptive_formats.forEach((format) => {
          if (format.has_audio) {
            format.language = language_code;
          }
        });
        this.streaming_data.formats.forEach((format) => format.language = language_code);
      }
    }

    const two_col = next?.contents?.item().as(TwoColumnWatchNextResults);

    const results = two_col?.results;
    const secondary_results = two_col?.secondary_results;

    if (results && secondary_results) {
      if (info.microformat?.is(PlayerMicroformat) && info.microformat?.category === 'Gaming') {
        const row = results.firstOfType(VideoSecondaryInfo)?.metadata?.rows?.firstOfType(RichMetadataRow);
        if (row?.is(RichMetadataRow)) {
          this.game_info = {
            title: row?.contents?.firstOfType(RichMetadata)?.title,
            release_year: row?.contents?.firstOfType(RichMetadata)?.subtitle
          };
        }
      }

      this.primary_info = results.firstOfType(VideoPrimaryInfo);
      this.secondary_info = results.firstOfType(VideoSecondaryInfo);
      this.merchandise = results.firstOfType(MerchandiseShelf);
      this.related_chip_cloud = secondary_results.firstOfType(RelatedChipCloud)?.content.as(ChipCloud);

      if (two_col?.playlist) {
        this.playlist = two_col.playlist;
      }

      this.watch_next_feed = secondary_results.firstOfType(ItemSection)?.contents || secondary_results;

      if (this.watch_next_feed && Array.isArray(this.watch_next_feed) && this.watch_next_feed.at(-1)?.is(ContinuationItem))
        this.#watch_next_continuation = this.watch_next_feed.pop()?.as(ContinuationItem);

      this.player_overlays = next?.player_overlays?.item().as(PlayerOverlay);

      if (two_col?.autoplay) {
        this.autoplay = two_col.autoplay;
      }

      const segmented_like_dislike_button = this.primary_info?.menu?.top_level_buttons.firstOfType(SegmentedLikeDislikeButton);

      if (segmented_like_dislike_button?.like_button?.is(ToggleButton) && segmented_like_dislike_button?.dislike_button?.is(ToggleButton)) {
        this.basic_info.like_count = segmented_like_dislike_button?.like_button?.like_count;
        this.basic_info.is_liked = segmented_like_dislike_button?.like_button?.is_toggled;
        this.basic_info.is_disliked = segmented_like_dislike_button?.dislike_button?.is_toggled;
      }

      const segmented_like_dislike_button_view = this.primary_info?.menu?.top_level_buttons.firstOfType(SegmentedLikeDislikeButtonView);
      if (segmented_like_dislike_button_view) {
        this.basic_info.like_count = segmented_like_dislike_button_view.like_count;

        if (segmented_like_dislike_button_view.like_button) {
          const like_status = segmented_like_dislike_button_view.like_button.like_status_entity.like_status;
          this.basic_info.is_liked = like_status === 'LIKE';
          this.basic_info.is_disliked = like_status === 'DISLIKE';
        }
      }

      const comments_entry_point = results.get({ target_id: 'comments-entry-point' })?.as(ItemSection);

      this.comments_entry_point_header = comments_entry_point?.contents?.firstOfType(CommentsEntryPointHeader);
      this.livechat = next?.contents_memo?.getType(LiveChat)[0];
    }
  }

  /**
   * Applies given filter to the watch next feed. Use {@link filters} to get available filters.
   * @param target_filter - Filter to apply.
   */
  async selectFilter(target_filter: string | ChipCloudChip | undefined): Promise<VideoInfo> {
    if (!this.related_chip_cloud)
      throw new InnertubeError('Chip cloud not found, cannot apply filter');

    let cloud_chip: ChipCloudChip;

    if (typeof target_filter === 'string') {
      const filter = this.related_chip_cloud?.chips?.get({ text: target_filter });

      if (!filter)
        throw new InnertubeError('Invalid filter', { available_filters: this.filters });

      cloud_chip = filter;
    } else if (target_filter?.is(ChipCloudChip)) {
      cloud_chip = target_filter;
    } else {
      throw new InnertubeError('Invalid cloud chip', target_filter);
    }

    if (cloud_chip.is_selected) return this;

    const response = await cloud_chip.endpoint?.call(this.actions, { parse: true });
    const data = response?.on_response_received_endpoints?.get({ target_id: 'watch-next-feed' });

    this.watch_next_feed = data?.as(AppendContinuationItemsAction, ReloadContinuationItemsCommand).contents;

    return this;
  }

  /**
   * Adds video to the watch history.
   */
  async addToWatchHistory(): Promise<Response> {
    return super.addToWatchHistory();
  }

  /**
   * Retrieves watch next feed continuation.
   */
  async getWatchNextContinuation(): Promise<VideoInfo> {
    if (!this.#watch_next_continuation)
      throw new InnertubeError('Watch next feed continuation not found');

    const response = await this.#watch_next_continuation?.endpoint.call(this.actions, { parse: true });
    const data = response?.on_response_received_endpoints?.get({ type: 'AppendContinuationItemsAction' });

    if (!data)
      throw new InnertubeError('AppendContinuationItemsAction not found');

    this.watch_next_feed = data?.as(AppendContinuationItemsAction, ReloadContinuationItemsCommand).contents;
    if (this.watch_next_feed?.at(-1)?.is(ContinuationItem)) {
      this.#watch_next_continuation = this.watch_next_feed.pop()?.as(ContinuationItem);
    } else {
      this.#watch_next_continuation = undefined;
    }

    return this;
  }

  /**
   * Likes the video.
   */
  async like(): Promise<ApiResponse> {
    const segmented_like_dislike_button_view = this.primary_info?.menu?.top_level_buttons.firstOfType(SegmentedLikeDislikeButtonView);

    if (segmented_like_dislike_button_view) {
      const button = segmented_like_dislike_button_view?.like_button?.toggle_button;

      if (!button || !button.default_button || !segmented_like_dislike_button_view.like_button)
        throw new InnertubeError('Like button not found', { video_id: this.basic_info.id });

      const like_status = segmented_like_dislike_button_view.like_button.like_status_entity.like_status;

      if (like_status === 'LIKE')
        throw new InnertubeError('This video is already liked', { video_id: this.basic_info.id });

      if (!button.default_button.on_tap)
        throw new InnertubeError('onTap command not found', { video_id: this.basic_info.id });
      
      const endpoint = new NavigationEndpoint(button.default_button.on_tap.payload.commands.find((cmd: RawNode) => cmd.innertubeCommand));

      return await endpoint.call(this.actions);
    }

    const segmented_like_dislike_button = this.primary_info?.menu?.top_level_buttons.firstOfType(SegmentedLikeDislikeButton);
    const button = segmented_like_dislike_button?.like_button;

    if (!button)
      throw new InnertubeError('Like button not found', { video_id: this.basic_info.id });

    if (!button.is(ToggleButton))
      throw new InnertubeError('Like button is not a toggle button. This action is likely disabled for this video.', { video_id: this.basic_info.id });

    if (button.is_toggled)
      throw new InnertubeError('This video is already liked', { video_id: this.basic_info.id });

    return await button.endpoint.call(this.actions);
  }

  /**
   * Dislikes the video.
   */
  async dislike(): Promise<ApiResponse> {
    const segmented_like_dislike_button_view = this.primary_info?.menu?.top_level_buttons.firstOfType(SegmentedLikeDislikeButtonView);

    if (segmented_like_dislike_button_view) {
      const button = segmented_like_dislike_button_view?.dislike_button?.toggle_button;

      if (!button || !button.default_button || !segmented_like_dislike_button_view.dislike_button || !segmented_like_dislike_button_view.like_button)
        throw new InnertubeError('Dislike button not found', { video_id: this.basic_info.id });

      const like_status = segmented_like_dislike_button_view.like_button.like_status_entity.like_status;

      if (like_status === 'DISLIKE')
        throw new InnertubeError('This video is already disliked', { video_id: this.basic_info.id });

      if (!button.default_button.on_tap)
        throw new InnertubeError('onTap command not found', { video_id: this.basic_info.id });
      
      const endpoint = new NavigationEndpoint(button.default_button.on_tap.payload.commands.find((cmd: RawNode) => cmd.innertubeCommand));

      return await endpoint.call(this.actions);
    }

    const segmented_like_dislike_button = this.primary_info?.menu?.top_level_buttons.firstOfType(SegmentedLikeDislikeButton);
    const button = segmented_like_dislike_button?.dislike_button;

    if (!button)
      throw new InnertubeError('Dislike button not found', { video_id: this.basic_info.id });

    if (!button.is(ToggleButton))
      throw new InnertubeError('Dislike button is not a toggle button. This action is likely disabled for this video.', { video_id: this.basic_info.id });

    if (button.is_toggled)
      throw new InnertubeError('This video is already disliked', { video_id: this.basic_info.id });

    return await button.endpoint.call(this.actions);
  }

  /**
   * Removes like/dislike.
   */
  async removeRating(): Promise<ApiResponse> {
    let button;

    const segmented_like_dislike_button_view = this.primary_info?.menu?.top_level_buttons.firstOfType(SegmentedLikeDislikeButtonView);

    if (segmented_like_dislike_button_view) {
      const toggle_button = segmented_like_dislike_button_view?.like_button?.toggle_button;

      if (!toggle_button || !toggle_button.default_button || !segmented_like_dislike_button_view.like_button)
        throw new InnertubeError('Like button not found', { video_id: this.basic_info.id });

      const like_status = segmented_like_dislike_button_view.like_button.like_status_entity.like_status;

      if (like_status === 'LIKE') {
        button = segmented_like_dislike_button_view?.like_button?.toggle_button;
      } else if (like_status === 'DISLIKE') {
        button = segmented_like_dislike_button_view?.dislike_button?.toggle_button;
      } else {
        throw new InnertubeError('This video is not liked/disliked', { video_id: this.basic_info.id });
      }

      if (!button || !button.toggled_button)
        throw new InnertubeError('Like/Dislike button not found', { video_id: this.basic_info.id });
      
      if (!button.toggled_button.on_tap)
        throw new InnertubeError('onTap command not found', { video_id: this.basic_info.id });
      
      const endpoint = new NavigationEndpoint(button.toggled_button.on_tap.payload.commands.find((cmd: RawNode) => cmd.innertubeCommand));

      return await endpoint.call(this.actions);
    }

    const segmented_like_dislike_button = this.primary_info?.menu?.top_level_buttons.firstOfType(SegmentedLikeDislikeButton);

    const like_button = segmented_like_dislike_button?.like_button;
    const dislike_button = segmented_like_dislike_button?.dislike_button;

    if (!like_button?.is(ToggleButton) || !dislike_button?.is(ToggleButton))
      throw new InnertubeError('Like/Dislike button is not a toggle button. This action is likely disabled for this video.', { video_id: this.basic_info.id });

    if (like_button?.is_toggled) {
      button = like_button;
    } else if (dislike_button?.is_toggled) {
      button = dislike_button;
    }

    if (!button)
      throw new InnertubeError('This video is not liked/disliked', { video_id: this.basic_info.id });

    return await button.toggled_endpoint.call(this.actions);
  }

  /**
   * Retrieves Live Chat if available.
   */
  getLiveChat(): LiveChatWrap {
    if (!this.livechat)
      throw new InnertubeError('Live Chat is not available', { video_id: this.basic_info.id });
    return new LiveChatWrap(this);
  }

  /**
   * Retrieves trailer info if available (typically for non-purchased movies or films).
   * @returns `VideoInfo` for the trailer, or `null` if none.
   */
  getTrailerInfo(): VideoInfo | null {
    if (this.has_trailer && this.playability_status?.error_screen) {
      let player_response;
      if (this.playability_status.error_screen.is(PlayerLegacyDesktopYpcTrailer)) {
        player_response = this.playability_status.error_screen.trailer?.player_response;
      } else if (this.playability_status.error_screen.is(YpcTrailer)) {
        player_response = this.playability_status.error_screen.player_response;
      }

      if (player_response) {
        return new VideoInfo([ { data: player_response } as ApiResponse ], this.actions, this.cpn);
      }
    }
    return null;
  }

  /**
   * Watch next feed filters.
   */
  get filters(): string[] {
    return this.related_chip_cloud?.chips?.map((chip) => chip.text?.toString()) || [];
  }

  /**
   * Checks if continuation is available for the watch next feed.
   */
  get wn_has_continuation(): boolean {
    return !!this.#watch_next_continuation;
  }

  /**
   * Gets the endpoint of the autoplay video
   */
  get autoplay_video_endpoint(): NavigationEndpoint | null {
    return this.autoplay?.sets?.[0]?.autoplay_video || null;
  }

  /**
   * Checks if trailer is available.
   */
  get has_trailer(): boolean {
    return !!this.playability_status?.error_screen?.is(PlayerLegacyDesktopYpcTrailer, YpcTrailer);
  }

  /**
   * Get songs used in the video.
   */
  get music_tracks() {
    // @TODO: Refactor this.
    const description_content = this.page[1]?.engagement_panels?.filter((panel) => panel.content?.is(StructuredDescriptionContent));
    if (description_content !== undefined && description_content.length > 0) {
      const music_section = description_content[0].content?.as(StructuredDescriptionContent)?.items?.filterType(VideoDescriptionMusicSection);
      if (music_section !== undefined && music_section.length > 0) {
        return music_section[0].carousel_lockups?.map((lookup) => {
          let song: string | undefined;
          let artist: string | undefined;
          let album: string | undefined;
          let license: string | undefined;
          let videoId: string | undefined;
          let channelId: string | undefined;

          // If the song isn't in the video_lockup, it should be in the info_rows
          song = lookup.video_lockup?.title?.toString();
          // If the video id isn't in the video_lockup, it should be in the info_rows
          videoId = lookup.video_lockup?.endpoint?.payload.videoId;
          for (let i = 0; i < lookup.info_rows.length; i++) {
            const info_row = lookup.info_rows[i];
            if (info_row.info_row_expand_status_key === undefined) {
              if (song === undefined) {
                song = info_row.default_metadata?.toString() || info_row.expanded_metadata?.toString();
                if (videoId === undefined) {
                  const endpoint = info_row.default_metadata?.endpoint || info_row.expanded_metadata?.endpoint;
                  videoId = endpoint?.payload?.videoId;
                }
              } else {
                album = info_row.default_metadata?.toString() || info_row.expanded_metadata?.toString();
              }
            } else {
              if (info_row.info_row_expand_status_key?.indexOf('structured-description-music-section-artists-row-state-id') !== -1) {
                artist = info_row.default_metadata?.toString() || info_row.expanded_metadata?.toString();
                if (channelId === undefined) {
                  const endpoint = info_row.default_metadata?.endpoint || info_row.expanded_metadata?.endpoint;
                  channelId = endpoint?.payload?.browseId;
                }
              }
              if (info_row.info_row_expand_status_key?.indexOf('structured-description-music-section-licenses-row-state-id') !== -1) {
                license = info_row.default_metadata?.toString() || info_row.expanded_metadata?.toString();
              }
            }
          }
          return { song, artist, album, license, videoId, channelId };
        });
      }
    }
    return [];
  }
}