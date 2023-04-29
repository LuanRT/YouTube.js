import { YTNode, type ObservedArray } from '../helpers.ts';
import Parser, { type RawNode } from '../index.ts';
import MetadataBadge from './MetadataBadge.ts';
import NavigationEndpoint from './NavigationEndpoint.ts';
import Text from './misc/Text.ts';
import Thumbnail from './misc/Thumbnail.ts';

export default class GridMovie extends YTNode {
  static type = 'GridMovie';

  id: string;
  title: Text;
  thumbnails: Thumbnail[];
  duration: Text | null;
  endpoint: NavigationEndpoint;
  badges: ObservedArray<MetadataBadge>;
  metadata: Text;
  thumbnail_overlays: ObservedArray<YTNode>;

  constructor(data: RawNode) {
    super();
    const length_alt = data.thumbnailOverlays.find((overlay: RawNode) => overlay.hasOwnProperty('thumbnailOverlayTimeStatusRenderer'))?.thumbnailOverlayTimeStatusRenderer;
    this.id = data.videoId;
    this.title = new Text(data.title);
    this.thumbnails = Thumbnail.fromResponse(data.thumbnail);
    this.duration = data.lengthText ? new Text(data.lengthText) : length_alt?.text ? new Text(length_alt.text) : null;
    this.endpoint = new NavigationEndpoint(data.navigationEndpoint);
    this.badges = Parser.parseArray(data.badges, MetadataBadge);
    this.metadata = new Text(data.metadata);
    this.thumbnail_overlays = Parser.parseArray(data.thumbnailOverlays);
  }
}