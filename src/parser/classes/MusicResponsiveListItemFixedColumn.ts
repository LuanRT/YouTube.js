import Text from './misc/Text.js';
import { YTNode } from '../helpers.js';
import type { RawNode } from '../index.js';

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