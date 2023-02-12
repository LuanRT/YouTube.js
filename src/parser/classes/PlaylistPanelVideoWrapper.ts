import Parser from '../index.js';
import { YTNode } from '../helpers.js';
import PlaylistPanelVideo from './PlaylistPanelVideo.js';

class PlaylistPanelVideoWrapper extends YTNode {
  static type = 'PlaylistPanelVideoWrapper';

  primary: PlaylistPanelVideo | null;
  counterpart: Array<PlaylistPanelVideo | null>;

  constructor(data: any) {
    super();
    this.primary = Parser.parseItem<PlaylistPanelVideo>(data.primaryRenderer);
    this.counterpart = data.counterpart?.map((item: any) => Parser.parseItem<PlaylistPanelVideo>(item.counterpartRenderer)) || [];
  }
}

export default PlaylistPanelVideoWrapper;