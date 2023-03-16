import Parser from '../index.ts';
import HeatMarker from './HeatMarker.ts';

import { YTNode } from '../helpers.ts';

class Heatmap extends YTNode {
  static type = 'Heatmap';

  max_height_dp: number;
  min_height_dp: number;
  show_hide_animation_duration_millis: number;
  heat_markers: HeatMarker[];
  heat_markers_decorations: any;

  constructor(data: any) {
    super();
    this.max_height_dp = data.maxHeightDp;
    this.min_height_dp = data.minHeightDp;
    this.show_hide_animation_duration_millis = data.showHideAnimationDurationMillis;
    this.heat_markers = Parser.parseArray(data.heatMarkers, HeatMarker);
    this.heat_markers_decorations = Parser.parseArray(data.heatMarkersDecorations);
  }
}

export default Heatmap;