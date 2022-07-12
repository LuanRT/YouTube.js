import DataModelSection from "./DataModelSection.js";

import { YTNode } from "..";

class AnalyticsMainAppKeyMetrics extends YTNode {
    static type = 'AnalyticsMainAppKeyMetrics';
    constructor(data) {
        super();
        this.period = data.cardData.periodLabel;
        const metrics_data = data.cardData.sections[0].analyticsKeyMetricsData;
        this.sections = metrics_data.dataModel.sections.map((section) => new DataModelSection(section));
    }
}
export default AnalyticsMainAppKeyMetrics;
