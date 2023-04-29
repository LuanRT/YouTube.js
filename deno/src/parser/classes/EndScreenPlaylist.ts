import Text from './misc/Text.ts';
import Thumbnail from './misc/Thumbnail.ts';
import NavigationEndpoint from './NavigationEndpoint.ts';
import { YTNode } from '../helpers.ts';
import { type RawNode } from '../index.ts';

export default class EndScreenPlaylist extends YTNode {
  static type = 'EndScreenPlaylist';

  id: string;
  title: Text;
  author: Text;
  endpoint: NavigationEndpoint;
  thumbnails: Thumbnail[];
  video_count: Text;

  constructor(data: RawNode) {
    super();
    this.id = data.playlistId;
    this.title = new Text(data.title);
    this.author = new Text(data.longBylineText);
    this.endpoint = new NavigationEndpoint(data.navigationEndpoint);
    this.thumbnails = Thumbnail.fromResponse(data.thumbnail);
    this.video_count = new Text(data.videoCountText);
  }
}