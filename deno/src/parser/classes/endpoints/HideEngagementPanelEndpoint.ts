import { YTNode } from '../../helpers.ts';
import type { RawNode } from '../../index.ts';

export default class HideEngagementPanelEndpoint extends YTNode {
  static type = 'HideEngagementPanelEndpoint';

  public panel_identifier: string;

  constructor(data: RawNode) {
    super();
    this.panel_identifier = data.panelIdentifier;
  }
}