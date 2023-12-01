import { YTNode } from '../helpers.ts';
import type { RawNode } from '../index.ts';
import Text from './misc/Text.ts';
import Thumbnail from './misc/Thumbnail.ts';

export default class ChannelExternalLinkView extends YTNode {
  static type = 'ChannelExternalLinkView';

  title: Text;
  link: Text;
  favicon: Thumbnail[];

  constructor(data: RawNode) {
    super();

    this.title = Text.fromAttributed(data.title);
    this.link = Text.fromAttributed(data.link);
    this.favicon = data.favicon.sources.map((x: any) => new Thumbnail(x)).sort((a: Thumbnail, b: Thumbnail) => b.width - a.width);
  }
}