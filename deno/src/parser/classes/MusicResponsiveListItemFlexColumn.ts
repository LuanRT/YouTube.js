import Text from './misc/Text.ts';
import { YTNode } from '../helpers.ts';
import type { RawNode } from '../index.ts';

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