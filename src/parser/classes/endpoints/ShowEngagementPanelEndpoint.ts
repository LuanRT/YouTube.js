import { YTNode } from '../../helpers.js';
import type { RawNode } from '../../index.js';

export default class ShowEngagementPanelEndpoint extends YTNode {
  static type = 'ShowEngagementPanelEndpoint';

  public panel_identifier: string;
  public source_panel_identifier?: string;

  constructor(data: RawNode) {
    super();
    this.panel_identifier = data.panelIdentifier;
    this.source_panel_identifier = data.sourcePanelIdentifier;
  }
}