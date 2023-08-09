import { YTNode, type ObservedArray } from '../helpers.js';
import type { RawNode } from '../index.js';
import * as Parser from '../parser.js';
import Author from './misc/Author.js';
import Text from './misc/Text.js';
import NavigationEndpoint from './NavigationEndpoint.js';
import ShowCustomThumbnail from './ShowCustomThumbnail.js';
import ThumbnailOverlayBottomPanel from './ThumbnailOverlayBottomPanel.js';

export default class GridShow extends YTNode {
  static type = 'GridShow';

  title: Text;
  thumbnail_renderer: ShowCustomThumbnail | null;
  endpoint: NavigationEndpoint;
  long_byline_text: Text;
  thumbnail_overlays: ObservedArray<ThumbnailOverlayBottomPanel> | null;
  author: Author;

  constructor(data: RawNode) {
    super();
    this.title = new Text(data.title);
    this.thumbnail_renderer = Parser.parseItem(data.thumbnailRenderer, ShowCustomThumbnail);
    this.endpoint = new NavigationEndpoint(data.navigationEndpoint);
    this.long_byline_text = new Text(data.longBylineText);
    this.thumbnail_overlays = Parser.parseArray(data.thumbnailOverlays, ThumbnailOverlayBottomPanel);
    this.author = new Author(data.shortBylineText, undefined);
  }
}