import { YTNode } from '../../helpers.js';
import type { RawNode } from '../../index.js';

export interface MusicAnalyticsDateView {
  date?: string;
  view_count?: string;
}

export default class MusicAnalyticsDateViews extends YTNode {
  static type = 'MusicAnalyticsDateViews';

  date_views: MusicAnalyticsDateView[];
  interval?: 'UNKNOWN_INTERVAL' | 'MINUTE' | 'HOUR' | 'DAY' | 'WEEK' | 'MONTH' | 'YEAR';

  constructor(data: RawNode) {
    super();

    this.date_views = (data.dateViews || []).map((date_view: RawNode) => ({
      date: date_view.date,
      view_count: date_view.viewCount
    }));

    this.interval = data.interval;
  }
}
