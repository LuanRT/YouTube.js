import { YTNode } from '../../helpers.ts';
import Text from '../misc/Text.ts';
import Thumbnail from '../misc/Thumbnail.ts';
import type { RawNode } from '../../index.ts';

export default class CommentsSimplebox extends YTNode {
  static type = 'CommentsSimplebox';

  simplebox_avatar: Thumbnail[];
  simplebox_placeholder: Text;

  constructor(data: RawNode) {
    super();
    this.simplebox_avatar = Thumbnail.fromResponse(data.simpleboxAvatar);
    this.simplebox_placeholder = new Text(data.simpleboxPlaceholder);
  }
}