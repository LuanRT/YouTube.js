import { YTNode } from '../../helpers.js';
import type { RawNode } from '../../index.js';

export default class ChangeEngagementPanelVisibilityEndpoint extends YTNode {
  static type = 'ChangeEngagementPanelVisibilityEndpoint';

  public panel_identifier: string;

  constructor(data: RawNode) {
    super();
    this.panel_identifier = data.panelIdentifier;
  }
}