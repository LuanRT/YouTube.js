import { YTNode } from '../../helpers.ts';
import type { RawNode } from '../../index.ts';

export default class ChangeEngagementPanelVisibilityAction extends YTNode {
  static type = 'ChangeEngagementPanelVisibilityAction';
  
  public target_id: string;
  public visibility: string;

  constructor(data: RawNode) {
    super();
    this.target_id = data.targetId;
    this.visibility = data.visibility;
  }
}