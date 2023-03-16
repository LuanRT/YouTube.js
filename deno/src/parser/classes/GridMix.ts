import Text from './misc/Text.ts';
import Parser from '../index.ts';
import Thumbnail from './misc/Thumbnail.ts';
import NavigationEndpoint from './NavigationEndpoint.ts';
import { YTNode } from '../helpers.ts';

class GridMix extends YTNode {
  static type = 'GridMix';

  id: string;
  title: Text;
  author: Text | null;
  thumbnails: Thumbnail[];
  video_count: Text;
  video_count_short: Text;
  endpoint: NavigationEndpoint;
  secondary_endpoint: NavigationEndpoint;
  thumbnail_overlays;

  constructor(data: any) {
    super();
    this.id = data.playlistId;
    this.title = new Text(data.title);

    this.author = data.shortBylineText?.simpleText ?
      new Text(data.shortBylineText) : data.longBylineText?.simpleText ?
        new Text(data.longBylineText) : null;

    this.thumbnails = Thumbnail.fromResponse(data.thumbnail);
    this.video_count = new Text(data.videoCountText);
    this.video_count_short = new Text(data.videoCountShortText);
    this.endpoint = new NavigationEndpoint(data.navigationEndpoint);
    this.secondary_endpoint = new NavigationEndpoint(data.secondaryNavigationEndpoint);
    this.thumbnail_overlays = Parser.parseArray(data.thumbnailOverlays);
  }
}

export default GridMix;