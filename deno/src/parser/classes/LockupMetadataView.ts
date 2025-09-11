import { YTNode } from '../helpers.ts';
import { Parser, type RawNode } from '../index.ts';
import ContentMetadataView from './ContentMetadataView.ts';
import AvatarStackView from './AvatarStackView.ts';
import DecoratedAvatarView from './DecoratedAvatarView.ts';
import Text from './misc/Text.ts';
import ButtonView from './ButtonView.ts';

export default class LockupMetadataView extends YTNode {
  static type = 'LockupMetadataView';

  public title: Text;
  public metadata: ContentMetadataView | null;
  public image: DecoratedAvatarView | AvatarStackView | null;
  public menu_button: ButtonView | null;

  constructor(data: RawNode) {
    super();
    this.title = Text.fromAttributed(data.title);
    this.metadata = Parser.parseItem(data.metadata, ContentMetadataView);
    this.image = Parser.parseItem(data.image, [ DecoratedAvatarView, AvatarStackView ]);
    this.menu_button = Parser.parseItem(data.menuButton, ButtonView);
  }
}