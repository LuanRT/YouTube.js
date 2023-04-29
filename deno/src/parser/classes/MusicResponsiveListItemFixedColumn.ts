import Text from './misc/Text.ts';
import { YTNode } from '../helpers.ts';
import type { RawNode } from '../index.ts';

export default class MusicResponsiveListItemFixedColumn extends YTNode {
  static type = 'musicResponsiveListItemFlexColumnRenderer';

  title: Text;
  display_priority: string;

  constructor(data: RawNode) {
    super();
    this.title = new Text(data.text);
    this.display_priority = data.displayPriority;
  }
}