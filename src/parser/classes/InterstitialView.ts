import { YTNode } from '../helpers.js';
import { Parser, type RawNode } from '../index.js';
import { Text, Thumbnail } from '../misc.js';
import ButtonView from './ButtonView.js';

export default class InterstitialView extends YTNode {
  static type = 'InterstitialView';

  title: Text;
  description: Text;
  icon?: Thumbnail[];
  primary_button?: ButtonView | null;
  logging_directives?: {
    tracking_params: string,
    visibility: {
      types: string
    }
  };

  constructor(data: RawNode) {
    super();
    this.title = Text.fromAttributed(data.title);
    this.description = Text.fromAttributed(data.description);
    if (Reflect.has(data, 'icon')) {
      this.icon = Thumbnail.fromResponse(data.icon);
    }
    if (Reflect.has(data, 'primaryButton')) {
      this.primary_button = Parser.parseItem(data.primaryButton, ButtonView);
    }
    if (Reflect.has(data, 'loggingDirectives')) {
      this.logging_directives = {
        tracking_params: data.loggingDirectives.trackingParams,
        visibility: {
          types: data.loggingDirectives.visibility.types
        }
      };
    }
  }
}