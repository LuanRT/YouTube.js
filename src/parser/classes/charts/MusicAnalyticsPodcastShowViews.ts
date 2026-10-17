import { observe, YTNode, type ObservedArray } from '../../helpers.js';
import type { RawNode } from '../../index.js';
import type { MusicAnalyticsAvailableChartInfo } from './MusicAnalyticsPerspectiveMetadata.js';
import MusicAnalyticsPodcastShowEntry from './MusicAnalyticsPodcastShowEntry.js';

export default class MusicAnalyticsPodcastShowEntries extends YTNode {
  static type = 'MusicAnalyticsPodcastShowEntries';

  chart_period_type?: MusicAnalyticsAvailableChartInfo['chart_period_type'];
  end_date?: string;
  podcast_show_entries: ObservedArray<MusicAnalyticsPodcastShowEntry>;

  constructor(data: RawNode) {
    super();

    this.chart_period_type = data.chartPeriodType;
    this.end_date = data.endDate;
    this.podcast_show_entries = observe((data.podcastShowEntries || []).map((entry: RawNode) => new MusicAnalyticsPodcastShowEntry(entry)));
  }
}
