import { YTNode } from '../helpers.js';
import type { RawNode } from '../index.js';
import Text from './misc/Text.js';
import Thumbnail from './misc/Thumbnail.js';

export default class ChannelExternalLinkView extends YTNode {
  static type = 'ChannelExternalLinkView';

  title: Text;
  link: Text;
  favicon: Thumbnail[];

  constructor(data: RawNode) {
    super();

    this.title = Text.fromAttributed(data.title);
    this.link = Text.fromAttributed(data.link);
    this.favicon = Thumbnail.fromResponse(data.favicon);
  }
}