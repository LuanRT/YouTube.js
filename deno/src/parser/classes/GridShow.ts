import { YTNode, type ObservedArray } from '../helpers.ts';
import type { RawNode } from '../index.ts';
import Parser from '../parser.ts';
import Author from './misc/Author.ts';
import Text from './misc/Text.ts';
import NavigationEndpoint from './NavigationEndpoint.ts';
import ShowCustomThumbnail from './ShowCustomThumbnail.ts';
import ThumbnailOverlayBottomPanel from './ThumbnailOverlayBottomPanel.ts';

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