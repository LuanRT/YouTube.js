import Text from './misc/Text';
import { YTNode } from '../helpers';

class MusicResponsiveListItemFlexColumn extends YTNode {
  static type = 'musicResponsiveListItemFlexColumnRenderer';

  constructor(data) {
    super();
    this.title = new Text(data.text);
    this.display_priority = data.displayPriority;
  }
}

export default MusicResponsiveListItemFlexColumn;