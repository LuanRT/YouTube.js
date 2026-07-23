import { MediaInfo } from '../../core/mixins/index.js';
import { Constants } from '../../utils/index.js';

import type ChipCloud from '../classes/ChipCloud.js';
import ItemSection from '../classes/ItemSection.js';
import type MerchandiseShelf from '../classes/MerchandiseShelf.js';
import PlayerOverlay from '../classes/PlayerOverlay.js';
import type VideoSecondaryInfo from '../classes/VideoSecondaryInfo.js';
import NavigationEndpoint from '../classes/NavigationEndpoint.js';

import type { Actions, ApiResponse } from '../../core/index.js';
import type { ObservedArray, YTNode } from '../helpers.js';
import SingleColumnWatchNextResults from '../classes/SingleColumnWatchNextResults.js';
import VideoMetadata from '../classes/VideoMetadata.js';
import MusicWatchMetadata from '../classes/MusicWatchMetadata.js';
import type TransportControls from '../classes/TransportControls.js';
import LikeButton from '../classes/LikeButton.js';
import ToggleButton from '../classes/ToggleButton.js';
import { InnertubeError } from '../../utils/Utils.js';

export default class VideoInfo extends MediaInfo {
  public primary_info?: VideoMetadata | null;
  public secondary_info?: VideoSecondaryInfo | null;
  public playlist?: SingleColumnWatchNextResults['playlist'];
  public merchandise?: MerchandiseShelf | null;
  public related_chip_cloud?: ChipCloud | null;
  public watch_next_feed?: ObservedArray<YTNode> | null;
  public player_overlays?: PlayerOverlay | null;
  public autoplay?: NonNullable<SingleColumnWatchNextResults['autoplay']>['autoplay'];
  public transport_controls?: TransportControls;
  
  constructor(data: [ApiResponse, ApiResponse?], actions: Actions, cpn: string) {
    super(data, actions, cpn);

    const next = this.page[1];

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

    const single_col = next?.contents?.item()?.as(SingleColumnWatchNextResults);

    const results = single_col?.results?.results?.contents;

    if (single_col) {
      this.watch_next_feed = single_col.pivot?.contents;

      this.autoplay = single_col.autoplay?.autoplay;

      if (single_col?.playlist) {
        this.playlist = single_col.playlist;
      }
    }

    this.player_overlays = next?.player_overlays?.item()?.as(PlayerOverlay);
    this.transport_controls = next?.transport_controls;

    if (results) {
      this.primary_info = results.firstOfType(ItemSection)?.contents?.firstOfType(VideoMetadata, MusicWatchMetadata)?.as(VideoMetadata, MusicWatchMetadata);
    }

    const replay_video = this.autoplay?.replay_video_renderer;
    const owner = this.primary_info?.owner?.author;

    // Keep player response values as the primary source. The watch-next response
    // has optional metadata, so it must only fill gaps instead of replacing valid
    // values with undefined (the same fallback model used by MediaServiceCore).
    this.basic_info.id ||= this.primary_info?.video_id || replay_video?.video_id;
    this.basic_info.title ||= replay_video?.title.text || this.primary_info?.title.text;
    this.basic_info.short_description ||= this.primary_info?.description.text;
    this.basic_info.author ||= replay_video?.short_byline_text.text || owner?.name;
    this.basic_info.channel_id ||= replay_video?.short_byline_text.endpoint?.payload?.browseId || owner?.id;

    if (!this.basic_info.channel && owner) {
      this.basic_info.channel = {
        id: owner.id,
        name: owner.name,
        url: owner.url
      };
    }

    if ((!this.basic_info.thumbnail || this.basic_info.thumbnail.length === 0) && replay_video?.thumbnail) {
      this.basic_info.thumbnail = replay_video.thumbnail;
    }

    const rating_button = this.transport_controls?.like_button;
    let like_status = this.primary_info?.like_status;
    let like_count = this.primary_info?.like_count;

    if (!like_status && rating_button?.is(LikeButton)) {
      like_status = rating_button.like_status;
      like_count ??= rating_button.like_count;
    } else if (!like_status && rating_button?.is(ToggleButton)) {
      if (rating_button.is_toggled) {
        like_status = 'LIKE';
      } else if (this.transport_controls?.dislike_button?.is_toggled) {
        like_status = 'DISLIKE';
      } else {
        like_status = 'INDIFFERENT';
      }
      like_count ??= rating_button.like_count;
    }

    if (like_status) {
      this.basic_info.is_liked = like_status === 'LIKE';
      this.basic_info.is_disliked = like_status === 'DISLIKE';
    }

    if (like_count !== undefined) {
      this.basic_info.like_count = like_count;
    }

    if (this.primary_info?.allow_ratings !== undefined) {
      this.basic_info.allow_ratings = this.primary_info.allow_ratings;
    }
  }

  /**
   * Adds video to the watch history.
   */
  async addToWatchHistory(): Promise<Response> {
    return super.addToWatchHistory(Constants.CLIENTS.TV.NAME, Constants.CLIENTS.TV.VERSION);
  }

  /**
   * Likes the video.
   */
  async like(): Promise<ApiResponse> {
    const videoId = this.primary_info?.video_id || this.basic_info.id;
    
    if (!videoId) {
      throw new InnertubeError('No videoId found!');
    }
    
    if (!this.actions.session.logged_in)
      throw new Error('You must be signed in to perform this operation.');

    const like_endpoint = new NavigationEndpoint({
      likeEndpoint: {
        status: 'LIKE',
        target: videoId
      }
    });

    return like_endpoint.call(this.actions, { client: 'TV' });
  }

  /**
   * Gets the endpoint of the autoplay video
   */
  get autoplay_video_endpoint(): NavigationEndpoint | null {
    const normal_autoplay = this.autoplay?.sets?.find((set) => set.mode === 'NORMAL')?.autoplay_video_renderer?.endpoint;
    return this.next_video_endpoint || normal_autoplay || this.autoplay?.sets?.[0]?.autoplay_video_renderer?.endpoint || null;
  }

  /**
   * Gets the endpoint of the next video. Unlike the autoplay endpoint, this also
   * carries playlist/history context when YouTube provides it.
   */
  get next_video_endpoint(): NavigationEndpoint | null {
    return this.autoplay?.sets?.find((set) => set.next_video_renderer?.endpoint)?.next_video_renderer?.endpoint || null;
  }
}
