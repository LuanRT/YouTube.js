import { Parser, type RawNode } from '../index.js';
import { YTNode } from '../helpers.js';
import NavigationEndpoint from './NavigationEndpoint.js';
import Dropdown from './Dropdown.js';
import Text from './misc/Text.js';

export default class MusicPlaylistEditHeader extends YTNode {
  static type = 'MusicPlaylistEditHeader';

  title: Text;
  edit_title: Text;
  edit_description: Text;
  privacy: string;
  playlist_id: string;
  endpoint: NavigationEndpoint;
  privacy_dropdown: Dropdown | null;

  constructor(data: RawNode) {
    super();
    this.title = new Text(data.title);
    this.edit_title = new Text(data.editTitle);
    this.edit_description = new Text(data.editDescription);
    this.privacy = data.privacy;
    this.playlist_id = data.playlistId;
    this.endpoint = new NavigationEndpoint(data.collaborationSettingsCommand);
    this.privacy_dropdown = Parser.parseItem(data.privacyDropdown, Dropdown);
  }
}