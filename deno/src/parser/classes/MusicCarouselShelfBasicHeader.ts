import { type ObservedArray, YTNode } from '../helpers.ts';
import Parser, { type RawNode } from '../index.ts';
import Button from './Button.ts';
import IconLink from './IconLink.ts';
import MusicThumbnail from './MusicThumbnail.ts';
import Text from './misc/Text.ts';

export default class MusicCarouselShelfBasicHeader extends YTNode {
  static type = 'MusicCarouselShelfBasicHeader';

  title: Text;
  strapline?: Text;
  thumbnail?: MusicThumbnail | null;
  more_content?: Button | null;
  end_icons?: ObservedArray<IconLink>;

  constructor(data: RawNode) {
    super();
    this.title = new Text(data.title);

    if (Reflect.has(data, 'strapline')) {
      this.strapline = new Text(data.strapline);
    }

    if (Reflect.has(data, 'thumbnail')) {
      this.thumbnail = Parser.parseItem(data.thumbnail, MusicThumbnail);
    }

    if (Reflect.has(data, 'moreContentButton')) {
      this.more_content = Parser.parseItem(data.moreContentButton, Button);
    }

    if (Reflect.has(data, 'endIcons')) {
      this.end_icons = Parser.parseArray(data.endIcons, IconLink);
    }
  }
}