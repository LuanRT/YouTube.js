'use strict';

import Parser from '..';
import Text from './Text';

class PlaylistPanel {
  type = 'PlaylistPanel';

  constructor(data) {
    this.title = data.title;
    this.title_text = new Text(data.titleText);
    this.contents = Parser.parse(data.contents);
    this.playlist_id = data.playlistId;
    this.is_infinite = data.isInfinite;
    this.continuation = data.continuations[0]?.nextRadioContinuationData?.continuation;
    this.is_editable = data.isEditable;
    this.preview_description = data.previewDescription;
    this.num_items_to_show = data.numItemsToShow;
  }
}

export default PlaylistPanel;