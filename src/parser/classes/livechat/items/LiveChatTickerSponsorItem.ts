import Text from '../../misc/Text';
import Thumbnail from '../../misc/Thumbnail';
import { YTNode } from '../../../helpers';

class LiveChatTickerSponsorItem extends YTNode {
  static type = 'LiveChatTickerSponsorItem';

  id: string;
  detail_text: string;
  author: {
    id: string;
    name: Text;
    thumbnails: Thumbnail[];
  };

  duration_sec: string;

  constructor(data: any) {
    super();
    this.id = data.id;
    this.detail_text = new Text(data.detailText).toString();

    this.author = {
      id: data.authorExternalChannelId,
      name: new Text(data?.authorName),
      thumbnails: Thumbnail.fromResponse(data.sponsorPhoto)
    };

    this.duration_sec = data.durationSec;
    // TODO: finish this
  }
}

export default LiveChatTickerSponsorItem;