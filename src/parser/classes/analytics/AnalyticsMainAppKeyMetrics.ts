import DataModelSection from './DataModelSection.js';
import { YTNode } from '../../helpers.js';
import type { RawNode } from '../../index.js';

export default class AnalyticsMainAppKeyMetrics extends YTNode {
  static type = 'AnalyticsMainAppKeyMetrics';

  period: string;
  sections: DataModelSection[];

  constructor(data: RawNode) {
    super();
    this.period = data.cardData.periodLabel;

    const metrics_data = data.cardData.sections[0].analyticsKeyMetricsData;

    this.sections = metrics_data.dataModel.sections.map(
      (section: any) => new DataModelSection(section)
    );
  }
}