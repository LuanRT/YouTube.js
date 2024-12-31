import { YTNode } from '../helpers.js';
import { Parser, type RawNode } from '../index.js';
import EngagementPanelSectionList from './EngagementPanelSectionList.js';
import Text from './misc/Text.js';
import RendererContext from './misc/RendererContext.js';

export default class DescriptionPreviewView extends YTNode {
  static type = 'DescriptionPreviewView';

  public description?: Text;
  public max_lines?: number;
  public truncation_text?: Text;
  public always_show_truncation_text: boolean;
  public more_endpoint?: {
    show_engagement_panel_endpoint: {
      engagement_panel: EngagementPanelSectionList | null,
      engagement_panel_popup_type: string;
      identifier: {
        surface: string,
        tag: string
      }
    }
  };
  public renderer_context: RendererContext;

  constructor(data: RawNode) {
    super();

    if (Reflect.has(data, 'description'))
      this.description = Text.fromAttributed(data.description);

    if (Reflect.has(data, 'maxLines'))
      this.max_lines = parseInt(data.maxLines);

    if (Reflect.has(data, 'truncationText'))
      this.truncation_text = Text.fromAttributed(data.truncationText);
    
    this.always_show_truncation_text = !!data.alwaysShowTruncationText;

    // @TODO: Do something about this.
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
    
    this.renderer_context = new RendererContext(data.rendererContext);
  }
}