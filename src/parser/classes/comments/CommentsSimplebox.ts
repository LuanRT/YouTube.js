import { YTNode } from '../../helpers.js';
import Text from '../misc/Text.js';
import Thumbnail from '../misc/Thumbnail.js';
import type { RawNode } from '../../index.js';

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