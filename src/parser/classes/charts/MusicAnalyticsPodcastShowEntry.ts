import { YTNode } from '../../helpers.js';
import type { RawNode } from '../../index.js';
import NavigationEndpoint from '../NavigationEndpoint.js';
import Text from '../misc/Text.js';
import Thumbnail from '../misc/Thumbnail.js';
import MusicAnalyticsChartEntryMetadata from './MusicAnalyticsChartEntryMetadata.js';
import type { MusicAnalyticsReleaseDate } from './MusicAnalyticsTrackView.js';

export default class MusicAnalyticsPodcastShowEntry extends YTNode {
  static type = 'MusicAnalyticsPodcastShowEntry';

  channel_name?: string;
  channel_navigation_endpoint: NavigationEndpoint;
  chart_entry_metadata?: MusicAnalyticsChartEntryMetadata;
  description?: Text;
  external_playlist_id?: string;
  last_updated_date?: MusicAnalyticsReleaseDate;
  name?: string;
  num_episodes?: number;
  playlist_navigation_endpoint: NavigationEndpoint;
  primary_genre?: string;
  thumbnail: Thumbnail[];

  constructor(data: RawNode) {
    super();

    this.channel_name = data.channelName;
    this.channel_navigation_endpoint = new NavigationEndpoint(data.channelNavigationEndpoint);

    if (Reflect.has(data, 'chartEntryMetadata')) {
      this.chart_entry_metadata = new MusicAnalyticsChartEntryMetadata(data.chartEntryMetadata);
    }

    if (Reflect.has(data, 'description')) {
      this.description = new Text(data.description);
    }

    this.external_playlist_id = data.externalPlaylistId;

    if (Reflect.has(data, 'lastUpdatedDate')) {
      this.last_updated_date = {
        day: data.lastUpdatedDate.day,
        month: data.lastUpdatedDate.month,
        year: data.lastUpdatedDate.year
      };
    }

    this.name = data.name;
    this.num_episodes = data.numEpisodes;
    this.playlist_navigation_endpoint = new NavigationEndpoint(data.playlistNavigationEndpoint);
    this.primary_genre = data.primaryGenre;
    this.thumbnail = Thumbnail.fromResponse(data.thumbnail);
  }
}
