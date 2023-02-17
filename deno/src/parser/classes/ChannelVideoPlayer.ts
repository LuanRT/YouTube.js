import Text from './misc/Text.ts';
import { YTNode } from '../helpers.ts';

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