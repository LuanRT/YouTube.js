import { YTNode } from '../helpers.ts';
import { Parser, type RawNode } from '../index.ts';
import ThumbnailView from './ThumbnailView.ts';

export default class CollectionThumbnailView extends YTNode {
  static type = 'CollectionThumbnailView';

  primary_thumbnail: ThumbnailView | null;
  stack_color?: {
    light_theme: number;
    dark_theme: number;
  };

  constructor(data: RawNode) {
    super();

    this.primary_thumbnail = Parser.parseItem(data.primaryThumbnail, ThumbnailView);
    if (data.stackColor) {
      this.stack_color = {
        light_theme: data.stackColor.lightTheme,
        dark_theme: data.stackColor.darkTheme
      };
    }
  }
}