import Parser from '../index.js';
import { YTNode } from '../helpers.js';
import PlaylistPanelVideo from './PlaylistPanelVideo.js';

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