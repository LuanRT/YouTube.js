import { YTNode } from '../helpers.js';
import { Parser, type RawNode } from '../index.js';
import ButtonView from './ButtonView.js';

export default class VideoTitleHeaderView extends YTNode {
  static type = 'VideoTitleHeaderView';

  video_title: {
    content: string
  };
  header_button: ButtonView | null;
  renderer_context: {
    logging_context: {
      logging_directives: {
        tracking_params: string,
        visibility: {
          types: string
        }
      }
    }
  };

  constructor(data: RawNode) {
    super();
    this.video_title = {
      content: data.videoTitle.content
    };
    this.header_button = Parser.parseItem(data.headerButton, ButtonView);
    this.renderer_context = {
      logging_context: {
        logging_directives: {
          tracking_params: data.rendererContext.loggingContext.loggingDirectives.trackingParams,
          visibility: {
            types: data.rendererContext.loggingContext.loggingDirectives.visibility.types
          }
        }
      }
    };
  }
}
