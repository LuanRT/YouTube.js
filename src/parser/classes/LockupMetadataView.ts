import { YTNode } from '../helpers.js';
import { Parser, type RawNode } from '../index.js';
import ContentMetadataView from './ContentMetadataView.js';
import DecoratedAvatarView from './DecoratedAvatarView.js';
import Text from './misc/Text.js';
import ButtonView from './ButtonView.js';

export default class LockupMetadataView extends YTNode {
  static type = 'LockupMetadataView';

  public title: Text;
  public metadata: ContentMetadataView | null;
  public image: DecoratedAvatarView | null;
  public menu_button: ButtonView | null;

  constructor(data: RawNode) {
    super();
    this.title = Text.fromAttributed(data.title);
    this.metadata = Parser.parseItem(data.metadata, ContentMetadataView);
    this.image = Parser.parseItem(data.image, DecoratedAvatarView);
    this.menu_button = Parser.parseItem(data.menuButton, ButtonView);
  }
}