import Text from './misc/Text.js';
import { YTNode } from '../helpers.js';
import type { RawNode } from '../index.js';

export default class MusicResponsiveListItemFlexColumn extends YTNode {
  static type = 'MusicResponsiveListItemFlexColumn';

  title: Text;
  display_priority: string;

  constructor(data: RawNode) {
    super();
    this.title = new Text(data.text);
    this.display_priority = data.displayPriority;
  }
}