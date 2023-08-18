import ChipCloud from '../classes/ChipCloud.ts';
import ChipCloudChip from '../classes/ChipCloudChip.ts';
import CommentsEntryPointHeader from '../classes/comments/CommentsEntryPointHeader.ts';
import ContinuationItem from '../classes/ContinuationItem.ts';
import ItemSection from '../classes/ItemSection.ts';
import LiveChat from '../classes/LiveChat.ts';
import MerchandiseShelf from '../classes/MerchandiseShelf.ts';
import MicroformatData from '../classes/MicroformatData.ts';
import PlayerMicroformat from '../classes/PlayerMicroformat.ts';
import PlayerOverlay from '../classes/PlayerOverlay.ts';
import RelatedChipCloud from '../classes/RelatedChipCloud.ts';
import RichMetadata from '../classes/RichMetadata.ts';
import RichMetadataRow from '../classes/RichMetadataRow.ts';
import SegmentedLikeDislikeButton from '../classes/SegmentedLikeDislikeButton.ts';
import ToggleButton from '../classes/ToggleButton.ts';
import TwoColumnWatchNextResults from '../classes/TwoColumnWatchNextResults.ts';
import VideoPrimaryInfo from '../classes/VideoPrimaryInfo.ts';
import VideoSecondaryInfo from '../classes/VideoSecondaryInfo.ts';
import LiveChatWrap from './LiveChat.ts';
import type NavigationEndpoint from '../classes/NavigationEndpoint.ts';
import PlayerLegacyDesktopYpcTrailer from '../classes/PlayerLegacyDesktopYpcTrailer.ts';

import type CardCollection from '../classes/CardCollection.ts';
import type Endscreen from '../classes/Endscreen.ts';
import type PlayerAnnotationsExpanded from '../classes/PlayerAnnotationsExpanded.ts';
import type PlayerCaptionsTracklist from '../classes/PlayerCaptionsTracklist.ts';
import type PlayerLiveStoryboardSpec from '../classes/PlayerLiveStoryboardSpec.ts';
import type PlayerStoryboardSpec from '../classes/PlayerStoryboardSpec.ts';

import type Actions from '../../core/Actions.ts';
import type { ApiResponse } from '../../core/Actions.ts';
import type { ObservedArray, YTNode } from '../helpers.ts';

import { InnertubeError } from '../../utils/Utils.ts';
import { MediaInfo } from '../../core/mixins/index.ts';
import StructuredDescriptionContent from '../classes/StructuredDescriptionContent.ts';
import { VideoDescriptionMusicSection } from '../nodes.ts';

class VideoInfo extends MediaInfo {
  #watch_next_continuation?: ContinuationItem;

  basic_info;
  annotations?: ObservedArray<PlayerAnnotationsExpanded>;
  storyboards?: PlayerStoryboardSpec | PlayerLiveStoryboardSpec;
  endscreen?: Endscreen;
  captions?: PlayerCaptionsTracklist;
  cards?: CardCollection;

  primary_info?: VideoPrimaryInfo | null;
  secondary_info?: VideoSecondaryInfo | null;
  playlist?;
  game_info?;
  merchandise?: MerchandiseShelf | null;
  related_chip_cloud?: ChipCloud | null;
  watch_next_feed?: ObservedArray<YTNode> | null;
  player_overlays?: PlayerOverlay | null;
  comments_entry_point_header?: CommentsEntryPointHeader | null;
  livechat?: LiveChat | null;
  autoplay?;

  /**
   * @param data - API response.
   * @param actions - Actions instance.
   * @param player - Player instance.
   * @param cpn - Client Playback Nonce.
   */
  constructor(data: [ApiResponse, ApiResponse?], actions: Actions, cpn: string) {
    super(data, actions, cpn);

    const [ info, next ] = this.page;

    if (info.microformat && !info.microformat?.is(PlayerMicroformat, MicroformatData))
      throw new InnertubeError('Invalid microformat', info.microformat);

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
        view_count: info.microformat?.is(PlayerMicroformat) && isNaN(info.video_details?.view_count as number) ? info.microformat.view_count : info.video_details?.view_count
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

    if (this.streaming_data) {
      const default_audio_track = this.streaming_data.adaptive_formats.find((format) => format.audio_track?.audio_is_default);
      if (default_audio_track) {
        // The combined formats only exist for the default language, even for videos with multiple audio tracks
        // So we can copy the language from the default audio track to the combined formats
        this.streaming_data.formats.forEach((format) => format.language = default_audio_track.language);
      } else if (typeof this.captions?.default_audio_track_index !== 'undefined' && this.captions?.audio_tracks && this.captions.caption_tracks) {
        // For videos with a single audio track and captions, we can use the captions to figure out the language of the audio and combined formats
        const audioTrack = this.captions.audio_tracks[this.captions.default_audio_track_index];
        const index = audioTrack.default_caption_track_index || 0;
        const language_code = this.captions.caption_tracks[index].language_code;

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

      const comments_entry_point = results.get({ target_id: 'comments-entry-point' })?.as(ItemSection);

      this.comments_entry_point_header = comments_entry_point?.contents?.firstOfType(CommentsEntryPointHeader);
      this.livechat = next?.contents_memo?.getType(LiveChat).first();
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

    this.watch_next_feed = data?.contents;

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
    const data = response?.on_response_received_endpoints?.get({ type: 'appendContinuationItemsAction' });

    if (!data)
      throw new InnertubeError('AppendContinuationItemsAction not found');

    this.watch_next_feed = data?.contents;
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
    const segmented_like_dislike_button = this.primary_info?.menu?.top_level_buttons.firstOfType(SegmentedLikeDislikeButton);
    const button = segmented_like_dislike_button?.like_button;

    if (!button)
      throw new InnertubeError('Like button not found', { video_id: this.basic_info.id });

    if (!button.is(ToggleButton))
      throw new InnertubeError('Like button is not a toggle button. This action is likely disabled for this video.', { video_id: this.basic_info.id });

    if (button.is_toggled)
      throw new InnertubeError('This video is already liked', { video_id: this.basic_info.id });

    const response = await button.endpoint.call(this.actions);

    return response;
  }

  /**
   * Dislikes the video.
   */
  async dislike(): Promise<ApiResponse> {
    const segmented_like_dislike_button = this.primary_info?.menu?.top_level_buttons.firstOfType(SegmentedLikeDislikeButton);
    const button = segmented_like_dislike_button?.dislike_button;

    if (!button)
      throw new InnertubeError('Dislike button not found', { video_id: this.basic_info.id });

    if (!button.is(ToggleButton))
      throw new InnertubeError('Dislike button is not a toggle button. This action is likely disabled for this video.', { video_id: this.basic_info.id });

    if (button.is_toggled)
      throw new InnertubeError('This video is already disliked', { video_id: this.basic_info.id });

    const response = await button.endpoint.call(this.actions);

    return response;
  }

  /**
   * Removes like/dislike.
   */
  async removeRating(): Promise<ApiResponse> {
    let button;

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

    const response = await button.toggled_endpoint.call(this.actions);

    return response;
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
    if (this.has_trailer) {
      const player_response = this.playability_status.error_screen?.as(PlayerLegacyDesktopYpcTrailer).trailer?.player_response;
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
    return !!this.playability_status.error_screen?.is(PlayerLegacyDesktopYpcTrailer);
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
          videoId = lookup.video_lockup?.endpoint.payload.videoId;
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

export default VideoInfo;
