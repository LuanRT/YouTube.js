import { type ObservedArray, YTNode } from '../helpers.js';
import { Parser, type RawNode } from '../index.js';
import Button from './Button.js';
import IconLink from './IconLink.js';
import MusicThumbnail from './MusicThumbnail.js';
import Text from './misc/Text.js';

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