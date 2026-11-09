import { YTNode } from '../helpers.js';
import { Parser, type RawNode } from '../index.js';
import { RendererContext, Text, Thumbnail } from '../misc.js';

export default class ContentListItemView extends YTNode {
  static type = 'ContentListItemView';

  public title: Text;
  public action_button: YTNode | null;
  public avatar: YTNode | null;
  public image: Thumbnail[];
  public metadata: YTNode | null;
  public renderer_context?: RendererContext;

  constructor(data: RawNode) {
    super();
    this.title = Text.fromAttributed(data.title);
    this.action_button = Parser.parseItem(data.actionButton);
    this.avatar = Parser.parseItem(data.avatar);
    this.image = Thumbnail.fromResponse(data.image);
    this.metadata = Parser.parseItem(data.metadata);

    if ('rendererContext' in data) {
      this.renderer_context = new RendererContext(data.rendererContext);
    }
  }
}