import { observe, YTNode, type ObservedArray } from '../../helpers.js';
import type { RawNode } from '../../index.js';
import type { MusicAnalyticsAvailableChartInfo } from './MusicAnalyticsPerspectiveMetadata.js';
import MusicAnalyticsHeroMetadata from './MusicAnalyticsHeroMetadata.js';
import MusicAnalyticsVideoView from './MusicAnalyticsVideoView.js';

export default class MusicAnalyticsVideoViews extends YTNode {
  static type = 'MusicAnalyticsVideoViews';

  chart_period_type?: MusicAnalyticsAvailableChartInfo['chart_period_type'];
  end_date?: string;
  hero_metadata?: MusicAnalyticsHeroMetadata;
  list_type?: 'UNKNOWN_LIST_TYPE' | 'TOP_VIEWS_CHART' | 'VIRAL_CHART' | 'TRENDING_CHART';
  video_views: ObservedArray<MusicAnalyticsVideoView>;

  constructor(data: RawNode) {
    super();

    this.chart_period_type = data.chartPeriodType;
    this.end_date = data.endDate;

    if (Reflect.has(data, 'heroMetadata')) {
      this.hero_metadata = new MusicAnalyticsHeroMetadata(data.heroMetadata);
    }

    this.list_type = data.listType;
    this.video_views = observe((data.videoViews || []).map((video_view: RawNode) => new MusicAnalyticsVideoView(video_view)));
  }
}
