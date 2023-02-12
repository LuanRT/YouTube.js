import { YTNode } from '../helpers.js';

class HeatMarker extends YTNode {
  static type = 'HeatMarker';

  time_range_start_millis: number;
  marker_duration_millis: number;
  heat_marker_intensity_score_normalized: number;

  constructor(data: any) {
    super();
    this.time_range_start_millis = data.timeRangeStartMillis;
    this.marker_duration_millis = data.markerDurationMillis;
    this.heat_marker_intensity_score_normalized = data.heatMarkerIntensityScoreNormalized;
  }
}

export default HeatMarker;