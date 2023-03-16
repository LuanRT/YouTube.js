import Parser from '../index.ts';
import { YTNode } from '../helpers.ts';
import PlaylistPanelVideo from './PlaylistPanelVideo.ts';

class PlaylistPanelVideoWrapper extends YTNode {
  static type = 'PlaylistPanelVideoWrapper';

  primary: PlaylistPanelVideo | null;
  counterpart: Array<PlaylistPanelVideo | null>;

  constructor(data: any) {
    super();
    this.primary = Parser.parseItem(data.primaryRenderer, PlaylistPanelVideo);
    this.counterpart = data.counterpart?.map((item: any) => Parser.parseItem(item.counterpartRenderer, PlaylistPanelVideo)) || [];
  }
}

export default PlaylistPanelVideoWrapper;