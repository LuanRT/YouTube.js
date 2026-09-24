import { YTNode } from '../../helpers.js';
import type { RawNode } from '../../index.js';
import NavigationEndpoint from '../NavigationEndpoint.js';
import Thumbnail from '../misc/Thumbnail.js';
import MusicAnalyticsArtistMetadata from './MusicAnalyticsArtistMetadata.js';
import MusicAnalyticsChartEntryMetadata from './MusicAnalyticsChartEntryMetadata.js';

export interface MusicAnalyticsReleaseDate {
  day?: number;
  month?: number;
  year?: number;
}

export default class MusicAnalyticsTrackView extends YTNode {
  static type = 'MusicAnalyticsTrackView';

  artists: MusicAnalyticsArtistMetadata[];
  atv_external_video_id?: string;
  chart_entry_metadata?: MusicAnalyticsChartEntryMetadata;
  encrypted_video_id?: string;
  id?: string;
  name?: string;
  navigation_endpoint: NavigationEndpoint;
  release_date?: MusicAnalyticsReleaseDate;
  share_card_url?: string;
  song_producers?: string[];
  songwriter?: string;
  songwriters?: string[];
  sublabel?: string;
  thumbnail: Thumbnail[];
  video_duration?: number;
  view_count?: string;

  constructor(data: RawNode) {
    super();

    this.artists = (data.artists || []).map((artist: RawNode) => new MusicAnalyticsArtistMetadata(artist));
    this.atv_external_video_id = data.atvExternalVideoId;

    if (Reflect.has(data, 'chartEntryMetadata')) {
      this.chart_entry_metadata = new MusicAnalyticsChartEntryMetadata(data.chartEntryMetadata);
    }

    this.encrypted_video_id = data.encryptedVideoId;
    this.id = data.id;
    this.name = data.name;
    this.navigation_endpoint = new NavigationEndpoint(data.navigationEndpoint);

    if (Reflect.has(data, 'releaseDate')) {
      this.release_date = {
        day: data.releaseDate.day,
        month: data.releaseDate.month,
        year: data.releaseDate.year
      };
    }

    this.share_card_url = data.shareCardUrl;
    this.song_producers = data.songProducers;
    this.songwriter = data.songwriter;
    this.songwriters = data.songwriters;
    this.sublabel = data.sublabel;
    this.thumbnail = Thumbnail.fromResponse(data.thumbnail);
    this.video_duration = data.videoDuration;
    this.view_count = data.viewCount;
  }
}
