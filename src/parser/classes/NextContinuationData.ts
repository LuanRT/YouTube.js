import { YTNode } from '../helpers.js';
import { type RawNode } from '../index.js';

export default class NextContinuationData extends YTNode {
  static type = 'NextContinuationData';

  continuation: string;
  click_tracking_params: string;

  constructor(data: RawNode) {
    super();
    this.continuation = data.continuation;
    this.click_tracking_params = data.clickTrackingParams;
  }
}