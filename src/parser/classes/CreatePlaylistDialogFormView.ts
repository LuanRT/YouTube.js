import { YTNode } from '../helpers.js';
import { Parser, type RawNode } from '../index.js';
import DropdownView from './DropdownView.js';
import TextFieldView from './TextFieldView.js';

export default class CreatePlaylistDialogFormView extends YTNode {
  static type = 'CreatePlaylistDialogFormView';

  public playlist_title: TextFieldView | null;
  public playlist_visibility: DropdownView | null;
  public disable_playlist_collaborate: boolean;
  public create_playlist_params_collaboration_enabled: string;
  public create_playlist_params_collaboration_disabled: string;
  public video_ids: string[];

  constructor(data: RawNode) {
    super();
    this.playlist_title = Parser.parseItem(data.playlistTitle, TextFieldView);
    this.playlist_visibility = Parser.parseItem(data.playlistVisibility, DropdownView);
    this.disable_playlist_collaborate = !!data.disablePlaylistCollaborate;
    this.create_playlist_params_collaboration_enabled = data.createPlaylistParamsCollaborationEnabled;
    this.create_playlist_params_collaboration_disabled = data.createPlaylistParamsCollaborationDisabled;
    this.video_ids = data.videoIds;
  }
}