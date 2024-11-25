import { YTNode } from '../../helpers.js';
import type { RawNode } from '../../index.js';

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