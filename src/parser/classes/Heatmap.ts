import { Parser, type RawNode } from '../index.js';
import HeatMarker from './HeatMarker.js';
import { type ObservedArray, YTNode } from '../helpers.js';

export default class Heatmap extends YTNode {
  static type = 'Heatmap';

  max_height_dp: number;
  min_height_dp: number;
  show_hide_animation_duration_millis: number;
  heat_markers: ObservedArray<HeatMarker>;
  heat_markers_decorations: ObservedArray<YTNode>;

  constructor(data: RawNode) {
    super();
    this.max_height_dp = data.maxHeightDp;
    this.min_height_dp = data.minHeightDp;
    this.show_hide_animation_duration_millis = data.showHideAnimationDurationMillis;
    this.heat_markers = Parser.parseArray(data.heatMarkers, HeatMarker);
    this.heat_markers_decorations = Parser.parseArray(data.heatMarkersDecorations);
  }
}