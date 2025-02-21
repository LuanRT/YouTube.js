import { YTNode } from '../../helpers.ts';
import { type RawNode } from '../../index.ts';

type Identifier = {
  surface: string,
  tag: string;
}

export default class UpdateEngagementPanelContentCommand extends YTNode {
  static type = 'UpdateEngagementPanelContentCommand';

  public content_source_panel_identifier?: Identifier;
  public target_panel_identifier?: Identifier;
  
  constructor(data: RawNode) {
    super();
    this.content_source_panel_identifier = data.contentSourcePanelIdentifier;
    this.target_panel_identifier = data.targetPanelIdentifier;
  }
}