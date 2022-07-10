'use strict';

import Parser from '..';

class MetadataRowContainer {
  type = 'MetadataRowContainer';

  constructor(data) {
    this.rows = Parser.parse(data.rows);
    this.collapsed_item_count = data.collapsedItemCount;
  }
}

export default MetadataRowContainer;