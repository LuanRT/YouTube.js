import Text from './misc/Text';
import { YTNode } from '../helpers';
import MusicThumbnail from './MusicThumbnail';
import Parser from '..';
import Button from './Button';
import IconLink from './IconLink';

class MusicCarouselShelfBasicHeader extends YTNode {
  static type = 'MusicCarouselShelfBasicHeader';

  strapline?: Text;
  title: Text;
  thumbnail?: MusicThumbnail | null;
  more_content?: Button | null;
  end_icons?: Array<IconLink>;

  constructor(data: any) {
    super();

    if (data.strapline) {
      this.strapline = new Text(data.strapline);
    }

    this.title = new Text(data.title);
    // This.label = data.accessibilityData.accessibilityData.label;
    // ^^ redundant?
    if (data.thumbnail) {
      this.thumbnail = Parser.parseItem<MusicThumbnail>(data.thumbnail, MusicThumbnail);
    }

    if (data.moreContentButton) {
      this.more_content = Parser.parseItem<Button>(data.moreContentButton, Button);
    }

    if (data.endIcons) {
      this.end_icons = Parser.parseArray<IconLink>(data.endIcons, IconLink);
    }
  }
}

export default MusicCarouselShelfBasicHeader;