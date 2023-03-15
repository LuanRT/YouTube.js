import { YTNode } from '../helpers.js';
import Parser, { RawNode } from '../index.js';

class PlaylistSidebarSecondaryInfo extends YTNode {
  static type = 'PlaylistSidebarSecondaryInfo';

  owner;
  button;

  constructor(data: RawNode) {
    super();
    this.owner = Parser.parseItem(data.videoOwner);
    this.button = Parser.parseItem(data.button);
  }
}

export default PlaylistSidebarSecondaryInfo;