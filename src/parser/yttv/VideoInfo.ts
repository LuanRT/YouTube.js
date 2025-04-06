import { MediaInfo } from '../../core/mixins/index.js';

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
import { InnertubeError } from '../../utils/Utils.js';

export default class VideoInfo extends MediaInfo {
  public primary_info?: VideoMetadata | null;
  public secondary_info?: VideoSecondaryInfo | null;
  public playlist?: SingleColumnWatchNextResults['playlist'];
  public merchandise?: MerchandiseShelf | null;
  public related_chip_cloud?: ChipCloud | null;
  public watch_next_feed?: ObservedArray<YTNode> | null;
  public player_overlays?: PlayerOverlay | null;
  public autoplay?: SingleColumnWatchNextResults['autoplay']['autoplay'];
  
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
      
      this.autoplay = single_col.autoplay.autoplay;

      this.player_overlays = next?.player_overlays?.item().as(PlayerOverlay);

      if (single_col?.playlist) {
        this.playlist = single_col.playlist;
      }
    }

    if (results) {
      this.primary_info = results.firstOfType(ItemSection)?.contents?.firstOfType(VideoMetadata);
      this.basic_info.title = this.primary_info?.title.text;
      this.basic_info.short_description = this.primary_info?.description.text;
      
      this.basic_info.author = this.primary_info?.owner?.author.name;
      this.basic_info.channel = this.primary_info?.owner?.author ? {
        id: this.primary_info.owner.author.id,
        name: this.primary_info.owner.author.name,
        url: this.primary_info.owner.author.best_thumbnail!.url
      } : null;
      
      this.basic_info.like_count = this.primary_info?.like_button?.like_count;
      this.basic_info.is_liked = this.primary_info?.like_button?.like_status === 'LIKE';
      this.basic_info.is_disliked = this.primary_info?.like_button?.like_status === 'DISLIKE';
      this.basic_info.allow_ratings = this.primary_info?.allow_ratings;
    }
  }

  /**
   * Adds video to the watch history.
   */
  async addToWatchHistory(): Promise<Response> {
    return super.addToWatchHistory();
  }

  /**
   * Likes the video.
   */
  async like(): Promise<ApiResponse> {
    const videoId = this.primary_info?.video_id;
    
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
    return this.autoplay?.sets?.[0]?.autoplay_video_renderer?.endpoint || null;
  }
}