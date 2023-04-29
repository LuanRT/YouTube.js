import Text from './misc/Text.ts';
import Thumbnail from './misc/Thumbnail.ts';
import { YTNode } from '../helpers.ts';
import type { RawNode } from '../index.ts';

export default class ProfileColumnUserInfo extends YTNode {
  static type = 'ProfileColumnUserInfo';

  title: Text;
  thumbnails: Thumbnail[];

  constructor(data: RawNode) {
    super();
    this.title = new Text(data.title);
    this.thumbnails = Thumbnail.fromResponse(data.thumbnail);
  }
}