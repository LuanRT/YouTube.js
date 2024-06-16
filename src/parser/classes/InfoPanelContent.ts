import { YTNode } from '../helpers.js';
import type { RawNode } from '../index.js';
import type { AttributedText } from './misc/Text.js';
import Text from './misc/Text.js';
import Thumbnail from './misc/Thumbnail.js';
import NavigationEndpoint from './NavigationEndpoint.js';

export default class InfoPanelContent extends YTNode {
  static type = 'InfoPanelContent';

  title: Text;
  source: Text;
  paragraphs?: Text[];
  attributed_paragraphs?: Text[];
  thumbnail: Thumbnail[];
  source_endpoint: NavigationEndpoint;
  truncate_paragraphs: boolean;
  background: string;
  inline_link_icon_type?: string;

  constructor(data: RawNode) {
    super();
    this.title = new Text(data.title);
    this.source = new Text(data.source);

    if (Reflect.has(data, 'paragraphs'))
      this.paragraphs = data.paragraphs.map((p: RawNode) => new Text(p));

    if (Reflect.has(data, 'attributedParagraphs'))
      this.attributed_paragraphs = data.attributedParagraphs.map((p: AttributedText) => Text.fromAttributed(p));

    this.thumbnail = Thumbnail.fromResponse(data.thumbnail);
    this.source_endpoint = new NavigationEndpoint(data.sourceEndpoint);
    this.truncate_paragraphs = !!data.truncateParagraphs;
    this.background = data.background;

    if (Reflect.has(data, 'inlineLinkIcon') && Reflect.has(data.inlineLinkIcon, 'iconType')) {
      this.inline_link_icon_type = data.inlineLinkIcon.iconType;
    }
  }
}