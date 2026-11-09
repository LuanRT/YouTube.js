import { type ObservedArray, YTNode } from '../helpers.js';
import { Parser, type RawNode } from '../index.js';
import ContentListItemView from './ContentListItemView.js';
import PlaylistCollaborationFormSchema from './misc/PlaylistCollaborationFormSchema.js';
import PlaylistCollaborationViewModelPlaylistCollaboratorData from './misc/PlaylistCollaborationViewModelPlaylistCollaboratorData.js';

export default class PlaylistCollaborationView extends YTNode {
  static type = 'PlaylistCollaborationView';

  public playlist_collaborators?: ObservedArray<ContentListItemView>;
  public turn_off_collaboration_dialog: YTNode | null;
  public copy_link_button: YTNode | null;
  public collaborate_playlist_collaboration_setting: YTNode | null;
  public playlist_collaboration_entity_key?: string;
  public playlist_collaborators_data?: PlaylistCollaborationViewModelPlaylistCollaboratorData[];
  public leave_collaborative_playlist_confirmation_dialog: YTNode | null;
  public collaboration_type?: 'COLLABORATION_TYPE_UNSPECIFIED' | 'COLLABORATION_TYPE_DEFAULT' | 'COLLABORATION_TYPE_TASTE_MATCH';
  public allow_new_collaborators_playlist_collaboration_setting: YTNode | null;
  public playlist_collaboration_form_schema?: PlaylistCollaborationFormSchema;
  public turn_off_allow_new_collaborators_dialog: YTNode | null;
  public invite_collaborators_button: YTNode | null;

  constructor(data: RawNode) {
    super();
    this.playlist_collaborators = Parser.parseArray(data.playlistCollaborators, ContentListItemView);
    this.turn_off_collaboration_dialog = Parser.parseItem(data.turnOffCollaborationDialog);
    this.copy_link_button = Parser.parseItem(data.copyLinkButton);
    this.collaborate_playlist_collaboration_setting = Parser.parseItem(data.collaboratePlaylistCollaborationSetting);

    if ('playlistCollaboratorsData' in data) {
      this.playlist_collaborators_data = data.playlistCollaboratorsData.map((item: RawNode) => new PlaylistCollaborationViewModelPlaylistCollaboratorData(item));
    }

    if ('playlistCollaborationFormSchema' in data) {
      this.playlist_collaboration_form_schema = new PlaylistCollaborationFormSchema(data.playlistCollaborationFormSchema);
    }

    this.leave_collaborative_playlist_confirmation_dialog = Parser.parseItem(data.leaveCollaborativePlaylistConfirmationDialog);
    this.allow_new_collaborators_playlist_collaboration_setting = Parser.parseItem(data.allowNewCollaboratorsPlaylistCollaborationSetting);
    this.turn_off_allow_new_collaborators_dialog = Parser.parseItem(data.turnOffAllowNewCollaboratorsDialog);
    this.invite_collaborators_button = Parser.parseItem(data.inviteCollaboratorsButton);
    this.playlist_collaboration_entity_key = data.playlistCollaborationEntityKey;
    this.collaboration_type = data.collaborationType;
  }
}