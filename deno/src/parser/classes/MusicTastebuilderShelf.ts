import { Parser } from '../index.ts';
import Button from './Button.ts';
import Text from './misc/Text.ts';
import MusicTastebuilderShelfThumbnail from './MusicTastebuilderShelfThumbnail.ts';

import { YTNode } from '../helpers.ts';
import type { RawNode } from '../index.ts';

export default class MusicTasteBuilderShelf extends YTNode {
  static type = 'MusicTasteBuilderShelf';

  thumbnail: MusicTastebuilderShelfThumbnail | null;
  primary_text: Text;
  secondary_text: Text;
  action_button: Button | null;
  is_visible: boolean;

  constructor(data: RawNode) {
    super();
    this.thumbnail = Parser.parseItem(data.thumbnail, MusicTastebuilderShelfThumbnail);
    this.primary_text = new Text(data.primaryText);
    this.secondary_text = new Text(data.secondaryText);
    this.action_button = Parser.parseItem(data.actionButton, Button);
    this.is_visible = data.isVisible;
  }
}