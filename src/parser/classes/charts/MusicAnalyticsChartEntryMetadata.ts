import { YTNode } from '../../helpers.js';
import type { RawNode } from '../../index.js';

export default class MusicAnalyticsChartEntryMetadata extends YTNode {
  static type = 'MusicAnalyticsChartEntryMetadata';

  current_position?: number;
  percent_views_change?: number;
  periods_on_chart?: number;
  previous_position?: number;

  constructor(data: RawNode) {
    super();
    this.current_position = data.currentPosition;
    this.percent_views_change = data.percentViewsChange;
    this.periods_on_chart = data.periodsOnChart;
    this.previous_position = data.previousPosition;
  }
}
