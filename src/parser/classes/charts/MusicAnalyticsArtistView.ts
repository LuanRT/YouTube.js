import { YTNode } from '../../helpers.js';
import type { RawNode } from '../../index.js';
import NavigationEndpoint from '../NavigationEndpoint.js';
import Thumbnail from '../misc/Thumbnail.js';
import MusicAnalyticsChartEntryMetadata from './MusicAnalyticsChartEntryMetadata.js';

export default class MusicAnalyticsArtistView extends YTNode {
  static type = 'MusicAnalyticsArtistView';

  chart_entry_metadata?: MusicAnalyticsChartEntryMetadata;
  external_channel_id?: string;
  id?: string;
  name?: string;
  navigation_endpoint: NavigationEndpoint;
  share_card_url?: string;
  thumbnail: Thumbnail[];
  view_count?: string;

  constructor(data: RawNode) {
    super();

    if (Reflect.has(data, 'chartEntryMetadata')) {
      this.chart_entry_metadata = new MusicAnalyticsChartEntryMetadata(data.chartEntryMetadata);
    }

    this.external_channel_id = data.externalChannelId;
    this.id = data.id;
    this.name = data.name;
    this.navigation_endpoint = new NavigationEndpoint(data.navigationEndpoint);
    this.share_card_url = data.shareCardUrl;
    this.thumbnail = Thumbnail.fromResponse(data.thumbnail);
    this.view_count = data.viewCount;
  }
}
