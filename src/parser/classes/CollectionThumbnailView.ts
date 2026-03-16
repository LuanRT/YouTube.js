import { YTNode } from '../helpers.js';
import { Parser, type RawNode } from '../index.js';
import ThumbnailView from './ThumbnailView.js';

interface StackColor {
  light_theme?: number;
  dark_theme?: number;
}

export default class CollectionThumbnailView extends YTNode {
  static type = 'CollectionThumbnailView';

  public primary_thumbnail: ThumbnailView | null;
  public stack_color?: StackColor;

  constructor(data: RawNode) {
    super();

    this.primary_thumbnail = Parser.parseItem(data.primaryThumbnail, ThumbnailView);
    
    if ('stackColor' in data) {
      this.stack_color = {
        light_theme: data.stackColor?.lightTheme,
        dark_theme: data.stackColor?.darkTheme
      };
    }
  }
}