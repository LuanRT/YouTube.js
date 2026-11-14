import { observe, YTNode, type ObservedArray } from '../../helpers.js';
import type { RawNode } from '../../index.js';
import MusicAnalyticsArtistView from './MusicAnalyticsArtistView.js';
import type { MusicAnalyticsAvailableChartInfo } from './MusicAnalyticsPerspectiveMetadata.js';
import MusicAnalyticsHeroMetadata from './MusicAnalyticsHeroMetadata.js';

export default class MusicAnalyticsArtistViews extends YTNode {
  static type = 'MusicAnalyticsArtistViews';

  artist_views: ObservedArray<MusicAnalyticsArtistView>;
  chart_period_type?: MusicAnalyticsAvailableChartInfo['chart_period_type'];
  end_date?: string;
  hero_metadata?: MusicAnalyticsHeroMetadata;
  list_type?: 'UNKNOWN_LIST_TYPE' | 'TOP_VIEWS' | 'TRENDING' | 'TOP_VIEWS_CHART' | 'LOCALLY_POPULAR';

  constructor(data: RawNode) {
    super();

    this.artist_views = observe((data.artistViews || []).map((artist_view: RawNode) => new MusicAnalyticsArtistView(artist_view)));
    this.chart_period_type = data.chartPeriodType;
    this.end_date = data.endDate;

    if (Reflect.has(data, 'heroMetadata')) {
      this.hero_metadata = new MusicAnalyticsHeroMetadata(data.heroMetadata);
    }

    this.list_type = data.listType;
  }
}
