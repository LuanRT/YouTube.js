import Text from './misc/Text';
import { YTNode } from '../helpers';

class ChannelVideoPlayer extends YTNode {
  static type = 'ChannelVideoPlayer';

  id: string;
  title: Text;
  description: Text;
  views: Text;
  published: Text;

  constructor(data: any) {
    super();
    this.id = data.videoId;
    this.title = new Text(data.title);
    this.description = new Text(data.description);
    this.views = new Text(data.viewCountText);
    this.published = new Text(data.publishedTimeText);
  }
}

export default ChannelVideoPlayer;