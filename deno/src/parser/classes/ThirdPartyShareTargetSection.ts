import { type RawNode, Parser } from '../index.ts';
import { type ObservedArray, YTNode } from '../helpers.ts';
import ShareTarget from './ShareTarget.ts';

export default class ThirdPartyShareTargetSection extends YTNode {
  static type = 'ThirdPartyShareTargetSection';

  public share_targets: ObservedArray<ShareTarget>;

  constructor(data: RawNode) {
    super();
    this.share_targets = Parser.parseArray(data.shareTargets, ShareTarget);
  }
}