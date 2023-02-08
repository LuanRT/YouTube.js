import Text from './misc/Text.js';
import Parser from '../index.js';
import Thumbnail from './misc/Thumbnail.js';
import PlaylistAuthor from './misc/PlaylistAuthor.js';
import NavigationEndpoint from './NavigationEndpoint.js';
import type Menu from './menus/Menu.js';

import { YTNode } from '../helpers.js';

class PlaylistVideo extends YTNode {
  static type = 'PlaylistVideo';

  id: string;
  index: Text;
  title: Text;
  author: PlaylistAuthor;
  thumbnails: Thumbnail[];
  thumbnail_overlays;
  set_video_id: string | undefined;
  endpoint: NavigationEndpoint;
  is_playable: boolean;
  menu: Menu | null;

  duration: {
    text: string;
    seconds: number;
  };

  constructor(data: any) {
    super();
    this.id = data.videoId;
    this.index = new Text(data.index);
    this.title = new Text(data.title);
    this.author = new PlaylistAuthor(data.shortBylineText);
    this.thumbnails = Thumbnail.fromResponse(data.thumbnail);
    this.thumbnail_overlays = Parser.parse(data.thumbnailOverlays);
    this.set_video_id = data?.setVideoId;
    this.endpoint = new NavigationEndpoint(data.navigationEndpoint);
    this.is_playable = data.isPlayable;
    this.menu = Parser.parseItem<Menu>(data.menu);
    this.duration = {
      text: new Text(data.lengthText).toString(),
      seconds: parseInt(data.lengthSeconds)
    };
  }
}

export default PlaylistVideo;