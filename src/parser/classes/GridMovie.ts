import Parser from '../index.js';
import Text from './misc/Text.js';
import Thumbnail from './misc/Thumbnail.js';
import NavigationEndpoint from './NavigationEndpoint.js';
import { YTNode } from '../helpers.js';
import MetadataBadge from './MetadataBadge.js';

class GridMovie extends YTNode {
  static type = 'GridMovie';

  id: string;
  title: Text;
  thumbnails: Thumbnail[];
  duration: Text | null;
  endpoint: NavigationEndpoint;
  badges: MetadataBadge[];
  metadata: Text;
  thumbnail_overlays;

  constructor(data: any) {
    super();
    const length_alt = data.thumbnailOverlays.find((overlay: any) => overlay.hasOwnProperty('thumbnailOverlayTimeStatusRenderer'))?.thumbnailOverlayTimeStatusRenderer;
    this.id = data.videoId;
    this.title = new Text(data.title);
    this.thumbnails = Thumbnail.fromResponse(data.thumbnail);
    this.duration = data.lengthText ? new Text(data.lengthText) : length_alt?.text ? new Text(length_alt.text) : null;
    this.endpoint = new NavigationEndpoint(data.navigationEndpoint);
    this.badges = Parser.parseArray<MetadataBadge>(data.badges, MetadataBadge);
    this.metadata = new Text(data.metadata);
    this.thumbnail_overlays = Parser.parseArray(data.thumbnailOverlays);
  }
}

export default GridMovie;