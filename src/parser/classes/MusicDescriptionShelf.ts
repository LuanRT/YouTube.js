import Text from './misc/Text.js';
import { YTNode } from '../helpers.js';

class MusicDescriptionShelf extends YTNode {
  static type = 'MusicDescriptionShelf';

  description: Text;
  max_collapsed_lines?: string;
  max_expanded_lines?: string;
  footer: Text;

  constructor(data: any) {
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