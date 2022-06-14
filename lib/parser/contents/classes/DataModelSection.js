'use strict';

class DataModelSection {
  type = 'dataModelSection';
  
  constructor(data) {
    this.title = data.title;
    this.subtitle = data.subtitle;
    this.metric_value = data.metricValue;
    this.comparison_indicator = data.comparisonIndicator;
  
    this.series_configuration = {
      line_series: {
        lines_data: data.seriesConfiguration.lineSeries.linesData,
        domain_axis: data.seriesConfiguration.lineSeries.domainAxis,
        measure_axis: data.seriesConfiguration.lineSeries.measureAxis
      }
    }
  }
}

module.exports = DataModelSection; 