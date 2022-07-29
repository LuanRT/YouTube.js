import DataModelSection from './DataModelSection';
import { YTNode } from '../../helpers';

class AnalyticsMainAppKeyMetrics extends YTNode {
  static type = 'AnalyticsMainAppKeyMetrics';

  period: string;
  sections: DataModelSection[];

  constructor(data: any) {
    super();
    this.period = data.cardData.periodLabel;
    const metrics_data = data.cardData.sections[0].analyticsKeyMetricsData;
    this.sections = metrics_data.dataModel.sections.map((section) => new DataModelSection(section));
  }
}

export default AnalyticsMainAppKeyMetrics;