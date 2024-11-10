import { type RawNode, Parser } from '../index.js';
import { type ObservedArray, YTNode } from '../helpers.js';
import ShareTarget from './ShareTarget.js';

export default class ThirdPartyShareTargetSection extends YTNode {
  static type = 'ThirdPartyShareTargetSection';

  public share_targets: ObservedArray<ShareTarget>;

  constructor(data: RawNode) {
    super();
    this.share_targets = Parser.parseArray(data.shareTargets, ShareTarget);
  }
}