import { YTNode } from '../helpers.js';
import { Parser, type RawNode } from '../index.js';
import EngagementPanelSectionList from './EngagementPanelSectionList.js';
import Text from './misc/Text.js';

export default class DescriptionPreviewView extends YTNode {
  static type = 'DescriptionPreviewView';

  description?: Text;
  max_lines?: number;
  truncation_text?: Text;
  always_show_truncation_text: boolean;
  more_endpoint?: {
    show_engagement_panel_endpoint: {
      engagement_panel: EngagementPanelSectionList | null,
      engagement_panel_popup_type: string;
      identifier: {
        surface: string,
        tag: string
      }
    }
  };

  constructor(data: RawNode) {
    super();

    if (Reflect.has(data, 'description'))
      this.description = Text.fromAttributed(data.description);

    if (Reflect.has(data, 'maxLines'))
      this.max_lines = parseInt(data.maxLines);

    if (Reflect.has(data, 'truncationText'))
      this.truncation_text = Text.fromAttributed(data.truncationText);
    
    this.always_show_truncation_text = !!data.alwaysShowTruncationText;

    if (data.rendererContext.commandContext?.onTap?.innertubeCommand?.showEngagementPanelEndpoint) {
      const endpoint = data.rendererContext.commandContext?.onTap?.innertubeCommand?.showEngagementPanelEndpoint;

      this.more_endpoint = {
        show_engagement_panel_endpoint: {
          engagement_panel: Parser.parseItem(endpoint.engagementPanel, EngagementPanelSectionList),
          engagement_panel_popup_type: endpoint.engagementPanelPresentationConfigs.engagementPanelPopupPresentationConfig.popupType,
          identifier: {
            surface: endpoint.identifier.surface,
            tag: endpoint.identifier.tag
          }
        }
      };
    }
  }
}