import Parser from '../index.ts';
import Text from './misc/Text.ts';
import PlaylistPanelVideo from './PlaylistPanelVideo.ts';

import { YTNode } from '../helpers.ts';
import AutomixPreviewVideo from './AutomixPreviewVideo.ts';
import PlaylistPanelVideoWrapper from './PlaylistPanelVideoWrapper.ts';

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
    this.contents = Parser.parseArray<PlaylistPanelVideoWrapper | PlaylistPanelVideo | AutomixPreviewVideo>(data.contents);
    this.playlist_id = data.playlistId;
    this.is_infinite = data.isInfinite;
    this.continuation = data.continuations?.[0]?.nextRadioContinuationData?.continuation || data.continuations?.[0]?.nextContinuationData?.continuation;
    this.is_editable = data.isEditable;
    this.preview_description = data.previewDescription;
    this.num_items_to_show = data.numItemsToShow;
  }
}

export default PlaylistPanel;