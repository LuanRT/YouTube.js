import Parser from '../index';
import { YTNode } from '../helpers';

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