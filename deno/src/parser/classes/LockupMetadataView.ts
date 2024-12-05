import { YTNode } from '../helpers.ts';
import { Parser, type RawNode } from '../index.ts';
import ContentMetadataView from './ContentMetadataView.ts';
import DecoratedAvatarView from './DecoratedAvatarView.ts';
import Text from './misc/Text.ts';

export default class LockupMetadataView extends YTNode {
  static type = 'LockupMetadataView';

  title: Text;
  metadata: ContentMetadataView | null;
  image: DecoratedAvatarView | null;

  constructor(data: RawNode) {
    super();

    this.title = Text.fromAttributed(data.title);
    this.metadata = Parser.parseItem(data.metadata, ContentMetadataView);
    this.image = Parser.parseItem(data.image, DecoratedAvatarView);
  }
}