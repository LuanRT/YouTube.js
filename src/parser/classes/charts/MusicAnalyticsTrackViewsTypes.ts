import { observe, YTNode, type ObservedArray } from '../../helpers.js';
import type { RawNode } from '../../index.js';
import MusicAnalyticsHeroMetadata from './MusicAnalyticsHeroMetadata.js';
import type { MusicAnalyticsAvailableChartInfo } from './MusicAnalyticsPerspectiveMetadata.js';
import MusicAnalyticsTrackView from './MusicAnalyticsTrackView.js';

export default class MusicAnalyticsTrackViewsTypes extends YTNode {
  static type = 'MusicAnalyticsTrackViewsTypes';

  chart_period_type?: MusicAnalyticsAvailableChartInfo['chart_period_type'];
  end_date?: string;
  hero_metadata?: MusicAnalyticsHeroMetadata;
  list_type?: 'UNKNOWN_LIST_TYPE' | 'TOP_VIEWS' | 'TOP_VIEWS_CHART' | 'TOP_SHORTS_BY_VIEWS' | 'TOP_SHORTS_BY_USAGE';
  track_views: ObservedArray<MusicAnalyticsTrackView>;

  constructor(data: RawNode) {
    super();

    this.chart_period_type = data.chartPeriodType;
    this.end_date = data.endDate;

    if (Reflect.has(data, 'heroMetadata')) {
      this.hero_metadata = new MusicAnalyticsHeroMetadata(data.heroMetadata);
    }

    this.list_type = data.listType;
    this.track_views = observe((data.trackViews || []).map((track_view: RawNode) => new MusicAnalyticsTrackView(track_view)));
  }
}
