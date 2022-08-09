import Text from './misc/Text';
import Thumbnail from './misc/Thumbnail';
import { YTNode } from '../helpers';

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