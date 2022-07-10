'use strict';

import Text from './Text';
import Parser from '..';
import Thumbnail from './Thumbnail';
import PlaylistAuthor from './PlaylistAuthor';
import NavigationEndpoint from './NavigationEndpoint';

class PlaylistVideo {
  type = 'PlaylistVideo';

  constructor(data) {
    this.id = data.videoId;
    this.index = new Text(data.index);
    this.title = new Text(data.title);
    this.author = new PlaylistAuthor(data.shortBylineText);
    this.thumbnails = Thumbnail.fromResponse(data.thumbnail);
    this.thumbnail_overlays = Parser.parse(data.thumbnailOverlays);
    this.set_video_id = data?.setVideoId;
    this.endpoint = new NavigationEndpoint(data.navigationEndpoint);
    this.is_playable = data.isPlayable;
    this.menu = Parser.parse(data.menu);
    this.duration = {
      text: new Text(data.lengthText).text,
      seconds: parseInt(data.lengthSeconds)
    };
  }
}

export default PlaylistVideo;