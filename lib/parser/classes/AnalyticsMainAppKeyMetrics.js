import DataModelSection from "./DataModelSection.js";

class AnalyticsMainAppKeyMetrics {
    type = 'AnalyticsMainAppKeyMetrics';
    constructor(data) {
        this.period = data.cardData.periodLabel;
        const metrics_data = data.cardData.sections[0].analyticsKeyMetricsData;
        this.sections = metrics_data.dataModel.sections.map((section) => new DataModelSection(section));
    }
}
export default AnalyticsMainAppKeyMetrics;
