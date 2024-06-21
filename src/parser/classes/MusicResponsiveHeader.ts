import { Parser, type RawNode } from '../index.js';
import { YTNode } from '../helpers.js';
import MusicThumbnail from './MusicThumbnail.js';
import MusicDescriptionShelf from './MusicDescriptionShelf.js';
import MusicInlineBadge from './MusicInlineBadge.js';
import MusicPlayButton from './MusicPlayButton.js';
import ToggleButton from './ToggleButton.js';
import Menu from './menus/Menu.js';
import Text from './misc/Text.js';
import Button from './Button.js';
import DownloadButton from './DownloadButton.js';

import type { ObservedArray } from '../helpers.js';

export default class MusicResponsiveHeader extends YTNode {
  static type = 'MusicResponsiveHeader';

  thumbnail: MusicThumbnail | null;
  buttons: ObservedArray<DownloadButton | ToggleButton | MusicPlayButton | Button | Menu>;
  title: Text;
  subtitle: Text;
  strapline_text_one: Text;
  strapline_thumbnail: MusicThumbnail | null;
  second_subtitle: Text;
  subtitle_badge?: ObservedArray<MusicInlineBadge> | null;
  description?: MusicDescriptionShelf | null;

  constructor(data: RawNode) {
    super();
    this.thumbnail = Parser.parseItem(data.thumbnail, MusicThumbnail);
    this.buttons = Parser.parseArray(data.buttons, [ DownloadButton, ToggleButton, MusicPlayButton, Button, Menu ]);
    this.title = new Text(data.title);
    this.subtitle = new Text(data.subtitle);
    this.strapline_text_one = new Text(data.straplineTextOne);
    this.strapline_thumbnail = Parser.parseItem(data.straplineThumbnail, MusicThumbnail);
    this.second_subtitle = new Text(data.secondSubtitle);

    if (Reflect.has(data, 'subtitleBadge')) {
      this.subtitle_badge = Parser.parseArray(data.subtitleBadge, MusicInlineBadge);
    }

    if (Reflect.has(data, 'description')) {
      this.description = Parser.parseItem(data.description, MusicDescriptionShelf);
    }
  }
}