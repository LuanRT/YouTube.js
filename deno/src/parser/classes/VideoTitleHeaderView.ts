import { YTNode } from '../helpers.ts';
import { Parser, type RawNode } from '../index.ts';
import Text from './misc/Text.ts';
import RendererContext from './misc/RendererContext.ts';
import ButtonView from './ButtonView.ts';

export default class VideoTitleHeaderView extends YTNode {
  static type = 'VideoTitleHeaderView';

  public video_title: Text;
  public header_button: ButtonView | null;
  public renderer_context?: RendererContext;

  constructor(data: RawNode) {
    super();
    this.video_title = Text.fromAttributed(data.videoTitle);
    this.header_button = Parser.parseItem(data.headerButton, ButtonView);
    if ('rendererContext' in data) {
      this.renderer_context = new RendererContext(data.rendererContext);
    }
  }
}
