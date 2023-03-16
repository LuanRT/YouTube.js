import { YTNode } from '../helpers.ts';
import { RawNode } from '../index.ts';
import Text from './misc/Text.ts';
import Thumbnail from './misc/Thumbnail.ts';
import NavigationEndpoint from './NavigationEndpoint.ts';

export default class InfoPanelContent extends YTNode {
  static type = 'InfoPanelContent';

  title: Text;
  inline_link_icon_type?: string;
  source: Text;
  paragraphs: Text[];
  thumbnail: Thumbnail[];
  source_endpoint: NavigationEndpoint;
  truncate_paragraphs: boolean;
  background: string;

  constructor(data: RawNode) {
    super();
    this.title = new Text(data.title);
    this.source = new Text(data.source);
    this.paragraphs = data.paragraphs.map((p: RawNode) => new Text(p));
    this.thumbnail = Thumbnail.fromResponse(data.thumbnail);
    this.source_endpoint = new NavigationEndpoint(data.sourceEndpoint);
    this.truncate_paragraphs = !!data.truncateParagraphs;
    this.background = data.background;

    if (data.inlineLinkIcon?.iconType) {
      this.inline_link_icon_type = data.inlineLinkIcon.iconType;
    }
  }
}