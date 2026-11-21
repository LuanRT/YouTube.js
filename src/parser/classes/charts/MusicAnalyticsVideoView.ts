import { YTNode } from '../../helpers.js';
import type { RawNode } from '../../index.js';
import Thumbnail from '../misc/Thumbnail.js';
import MusicAnalyticsArtistMetadata from './MusicAnalyticsArtistMetadata.js';
import MusicAnalyticsChartEntryMetadata from './MusicAnalyticsChartEntryMetadata.js';
import type { MusicAnalyticsReleaseDate } from './MusicAnalyticsTrackView.js';

export default class MusicAnalyticsVideoView extends YTNode {
  static type = 'MusicAnalyticsVideoView';

  artists: MusicAnalyticsArtistMetadata[];
  chart_entry_metadata?: MusicAnalyticsChartEntryMetadata;
  id?: string;
  release_date?: MusicAnalyticsReleaseDate;
  share_card_url?: string;
  song_producers?: string[];
  songwriters?: string[];
  thumbnail: Thumbnail[];
  title?: string;
  video_duration?: number;
  view_count?: string;

  constructor(data: RawNode) {
    super();

    this.artists = (data.artists || []).map((artist: RawNode) => new MusicAnalyticsArtistMetadata(artist));

    if (Reflect.has(data, 'chartEntryMetadata'))
      this.chart_entry_metadata = new MusicAnalyticsChartEntryMetadata(data.chartEntryMetadata);

    this.id = data.id;

    if (Reflect.has(data, 'releaseDate')) {
      this.release_date = {
        day: data.releaseDate.day,
        month: data.releaseDate.month,
        year: data.releaseDate.year
      };
    }

    this.share_card_url = data.shareCardUrl;
    this.song_producers = data.songProducers;
    this.songwriters = data.songwriters;
    this.thumbnail = Thumbnail.fromResponse(data.thumbnail);
    this.title = data.title;
    this.video_duration = data.videoDuration;
    this.view_count = data.viewCount;
  }
}
