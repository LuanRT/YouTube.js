import { Parser, type RawNode } from '../index.ts';
import { YTNode } from '../helpers.ts';
import MusicThumbnail from './MusicThumbnail.ts';
import MusicDescriptionShelf from './MusicDescriptionShelf.ts';
import MusicInlineBadge from './MusicInlineBadge.ts';
import MusicPlayButton from './MusicPlayButton.ts';
import ToggleButton from './ToggleButton.ts';
import Menu from './menus/Menu.ts';
import Text from './misc/Text.ts';

import type { ObservedArray } from '../helpers.ts';

export default class MusicResponsiveHeader extends YTNode {
  static type = 'MusicResponsiveHeader';

  thumbnail: MusicThumbnail | null;
  buttons: ObservedArray<ToggleButton | MusicPlayButton | Menu> | null;
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
    this.buttons = Parser.parseArray(data.buttons, [ ToggleButton, MusicPlayButton, Menu ]);
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