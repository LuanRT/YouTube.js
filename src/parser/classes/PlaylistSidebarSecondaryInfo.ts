import Parser from '../index.js';
import { YTNode } from '../helpers.js';

class PlaylistSidebarSecondaryInfo extends YTNode {
  static type = 'PlaylistSidebarSecondaryInfo';

  owner;
  button;

  constructor(data: any) {
    super();
    this.owner = Parser.parse(data.videoOwner) || null;
    this.button = Parser.parse(data.button) || null;
  }
}

export default PlaylistSidebarSecondaryInfo;