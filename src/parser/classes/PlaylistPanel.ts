import Parser from '../index';
import Text from './misc/Text';
import PlaylistPanelVideo from './PlaylistPanelVideo';

import { YTNode } from '../helpers';
import AutomixPreviewVideo from './AutomixPreviewVideo';

class PlaylistPanel extends YTNode {
  static type = 'PlaylistPanel';

  title: string;
  title_text: Text;
  contents;
  playlist_id: string;
  is_infinite: boolean;
  continuation: string;
  is_editable: boolean;
  preview_description: string;
  num_items_to_show: string;

  constructor(data: any) {
    super();
    this.title = data.title;
    this.title_text = new Text(data.titleText);
    this.contents = Parser.parseArray<PlaylistPanelVideo | AutomixPreviewVideo>(data.contents, [ PlaylistPanelVideo, AutomixPreviewVideo ]);
    this.playlist_id = data.playlistId;
    this.is_infinite = data.isInfinite;
    this.continuation = data.continuations?.[0]?.nextRadioContinuationData?.continuation || data.continuations?.[0]?.nextContinuationData?.continuation;
    this.is_editable = data.isEditable;
    this.preview_description = data.previewDescription;
    this.num_items_to_show = data.numItemsToShow;
  }
}

export default PlaylistPanel;