import { observe, YTNode, type ObservedArray } from '../../helpers.js';
import type { RawNode } from '../../index.js';
import MusicAnalyticsLocationView from './MusicAnalyticsLocationView.js';

export default class MusicAnalyticsLocationViews extends YTNode {
  static type = 'MusicAnalyticsLocationViews';

  location_views: ObservedArray<MusicAnalyticsLocationView>;
  region?: 'UNKNOWN_REGION' | 'COUNTRY' | 'SUBCOUNTRY' | 'CITY';

  constructor(data: RawNode) {
    super();

    this.location_views = observe((data.locationViews || []).map((location_view: RawNode) => new MusicAnalyticsLocationView(location_view)));
    this.region = data.region;
  }
}
