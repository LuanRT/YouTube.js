import Text from './misc/Text.ts';
import Thumbnail from './misc/Thumbnail.ts';
import { YTNode } from '../helpers.ts';

class ProfileColumnUserInfo extends YTNode {
  static type = 'ProfileColumnUserInfo';

  title: Text;
  thumbnails: Thumbnail[];

  constructor(data: any) {
    super();
    this.title = new Text(data.title);
    this.thumbnails = Thumbnail.fromResponse(data.thumbnail);
  }
}

export default ProfileColumnUserInfo;