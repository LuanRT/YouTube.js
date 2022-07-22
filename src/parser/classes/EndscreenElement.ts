import Parser from '../index';
import Thumbnail from './misc/Thumbnail';
import NavigationEndpoint from './NavigationEndpoint';
import Text from './misc/Text';
import { YTNode } from '../helpers';

class EndscreenElement extends YTNode {
  static type = 'EndscreenElement';

  style;
  title;
  endpoint;
  image;
  icon;
  metadata;
  call_to_action;
  hovercard_button;
  is_subscribe;
  playlist_length;
  thumbnail_overlays;
  left;
  top;
  width;
  aspect_ratio;
  start_ms;
  end_ms;
  id: string;
  constructor(data: any) {
    super();

    this.style = ''+data.style;
    this.title = new Text(data.title);
    this.endpoint = new NavigationEndpoint(data.endpoint);

    if (data.image) {
      this.image = Thumbnail.fromResponse(data.image);
    }

    if (data.icon) {
      this.icon = Thumbnail.fromResponse(data.icon);
    }

    if (data.metadata) {
      this.metadata = new Text(data.metadata);
    }

    if (data.callToAction) {
      this.call_to_action = new Text(data.callToAction);
    }

    if (data.hovercardButton) {
      this.hovercard_button = Parser.parseItem(data.hovercardButton);
    }

    if (data.isSubscribe) {
      this.is_subscribe = !!data.isSubscribe;
    }

    if (data.playlistLength) {
      this.playlist_length = new Text(data.playlistLength);
    }

    this.thumbnail_overlays = data.thumbnailOverlays ? Parser.parseArray(data.thumbnailOverlays) : undefined;
    this.left = parseFloat(data.left);
    this.width = parseFloat(data.width);
    this.top = parseFloat(data.top);
    this.aspect_ratio = parseFloat(data.aspectRatio);
    this.start_ms = parseFloat(data.startMs);
    this.end_ms = parseFloat(data.endMs);
    this.id = data.id;
  }
}

export default EndscreenElement;