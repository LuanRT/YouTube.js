import { YTNode } from '../helpers.js';
import { type RawNode } from '../index.js';

export default class AdsEngagementPanelContent extends YTNode {
  static type = 'AdsEngagementPanelContent';

  hack: boolean;

  constructor(data: RawNode) {
    super();
    this.hack = data.hack;
  }
}
