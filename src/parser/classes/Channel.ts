import Author from './misc/Author';
import NavigationEndpoint from './NavigationEndpoint';
import Text from './misc/Text';
import { YTNode } from '../helpers';

class Channel extends YTNode {
  static type = 'Channel';

  id: string;
  author: Author;
  subscribers: Text;
  videos: Text;
  endpoint: NavigationEndpoint;
  description_snippet: Text;

  constructor(data: any) {
    super();
    this.id = data.channelId;

    this.author = new Author({
      ...data.title,
      navigationEndpoint: data.navigationEndpoint
    }, data.ownerBadges, data.thumbnail);

    this.subscribers = new Text(data.subscriberCountText);
    this.videos = new Text(data.videoCountText);
    this.endpoint = new NavigationEndpoint(data.navigationEndpoint);
    this.description_snippet = new Text(data.descriptionSnippet);
  }
}

export default Channel;