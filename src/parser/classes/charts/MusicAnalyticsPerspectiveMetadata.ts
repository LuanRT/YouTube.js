import { YTNode } from '../../helpers.js';
import type { RawNode } from '../../index.js';
import Thumbnail from '../misc/Thumbnail.js';
import MusicAnalyticsHeroMetadata from './MusicAnalyticsHeroMetadata.js';

export interface MusicAnalyticsAvailableChartInfo {
  chart_period_type?: 'CHART_PERIOD_TYPE_UNKNOWN' | 'CHART_PERIOD_TYPE_DAILY' | 'CHART_PERIOD_TYPE_WEEKLY';
  chart_type?: 'CHART_TYPE_UNKNOWN' | 'CHART_TYPE_ARTISTS' | 'CHART_TYPE_TRACKS'
    | 'CHART_TYPE_VIDEOS' | 'CHART_TYPE_TRENDING_VIDEOS' | 'CHART_TYPE_SHORTS_TRACKS_BY_VIEWS' | 'CHART_TYPE_SHORTS_TRACKS_BY_USAGE';
  earliest_end_date?: string;
  latest_end_date?: string;
}

export interface MusicAnalyticsChartPeriod {
  end_time?: string;
  id?: string;
  start_time?: string;
}

export interface MusicAnalyticsChartRestrictions {
  chart_periods?: MusicAnalyticsChartPeriod[];
}

export default class MusicAnalyticsPerspectiveMetadata extends YTNode {
  static type = 'MusicAnalyticsPerspectiveMetadata';

  available_charts_info?: MusicAnalyticsAvailableChartInfo[];
  background_color?: string;
  banner: Thumbnail[];
  channel_handle?: string;
  channel_id?: string;
  chart_restrictions?: MusicAnalyticsChartRestrictions;
  entity_id?: string;
  hero_metadata?: MusicAnalyticsHeroMetadata;
  name?: string;

  constructor(data: RawNode) {
    super();

    if (Reflect.has(data, 'availableChartsInfo')) {
      this.available_charts_info = data.availableChartsInfo.map((info: RawNode) => ({
        chart_period_type: info.chartPeriodType,
        chart_type: info.chartType,
        earliest_end_date: info.earliestEndDate,
        latest_end_date: info.latestEndDate
      }));
    }

    this.background_color = data.backgroundColor;
    this.banner = Thumbnail.fromResponse(data.banner);
    this.channel_handle = data.channelHandle;
    this.channel_id = data.channelId;

    if (Reflect.has(data, 'chartRestrictions')) {
      this.chart_restrictions = {
        chart_periods: (data.chartRestrictions.chartPeriods || []).map((period: RawNode) => ({
          end_time: period.endTime,
          id: period.id,
          start_time: period.startTime
        }))
      };
    }

    this.entity_id = data.entityId;

    if (Reflect.has(data, 'heroMetadata')) {
      this.hero_metadata = new MusicAnalyticsHeroMetadata(data.heroMetadata);
    }

    this.name = data.name;
  }
}
