import { YTNode } from '../../helpers.js';
import type { RawNode } from '../../index.js';
import MusicAnalyticsHeroMetadata from './MusicAnalyticsHeroMetadata.js';
import type { MusicAnalyticsAvailableChartInfo } from './MusicAnalyticsPerspectiveMetadata.js';

export interface MusicAnalyticsFeaturedChartParameters {
  chart_period_type?: MusicAnalyticsAvailableChartInfo['chart_period_type'];
  chart_type?: MusicAnalyticsAvailableChartInfo['chart_type'];
  country_code?: string;
  end_date?: string;
  id?: string;
  type?: 'UNKNOWN_CHART' | 'WEEK';
}

export default class MusicAnalyticsFeaturedSection extends YTNode {
  static type = 'MusicAnalyticsFeaturedSection';

  artist_ids?: string[];
  badge_name?: string;
  chart_name?: string;
  charts_params?: MusicAnalyticsFeaturedChartParameters;
  headline?: string;
  hero_metadata?: MusicAnalyticsHeroMetadata;
  share_card_url?: string;
  track_id?: string;
  video_id?: string;

  constructor(data: RawNode) {
    super();

    this.artist_ids = data.artistIds;
    this.badge_name = data.badgeName;
    this.chart_name = data.chartName;

    if (Reflect.has(data, 'chartsParams')) {
      this.charts_params = {
        chart_period_type: data.chartsParams.chartPeriodType,
        chart_type: data.chartsParams.chartType,
        country_code: data.chartsParams.countryCode,
        end_date: data.chartsParams.endDate,
        id: data.chartsParams.id,
        type: data.chartsParams.type
      };
    }

    this.headline = data.headline;

    if (Reflect.has(data, 'heroMetadata')) {
      this.hero_metadata = new MusicAnalyticsHeroMetadata(data.heroMetadata);
    }

    this.share_card_url = data.shareCardUrl;
    this.track_id = data.trackId;
    this.video_id = data.videoId;
  }
}
