import { YTNode, type ObservedArray } from '../helpers.ts';
import Parser, { type RawNode } from '../index.ts';
import AutomixPreviewVideo from './AutomixPreviewVideo.ts';
import PlaylistPanelVideo from './PlaylistPanelVideo.ts';
import PlaylistPanelVideoWrapper from './PlaylistPanelVideoWrapper.ts';
import Text from './misc/Text.ts';

export default class PlaylistPanel extends YTNode {
  static type = 'PlaylistPanel';

  title: string;
  title_text: Text;
  contents: ObservedArray<PlaylistPanelVideoWrapper | PlaylistPanelVideo | AutomixPreviewVideo>;
  playlist_id: string;
  is_infinite: boolean;
  continuation: string;
  is_editable: boolean;
  preview_description: string;
  num_items_to_show: string;

  constructor(data: RawNode) {
    super();
    this.title = data.title;
    this.title_text = new Text(data.titleText);
    this.contents = Parser.parseArray(data.contents, [ PlaylistPanelVideoWrapper, PlaylistPanelVideo, AutomixPreviewVideo ]);
    this.playlist_id = data.playlistId;
    this.is_infinite = data.isInfinite;
    this.continuation = data.continuations?.[0]?.nextRadioContinuationData?.continuation || data.continuations?.[0]?.nextContinuationData?.continuation;
    this.is_editable = data.isEditable;
    this.preview_description = data.previewDescription;
    this.num_items_to_show = data.numItemsToShow;
  }
}