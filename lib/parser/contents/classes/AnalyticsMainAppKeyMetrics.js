'use strict';

const DataModelSection = require('./DataModelSection');

class AnalyticsMainAppKeyMetrics {
  type = 'analyticsMainAppKeyMetricsModel';
  
  constructor(data) {
    this.period = data.cardData.periodLabel;
  
    const metrics_data = data.cardData.sections[0].analyticsKeyMetricsData;
  
    this.sections = metrics_data.dataModel.sections.map((section) => new DataModelSection(section));
  }
}

module.exports = AnalyticsMainAppKeyMetrics; 