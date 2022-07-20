import Text from './misc/Text';

import { YTNode } from '../helpers';

class MusicDescriptionShelf extends YTNode {
  static type = 'MusicDescriptionShelf';
  constructor(data) {
    super();
    this.description = new Text(data.description);
    if (this.max_collapsed_lines) {
      this.max_collapsed_lines = data.maxCollapsedLines;
    }
    if (this.max_expanded_lines) {
      this.max_expanded_lines = data.maxExpandedLines;
    }
    this.footer = new Text(data.footer);
  }
}
export default MusicDescriptionShelf;
