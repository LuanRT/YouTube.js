import Parser from '../index.js';
import Chapter from './Chapter.js';
import Heatmap from './Heatmap.js';
import type { RawNode } from '../index.js';

import { observe, ObservedArray, YTNode } from '../helpers.js';

class Marker extends YTNode {
  static type = 'Marker';

  marker_key: string;
  value: {
    heatmap?: Heatmap | null;
    chapters?: Chapter[];
  };

  constructor (data: RawNode) {
    super();
    this.marker_key = data.key;

    this.value = {};

    if (data.value.heatmap) {
      this.value.heatmap = Parser.parseItem(data.value.heatmap, Heatmap);
    }

    if (data.value.chapters) {
      this.value.chapters = Parser.parseArray(data.value.chapters, Chapter);
    }
  }
}

class MultiMarkersPlayerBar extends YTNode {
  static type = 'MultiMarkersPlayerBar';

  markers_map: ObservedArray<Marker>;

  constructor(data: RawNode) {
    super();
    this.markers_map = observe(data.markersMap?.map((marker: {
      key: string;
      value: { [key: string ]: any
    }}) => new Marker(marker)) || []);
  }
}

export { Marker };
export default MultiMarkersPlayerBar;