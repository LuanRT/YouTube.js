import Text from './misc/Text.js';
import Thumbnail from './misc/Thumbnail.js';
import { YTNode } from '../helpers.js';
import type { RawNode } from '../index.js';

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