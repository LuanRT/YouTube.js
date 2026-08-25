import { YTNode } from '../helpers.js';
import { Parser, type RawNode } from '../index.js';
import Text from './misc/Text.js';
import RendererContext from './misc/RendererContext .js';
import ButtonView from './ButtonView.js';


export default class VideoTitleHeaderView extends YTNode {
  static type = 'VideoTitleHeaderView';

  video_title: Text;
  header_button: ButtonView | null;
  renderer_context?: RendererContext;

  constructor(data: RawNode) {
    super();
    this.video_title = Text.fromAttributed(data.videoTitle);
    this.header_button = Parser.parseItem(data.headerButton, ButtonView);
    if ('rendererContext' in data) {
      this.renderer_context = new RendererContext(data.rendererContext);
    }
  }
}
