import { YTNode } from '../helpers.js';
import { type RawNode } from '../index.js';
import NavigationEndpoint from './NavigationEndpoint.js';

export default class MacroMarkersListView extends YTNode {
  static type = 'MacroMarkersListView';

  title: {
    content: string
  };
  macro_marker_list_entity_key: string;
  renderer_context: {
    logging_context: {
      logging_directives: {
        tracking_params: string
      }
    },
    command_context: {
      on_tap: {
        innertube_command: NavigationEndpoint
      }
    }
  };

  constructor(data: RawNode) {
    super();
    this.title = {
      content: data.title.content
    };
    this.macro_marker_list_entity_key = data.macroMarkerListEntityKey;
    this.renderer_context = {
      logging_context: {
        logging_directives: {
          tracking_params: data.rendererContext.loggingContext.loggingDirectives.trackingParams
        }
      },
      command_context: {
        on_tap: {
          innertube_command: new NavigationEndpoint(data.rendererContext.commandContext.onTap.innertubeCommand)
        }
      }
    };
  }
}