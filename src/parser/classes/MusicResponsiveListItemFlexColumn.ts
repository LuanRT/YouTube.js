import Text from './misc/Text.js';
import { YTNode } from '../helpers.js';

class MusicResponsiveListItemFlexColumn extends YTNode {
  static type = 'musicResponsiveListItemFlexColumnRenderer';

  title: Text;
  display_priority: string;

  constructor(data: any) {
    super();
    this.title = new Text(data.text);
    this.display_priority = data.displayPriority;
  }
}

export default MusicResponsiveListItemFlexColumn;