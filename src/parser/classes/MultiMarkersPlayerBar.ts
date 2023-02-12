import Parser from '../index.js';
import type Chapter from './Chapter.js';
import type Heatmap from './Heatmap.js';

import { observe, ObservedArray, YTNode } from '../helpers.js';

class Marker extends YTNode {
  static type = 'Marker';

  marker_key: string;
  value: {
    heatmap?: Heatmap | null;
    chapters?: Chapter[];
  };

  constructor (data: any) {
    super();
    this.marker_key = data.key;

    this.value = {};

    if (data.value.heatmap) {
      this.value.heatmap = Parser.parseItem<Heatmap>(data.value.heatmap);
    }

    if (data.value.chapters) {
      this.value.chapters = Parser.parseArray<Chapter>(data.value.chapters);
    }
  }
}

class MultiMarkersPlayerBar extends YTNode {
  static type = 'MultiMarkersPlayerBar';

  markers_map: ObservedArray<Marker>;

  constructor(data: any) {
    super();
    this.markers_map = observe(data.markersMap?.map((marker: { key: string; value: { [key: string ]: any }}) => new Marker(marker)));
  }
}

export { Marker };
export default MultiMarkersPlayerBar;